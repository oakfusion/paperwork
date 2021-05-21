import React, { useState } from "react"
import Button from "../components/Button"
import plusCircleFilled from "@iconify-icons/ant-design/plus-circle-filled"
import sideNavData from "../data/sideNavData"
import SideNavItem from "../components/SideNavItem"
import { Icon } from "@iconify/react"
import smileIcon from "@iconify-icons/fa-regular/smile"
import "../css/styles.css"
import CreateContractPopover from "../components/CreateContractPopover"
import Popover from "../components/Popover"
//import { ApplicationState } from "../store/store"

const Layout = ({ children }) => {
  const [createContractActive, setCreateContractActive] = useState<boolean>(
    false
  )
  //const popover = useSelector((state: ApplicationState) => state.popover)
  return (
    <section style={{ minWidth: "1200px" }}>
      <div
        style={createContractActive ? { display: "flex" } : { display: "none" }}
        className="relative"
      >
        <CreateContractPopover isActive={setCreateContractActive} />
      </div>
      <div className="container">
        <div className="side-nav">
          <h1 className="title">PAPERWORK</h1>
          <div onClick={() => setCreateContractActive(true)} className="m-10px">
            <Button
              iconColor="white"
              img={plusCircleFilled}
              backgroundColor="#7811ff"
            >
              New contract
            </Button>
          </div>
          <nav>
            {sideNavData.map(s => (
              <SideNavItem
                key={s.id}
                icon={s.icon}
                slug={s.slug}
                name={s.name}
              />
            ))}
          </nav>
        </div>
        <div className="main-content-container">
          <div className="flex justify-right row user-container">
            <div className="flex row align-center">
              <Icon className="user-icon" color="white" icon={smileIcon} />
              <span className="color-light-gray">Sara Johanesson</span>
            </div>
          </div>
          {children}
        </div>
      </div>
    </section>
  )
}

export default Layout
