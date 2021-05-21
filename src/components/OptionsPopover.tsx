import React, { useState } from "react"
import { Icon } from "@iconify/react"
import threeDotsVertical from "@iconify-icons/bi/three-dots-vertical"

interface IOptionPopover {
  edit: any
  duplicate: any
  del: any
}

const OptionsPopover = (props: IOptionPopover) => {
  const { edit, duplicate, del } = props
  const [popover, setPopover] = useState<boolean>(false)
  return (
    <div
      onMouseEnter={() => setPopover(true)}
      onMouseLeave={() => setPopover(false)}
      className="relative pointer flex align-center option-button "
      style={{ height: "50px" }}
    >
      <Icon height={20} icon={threeDotsVertical} />
      <div
        style={popover ? { display: "flex" } : { display: "none" }}
        className="popover-element col p-10px absolute"
      >
        <div onClick={() => edit(true)} className="py-5px option-ele-text">
          Edit
        </div>
        <div onClick={() => duplicate(true)} className="py-5px option-ele-text">
          Duplicate
        </div>
        <div onClick={() => del(true)} className="py-5px option-ele-text">
          Delete
        </div>
      </div>
    </div>
  )
}

export default OptionsPopover
