import React from "react"
import Button from "./Button"
import { IPopProps } from "../helpers/helpers"

const EditProjectPop = (props: IPopProps) => {
  const { editPopover, duplicatePopover, delPopover } = props
  return (
    <>
      <div className="flex justify-center col mx-55px mb-20px">
        <div className="py-5px my-2px flex justify-center ">Edit Project</div>
        <div className="br-1-soli-gray my-10px"></div>
        <div>
          <div className="flex col justify-center">
            <input
              className="form-input-black"
              placeholder="Altonbladet Webb"
            ></input>
            <input className="form-input-black" placeholder="7750"></input>
          </div>
          <div
            onClick={() => {
              editPopover(false)
              delPopover(false)
              duplicatePopover(false)
            }}
            className="mt-20 "
          >
            <Button textColor="white" backgroundColor="#cccccc">
              Save Project
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditProjectPop
