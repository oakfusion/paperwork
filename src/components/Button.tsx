import React, { PropsWithChildren } from "react"
import { Link } from "gatsby"
import { IButtonProps } from "../helpers/helpers"
import { Icon } from "@iconify/react"

const Button = (props: PropsWithChildren<IButtonProps>) => {
  const { children, slug, backgroundColor, img, iconColor, textColor } = props
  return (
    <>
      <>
        <Link to={slug} className="decoration-none">
          <div className="button" style={{ backgroundColor: backgroundColor }}>
            <Icon
              style={{ marginLeft: "15px" }}
              color={iconColor}
              icon={img}
            ></Icon>
            <div style={{ color: textColor }} className="button-text">
              {children}
            </div>
          </div>
        </Link>
      </>
    </>
  )
}

export default Button
