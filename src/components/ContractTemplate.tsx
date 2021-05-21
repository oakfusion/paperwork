import React from "react"
import { IContractTemplate } from "../helpers/helpers"
import { Icon } from "@iconify/react"
import questionIcon from "@iconify-icons/akar-icons/question"

const ContractTemplate = (props: IContractTemplate) => {
  const { title, text, author } = props
  return (
    <div className="relative flex col br-radius-15px bg-color-dark-gray m-10px p-20px br-1-soli-gray pointer trans-03s contract-template">
      <div className="flex row justify-between">
        <div>
          <span className="font-24px weight-600">{title}</span>
        </div>
        <div>
          <div className="free-badge flex justify-center align-center bg-light-green br-radius-5px color-black br-1-soli-gray ">
            <span className="p-5px">Free</span>
          </div>
        </div>
      </div>
      <div className="mb-100px">
        <p>{text}</p>
      </div>
      <div className="absolute b-15px flex row align-center">
        <p>Created by {author}</p>
        <Icon className="ml-10px" icon={questionIcon} />
      </div>
    </div>
  )
}

export default ContractTemplate
