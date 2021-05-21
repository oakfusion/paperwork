import React, { useState } from "react"
import pendingContractsData from "../data/pendingContractsData"
import Layout from "../components/Layout"
import Contract from "../components/Contract"
import bellPlus from "@iconify-icons/tabler/bell-plus"
import { Icon } from "@iconify/react"
import { IContract } from "../helpers/helpers"
import { ContractTypes } from "../data/contractTypes"
import ContractTableTitles from "../components/ContractTableTitles"

const PendingContracts = ({ children }) => {
  const [contracts] = useState<IContract[]>([])
  for (let i = 0; i < ContractTypes.length; i++) {
    const contract: IContract = {
      key: ContractTypes[i],
      array: pendingContractsData.filter(s => s.type === ContractTypes[i]),
    }
    contracts[i] = contract
  }
  return (
    <Layout>
      <div className="flex row align-center">
        <h2>Pending Contracts</h2>
        <div className="contracts-amount-container">
          <div>{pendingContractsData.length}</div>
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
                {m.sended && (
                  <>
                    <Icon color="#dec5ff" icon={bellPlus} />
                    <span className="sended-info font-14px">
                      Contract sent to haka@gmail.com. You will get an email
                      when it's been signed.
                    </span>
                  </>
                )}
              </>
            ))}
          </>
        ))}
      </div>
      {children}
    </Layout>
  )
}

export default PendingContracts
