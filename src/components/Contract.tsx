import React, { useState, FC } from "react"
import { Icon } from "@iconify/react"
import arrowRightAlt2 from "@iconify-icons/dashicons/arrow-right-alt2"
import OptionsPopover from "../components/OptionsPopover"
import Popover from "../components/Popover"
import DeletePop from "../components/DeletePop"
import DuplicatePop from "../components/DuplicatePop"
import EditPop from "../components/EditPop"
import { Contract as ContractType } from "../types/Contract"

const Contract: FC<ContractType> = ({ vendor, project, contractMeta }) => {
  const [moreActive, setMoreActive] = useState<boolean>(false)
  const [popover, setPopover] = useState(false)

  const [duplicatePopover, setDuplicatePopover] = useState<boolean>(false)
  const [editPopover, setEditPopover] = useState<boolean>(false)
  const [delPopover, setDelPopover] = useState<boolean>(false)

  const currentTimestamp = new Date().getTime()
  const startDateTimestamp = new Date(contractMeta.startDate).getTime()
  const endDateTimestamp = new Date(contractMeta.endDate).getTime()

  const timePassed = currentTimestamp - startDateTimestamp
  const timeToPass = endDateTimestamp - startDateTimestamp

  const progress = (timePassed / timeToPass) * 100

  const toggleSeeMore = () => {
    setMoreActive(!moreActive)
  }

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
            <div className="mt-15px"> {vendor.name}</div>
          </div>
          <div
            style={moreActive ? { opacity: "100%" } : {}}
            className="absolute mt-80px more-contract-info flex col trans-03s opacity-0"
          >
            <span className="my-2px color-light-gray font-14px trans-03s">
              {vendor.firstName} {vendor.lastName}
            </span>
            <span className="my-2px color-light-gray font-14px trans-03s">
              {vendor.street} {vendor.houseNumber}{" "}
              {vendor.flatNumber && `/ ${vendor.flatNumber}`}
            </span>
            <span className="my-2px color-light-gray font-14px trans-03s">
              {vendor.zipCode} {vendor.city}
            </span>
            {[].map(
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
        <div className="color-light-gray mt-15px">{project.name}</div>
        <div className="flex col relative">
          <div className="time-period-progress-bar relative">
            <div
              style={{ width: `${progress}%` }}
              className="progress absolute"
            ></div>
          </div>
          <div className="color-light-gray font-14px mt-10px">
            {contractMeta.startDate} - {contractMeta.endDate}
          </div>
          <div
            style={moreActive ? { opacity: "100%" } : {}}
            className="absolute mt-80px more-contract-info flex col trans-03s opacity-0"
          >
            {[].map(
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
            <div className="mt-15px">
              {contractMeta.value * 1000} {contractMeta.currency}
            </div>
            <div
              style={moreActive ? { opacity: "100%" } : {}}
              className="absolute mt-80px more-contract-info flex col trans-03s opacity-0"
            >
              {[].map(
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
