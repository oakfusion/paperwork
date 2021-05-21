import React, { useState } from "react"
import pastContractsData from "../data/pastContractsData"
import Layout from "../components/Layout"
import Contract from "../components/Contract"
import { IContract } from "../helpers/helpers"
import { ContractTypes } from "../data/contractTypes"
import ContractTableTitles from "../components/ContractTableTitles"

const PastContracts = () => {
  const [contracts] = useState<IContract[]>([])
  for (let i = 0; i < ContractTypes.length; i++) {
    const contract: IContract = {
      key: ContractTypes[i],
      array: pastContractsData.filter(s => s.type === ContractTypes[i]),
    }
    contracts[i] = contract
  }
  return (
    <Layout>
      <div className="flex row align-center">
        <h2>Past Contracts</h2>
        <div className="contracts-amount-container">
          <div>{pastContractsData.length}</div>
        </div>
      </div>
      <div className="grid-active-contracts-titles">
        <div className="flex col">
          <span className="color-gray">Cost of active contracts</span>
          <span className="weight-600 margin-y-10px">$ 32,000</span>
        </div>
        <div className="flex col">
          <span className="color-gray">Highest cost project</span>
          <span className="weight-600 margin-y-10px">Nokia</span>
        </div>
        <div className="flex col">
          <span className="color-gray">Highest cost vendor</span>
          <span className="weight-600 margin-y-10px">Traduko AB</span>
        </div>
      </div>
      <br />
      <br />
      <div className="contracts-container">
        {contracts.map(s => (
          <>
            <h3 className="">{s.key}</h3>
            <ContractTableTitles />
            {s.array.map(m => (
              <>
                <Contract {...m} />
              </>
            ))}
          </>
        ))}
      </div>
    </Layout>
  )
}

export default PastContracts
