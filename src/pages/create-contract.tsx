import React, { useState } from "react"
import "../css/styles.css"
import Button from "../components/Button"
import documentBlank from "@iconify-icons/carbon/document-blank"
import { Link } from "gatsby"
import { Icon } from "@iconify/react"
import smileIcon from "@iconify-icons/fa-regular/smile"

const CreateContract = () => {
  const [generated, setGenerated] = useState<boolean>(false)
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
        <div className="width-600">
          <h2>New Contract with Libido AB</h2>
          <span>
            You have included ad SOW.NDA and Consulting agreement to bed
            generated for this Contract
          </span>
          <form className="flex col mt-50px">
            <label className="font-20px weight-600 mb-20px" htmlFor="project">
              1.Project
            </label>
            <label className="font-14px color-gray" htmlFor="project">
              Select project
            </label>
            <select className="form-input" name="project" id="project">
              <option value="Summer Campaing">Summer Campaing</option>
              <option value="Project 2">Project 2</option>
              <option value="Project 3">Project 3</option>
              <option value="Project 4">Project 4</option>
            </select>
            <label className="font-20px weight-600 mb-20px" htmlFor="date">
              2.Timeframe
            </label>
            <div className="flex row">
              <div className="flex col">
                <label className="font-14px color-gray" htmlFor="fromdate">
                  Start date
                </label>
                <input
                  className="form-input "
                  type="date"
                  name="fromdate"
                ></input>
              </div>
              <div className="flex col">
                <label className="font-14px color-gray" htmlFor="todate">
                  End date
                </label>
                <input className="form-input" type="date" name="todate"></input>
              </div>
            </div>
            <label
              className="font-20px weight-600 font-20px weight-600 mb-20px"
              htmlFor="cost"
            >
              3.Cost
            </label>
            <div className="flex row">
              <div className="flex col">
                <label className="font-14px color-gray" htmlFor="rate">
                  Rate
                </label>
                <input
                  style={{ width: "70px" }}
                  className="form-input"
                  type="text"
                  name="rate"
                ></input>
              </div>
              <div className="flex col mt-16px">
                <select className="form-input" name="currency" id="currenct">
                  <option value="USD">USD</option>
                  <option value="PLN">PLN</option>
                  <option value="GBP">GBP</option>
                  <option value="EUR">EUR</option>
                </select>
              </div>
              <div className="flex col mt-16px">
                <select className="form-input " name="per" id="per">
                  <option value="Hour">Hour</option>
                  <option value="Day">Day</option>
                  <option value="Week">Week</option>
                  <option value="Month">Month</option>
                  <option value="Year">Year</option>
                </select>
              </div>
              <div className="flex col">
                <label className="font-14px color-gray" htmlFor="totalunits">
                  Total units
                </label>
                <input
                  style={{ width: "70px" }}
                  className="form-input"
                  type="text"
                  name="totalunits"
                ></input>
              </div>
              <div className="flex col">
                <label className="font-14px color-gray" htmlFor="totalunits">
                  Total units
                </label>
                <input
                  style={{ width: "70px" }}
                  className="form-input"
                  type="text"
                  name="totalunits"
                ></input>
              </div>
              <div className="flex col">
                <label className="font-14px color-gray" htmlFor="totalcost">
                  Total cost
                </label>
                <input
                  style={{ width: "70px" }}
                  className="form-input"
                  type="text"
                  name="totalcost"
                ></input>
              </div>
            </div>
            <div className="flex col">
              <label className="font-20px weight-600" htmlFor="description">
                4.Description of services
              </label>
              <textarea
                className="form-input h-200px"
                name="description"
              ></textarea>
            </div>
            <div className="flex row align-center">
              <div className="wmin200px">
                <Button
                  slug="/generated-contract"
                  textColor="black"
                  iconColor="black"
                  img={documentBlank}
                  backgroundColor="#9df7c0"
                >
                  Generate Contract
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
          </form>
        </div>
        <div className="width-600 flex row justify-right h-150px mt-50px">
          <div className="flex row justify-between br-radius-5px bg-color-dark-gray p-20px ">
            <div className="flex col mr-30px">
              <span>Libido AB</span>
              <span className="py-5px ">Hakan Libido</span>
              <span className="py-5px ">Kungestensgatan</span>
              <span className="py-5px ">114 23 Stockholm</span>
            </div>
            <div>
              <span className="color-violet pointer">Edit</span>
            </div>
          </div>
        </div>
        <div
          style={generated ? { display: "flex" } : { display: "none" }}
        ></div>
      </div>
    </section>
  )
}

export default CreateContract
