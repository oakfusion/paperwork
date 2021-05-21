import React, { useState } from "react"
import { Item } from "../helpers/helpers"
import { Icon } from "@iconify/react"
import arrowRightAlt2 from "@iconify-icons/dashicons/arrow-right-alt2"
import OptionsPopover from "../components/OptionsPopover"
import Popover from "../components/Popover"
import DeletePop from "../components/DeletePop"
import DuplicatePop from "../components/DuplicatePop"
import EditPop from "../components/EditPop"

const Contract = (props: Item) => {
  const {
    project,
    timePeriod,
    contractValue,
    vendor,
    progress,
    contractValueMore,
    timePeriodMore,
    vendorMore,
  } = props
  const [moreActive, setMoreActive] = useState<boolean>(false)
  const [popover, setPopover] = useState(false)

  const [duplicatePopover, setDuplicatePopover] = useState<boolean>(false)
  const [editPopover, setEditPopover] = useState<boolean>(false)
  const [delPopover, setDelPopover] = useState<boolean>(false)

  const toggleSeeMore = () => {
    setMoreActive(!moreActive)
  }
  console.log(vendorMore)
  return (
    <>
      <div
        style={
          editPopover || duplicatePopover || delPopover
            ? { display: "flex" }
            : { display: "none" }
        }
        className="relative"
      >
        <Popover
          delPopover={setDelPopover}
          editPopover={setEditPopover}
          duplicatePopover={setDuplicatePopover}
          title={
            (duplicatePopover ? "Duplicate?" : "") +
            (editPopover ? "Edit" : "") +
            (delPopover ? "Delete?" : "")
          }
        >
          {duplicatePopover ? (
            <DuplicatePop
              delPopover={setDelPopover}
              editPopover={setEditPopover}
              duplicatePopover={setDuplicatePopover}
            />
          ) : (
            <></>
          )}
          {editPopover ? (
            <EditPop
              delPopover={setDelPopover}
              editPopover={setEditPopover}
              duplicatePopover={setDuplicatePopover}
            />
          ) : (
            <></>
          )}
          {delPopover ? (
            <DeletePop
              delPopover={setDelPopover}
              editPopover={setEditPopover}
              duplicatePopover={setDuplicatePopover}
            />
          ) : (
            <></>
          )}
        </Popover>
      </div>
      <div
        style={moreActive ? { minHeight: "230px" } : { minHeight: "46px" }}
        className="contract-container trans-03s"
      >
        <div className="flex col relative">
          <div className="flex row ">
            <div onClick={toggleSeeMore} className="pointer mt-15px">
              <Icon icon={arrowRightAlt2} />
            </div>
            <div className="mt-15px"> {vendor}</div>
          </div>
          <div
            style={moreActive ? { opacity: "100%" } : {}}
            className="absolute mt-80px more-contract-info flex col trans-03s opacity-0"
          >
            {vendorMore.map(
              (s, idx) =>
                moreActive && (
                  <span
                    key={idx}
                    className="my-2px color-light-gray font-14px trans-03s"
                  >
                    {s}
                  </span>
                )
            )}
          </div>
        </div>
        <div className="color-light-gray mt-15px">{project}</div>
        <div className="flex col relative">
          <div className="time-period-progress-bar relative">
            <div
              style={{ width: progress }}
              className="progress absolute"
            ></div>
          </div>
          <div className="color-light-gray font-14px mt-10px">{timePeriod}</div>
          <div
            style={moreActive ? { opacity: "100%" } : {}}
            className="absolute mt-80px more-contract-info flex col trans-03s opacity-0"
          >
            {timePeriodMore.map(
              (s, idx) =>
                moreActive && (
                  <span
                    key={idx}
                    className="my-2px color-light-gray font-14px trans-03s"
                  >
                    {s}
                  </span>
                )
            )}
          </div>
        </div>
        <div className="color-light-gray">
          <div className="flex col relative">
            <div className="mt-15px">{contractValue}</div>
            <div
              style={moreActive ? { opacity: "100%" } : {}}
              className="absolute mt-80px more-contract-info flex col trans-03s opacity-0"
            >
              {contractValueMore.map(
                (s, idx) =>
                  moreActive && (
                    <span
                      key={idx}
                      className="my-2px color-light-gray font-14px trans-03s"
                    >
                      {s}
                    </span>
                  )
              )}
            </div>
          </div>
        </div>
        <OptionsPopover
          edit={setEditPopover}
          duplicate={setDuplicatePopover}
          del={setDelPopover}
        />
      </div>
    </>
  )
}

export default Contract
