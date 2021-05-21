import React from "react"
import Button from "./Button"
import { IPopProps } from "../helpers/helpers"

const DuplicatePop = (props: IPopProps) => {
  const { editPopover, duplicatePopover, delPopover } = props
  return (
    <>
      <div className="py-5px my-2px">Duplicate this item? </div>
      <div
        onClick={() => {
          editPopover(false)
          delPopover(false)
          duplicatePopover(false)
        }}
      >
        <Button textColor="black" backgroundColor="#dec5ff">
          Duplicate
        </Button>
      </div>
    </>
  )
}

export default DuplicatePop
