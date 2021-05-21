import React from "react"
import { Icon } from "@iconify/react"
import plusCircleFilled from "@iconify-icons/ant-design/plus-circle-filled"

const NewTemplate = () => {
  return (
    <div className="relative flex col br-radius-15px bg-color-dark-gray m-10px p-20px br-1-soli-gray pointer trans-03s contract-template">
      <div className="flex row justify-between">
        <div className="flex row align-center">
          <Icon
            width={32}
            height={32}
            className="ml-10px"
            icon={plusCircleFilled}
          />
          <span className="font-24px weight-600 ml-10px">New Template</span>
        </div>
        <div></div>
      </div>
      <div className="mb-100px">
        <p>
          Upgrade to add your contact template. Such SOW and Consulting
          contracts templates to complete contracts.
        </p>
      </div>
    </div>
  )
}

export default NewTemplate
