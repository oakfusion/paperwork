import React from "react"
import "../css/styles.css"
import GeneratedForm from "../components/GeneratedForm"
import { Icon } from "@iconify/react"
import smileIcon from "@iconify-icons/fa-regular/smile"
import Button from "../components/Button"
import documentBlank from "@iconify-icons/carbon/document-blank"
import { Link } from "gatsby"

const GeneratedContract = () => {
  return (
    <section className="flex col">
      <div className="width-1200 flex row justify-between">
        <h1 className="">PAPERWORK</h1>
        <div className="flex justify-right row user-container">
          <div className="flex row align-center">
            <Icon className="user-icon" color="white" icon={smileIcon} />
            <span className="color-light-gray">Sara Johanesson</span>
          </div>
        </div>
      </div>
      <div className="width-1200 flex row">
        <div className="width-600 flex col">
          <h2>Summary of Contract</h2>
          <span className="color-gray font-14px">
            A <span className="color-white weight-600">SOW</span>,{" "}
            <span className="color-white weight-600">NDA</span> and{" "}
            <span className="color-white weight-600">Consultant Agreement</span>{" "}
            has beed generated for this Contract
          </span>

          <span className="color-gray font-14px mt-50px">Libido AB</span>
          <span className="color-gray font-14px">Hakan Libido</span>
          <span className="color-gray font-14px">Kungestensgatam 24</span>
          <span className="color-gray font-14px">114 23 Stockholm</span>

          <span className="color-gray font-14px mt-16px">Project:</span>
          <span className="py-5px weight-600">Summer Campaing</span>
          <div className="flex row mt-16px">
            <div className="flex col mr-30px">
              <span className="color-gray font-14px">Start date:</span>
              <span className="py-5px weight-600">26/04/2020</span>
            </div>
            <div className="flex col mr-30px">
              <span className="color-gray font-14px">End date:</span>
              <span className="py-5px weight-600">13/05/2020</span>
            </div>
          </div>
          <div className="flex row mt-16px ">
            <div className="flex col mr-30px">
              <span className="color-gray font-14px">Total cost:</span>
              <span className="py-5px weight-600">$6,000</span>
            </div>
            <div className="flex col mr-30px">
              <span className="color-gray font-14px">Hourly rate:</span>
              <span className="py-5px weight-600">$100</span>
            </div>
            <div className="flex col">
              <span className="color-gray font-14px">Hours:</span>
              <span className="py-5px weight-600">60</span>
            </div>
          </div>
          <span className="color-gray font-14px mt-16px">
            Description of services:
          </span>
          <span className="py-5px weight-600">
            Sound design for our new app
          </span>
          <span className="py-5px weight-600">1 intro song</span>
          <span className="py-5px weight-600">10 sound effects</span>
          <span className="py-5px weight-600">2 rounds of review</span>
          <div className="flex row align-center mt-50px">
            <div className="wmin200px">
              <Button
                slug="/pending-contracts"
                textColor="black"
                iconColor="black"
                img={documentBlank}
                backgroundColor="#9df7c0"
              >
                Send for review and signature
              </Button>
            </div>
            <span className="m-10px"> or </span>
            <Link
              className="decoration-none color-white weight-600 font-24px"
              to="/active-contracts"
            >
              Cancel
            </Link>
          </div>
        </div>

        <div className="flex">
          <GeneratedForm />
        </div>
      </div>
    </section>
  )
}

export default GeneratedContract
