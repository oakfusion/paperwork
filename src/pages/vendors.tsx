import React from "react"
import VendorTableTitles from "../components/VendorTableTitles"
import vendorData from "../data/vendorData"
import Vendor from "../components/Vendor"

import Layout from "../components/Layout"

const Vendors = ({ children }) => {
  return (
    <Layout>
      <div className="flex col">
        <h2>Vendors</h2>
        <VendorTableTitles />
        {vendorData.map(s => (
          <Vendor
            key={s.id}
            vendor={s.vendor}
            numOfContracts={s.numOfContracts}
            activeContract={s.activeContract}
            totalValue={s.totalValue}
          />
        ))}
      </div>
    </Layout>
  )
}

export default Vendors
