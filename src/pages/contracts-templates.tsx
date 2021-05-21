import React from "react"
import ContractTemplate from "../components/ContractTemplate"
import NewTemplate from "../components/NewTemplate"
import contractsTemplateData from "../data/contractTemplateData"
import Layout from "../components/Layout"

const ContractsTemplates = ({ children }) => {
  return (
    <Layout>
      <div className="flex col">
        <h2>Contracts Templates</h2>
        <div className="triple-grid">
          {contractsTemplateData.map(s => (
            <ContractTemplate
              key={s.id}
              title={s.title}
              text={s.text}
              author={s.author}
            />
          ))}
          <NewTemplate />
        </div>
      </div>
    </Layout>
  )
}

export default ContractsTemplates
