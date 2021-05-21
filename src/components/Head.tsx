import React from "react"
import Helmet from "react-helmet"
import { IHeadProps } from "../helpers/helpers"

const Head = (props: IHeadProps) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>PAPERWORK</title>
      <base href="%PUBLIC_URL%/" />
      <meta name="keywords" content="" />
      <meta name="author" content="" />
      <meta name="description" content="" />
      <meta name="robots" content="noindex" />
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
        rel="stylesheet"
      ></link>
    </Helmet>
  )
}
export default Head
