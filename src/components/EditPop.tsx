import React from "react"
import Button from "./Button"
import { IPopProps } from "../helpers/helpers"

const EditPop = (props: IPopProps) => {
  const { editPopover, duplicatePopover, delPopover } = props
  return (
    <>
      <div className="py-5px my-2px">Edit this item? </div>
      <div
        onClick={() => {
          editPopover(false)
          delPopover(false)
          duplicatePopover(false)
        }}
      >
        <Button textColor="black" backgroundColor="#9df7c0">
          Accept
        </Button>
      </div>
    </>
  )
}

export default EditPop
