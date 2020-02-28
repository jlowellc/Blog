import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout pageTitle="About me...">
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
      laboriosam tenetur alias recusandae quo aspernatur saepe et, laudantium
      sunt facere sapiente, ea, optio libero reprehenderit? Dolore voluptatibus
      ab dicta aspernatur.
    </p>
  </Layout>
)

export default AboutPage
