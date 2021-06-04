import React from "react"
import VendorTableTitles from "../components/VendorTableTitles"
import vendorData from "../data/vendorData"
import Vendor from "../components/Vendor"

import Layout from "../components/Layout"
import { useQuery } from "react-query"
import { getVendorsIndex } from "../api/vendors"
import { Contract } from "../types/Contract"

const getVendorTotalValue = (contracts: Contract[]) =>
  contracts.reduce((acc, contract) => acc + contract.contractMeta.value, 0)

const Vendors = ({ children }) => {
  const { isFetching, data: vendors } = useQuery("vendors", getVendorsIndex)

  if (isFetching) {
    return <span>Loading...</span>
  }

  return (
    <Layout>
      <div className="flex col">
        <h2>Vendors</h2>
        <VendorTableTitles />
        {vendors.map(vendor => (
          <Vendor
            key={vendor.uuid}
            vendor={vendor.name}
            numOfContracts={vendor.contracts.length}
            activeContract={
              vendor.contracts.find(({ status }) => status === "ACTIVE")
                ? "Y"
                : "N"
            }
            totalValue={"$ " + getVendorTotalValue(vendor.contracts)}
          />
        ))}
      </div>
    </Layout>
  )
}

export default Vendors
