import React from "react"
import Button from "../components/Button"
import { IPopProps } from "../helpers/helpers"

const DeletePop = (props: IPopProps) => {
  const { editPopover, duplicatePopover, delPopover } = props
  return (
    <>
      <div className="py-5px my-2px">Delete this item? </div>
      <div
        onClick={() => {
          editPopover(false)
          delPopover(false)
          duplicatePopover(false)
        }}
      >
        <Button textColor="black" backgroundColor="#ff9999">
          Delete
        </Button>
      </div>
    </>
  )
}

export default DeletePop
