import React, { PropsWithChildren } from "react"
import Button from "./Button"
import { Icon } from "@iconify/react"
import crossCircled from "@iconify-icons/radix-icons/cross-circled"

interface IPopover {
  editPopover: Function
  duplicatePopover: any
  delPopover: any
  title?: string
}

const Popover = (props: PropsWithChildren<IPopover>) => {
  const { editPopover, duplicatePopover, delPopover, children, title } = props
  return (
    <div className="fixed t0 l0 w100vw h100vh flex justify-center align-center z-50 bg-black-transparent">
      <div className="absolute bg-color-dark-gray flex col br-radius-15px br-1-soli-gray">
        <div className="flex col justify-center">
          <div className="flex row justify-between">
            <h2 style={{ padding: "0px 90px 0px 30px" }}>{title}</h2>
            <div
              onClick={() => {
                editPopover(false)
                delPopover(false)
                duplicatePopover(false)
              }}
            >
              <Icon
                width={32}
                height={32}
                className="pointer mr-20 mt-20"
                icon={crossCircled}
              />
            </div>
          </div>
          <div className="px-15px">{children}</div>
        </div>

        <div
          onClick={() => {
            editPopover(false)
            delPopover(false)
            duplicatePopover(false)
          }}
          style={{ margin: "10px 30px 20px 30px " }}
        ></div>
      </div>
    </div>
  )
}

export default Popover
