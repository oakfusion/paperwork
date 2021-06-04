import React from "react"
import { useQuery } from "react-query"
import Layout from "../components/Layout"
import Contract from "../components/Contract"
import ContractTableTitles from "../components/ContractTableTitles"
import { getContractsIndex } from "../api/contracts"
import { Contract as ContractType } from "../types/Contract"

const getContractsSum = (contracts: ContractType[]): number =>
  contracts.reduce(
    (total, contract) => total + contract.contractMeta.value * 1000,
    0
  )

const getHighestCostProject = (contracts: ContractType[]): string => {
  const highestCost = Math.max.apply(
    Math,
    contracts.map(({ project }) => project.value)
  )

  return contracts.find(({ project }) => project.value === highestCost).project
    .name
}

const ActiveContracts = ({ children, location, params }) => {
  const { status } = params
  const { data: contracts, isFetching } = useQuery(
    ["contracts", { status }],
    getContractsIndex
  )

  if (isFetching) {
    return <span>Loading...</span>
  }

  return (
    <Layout>
      <div className="flex row align-center">
        <h2 className="ucfirst">{status} Contracts</h2>
        <div className="contracts-amount-container">
          <div>{contracts.length}</div>
        </div>
      </div>
      <div className="grid-active-contracts-titles">
        <div className="flex col">
          <span className="color-gray">Cost of active contracts</span>
          <span className="weight-600 margin-y-10px">
            $ {getContractsSum(contracts)}
          </span>
        </div>
        <div className="flex col">
          <span className="color-gray">Highest cost project</span>
          <span className="weight-600 margin-y-10px">
            {getHighestCostProject(contracts)}
          </span>
        </div>
        <div className="flex col">
          <span className="color-gray">Highest cost vendor</span>
          <span className="weight-600 margin-y-10px">Traduko AB</span>
        </div>
      </div>
      <br />
      <br />
      <div className="contracts-container">
        <ContractTableTitles />
        {contracts.map(contract => (
          <Contract {...contract} />
        ))}
      </div>
      {children}
    </Layout>
  )
}

export default ActiveContracts
