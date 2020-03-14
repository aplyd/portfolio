import React from "react"

import Layout from "../components/layout"
import CircleSVG from '../components/circle-svg'
import SEO from "../components/seo"
  
const IndexPage = () => (
  <Layout>

    <SEO title="Home" />
      <div className="cover">
        <h1 id="ftacnik-title" className="floating">FTACNIK</h1>
        <h2 id="ftacnik-subtitle" className="floating">creative front-end developer</h2>
        <CircleSVG />
      </div>
      
      <div className="clear-cover"></div>

      <div className="background">
        <p>Fugiat reprehenderit in ullamco Lorem sunt dolor incididunt. Dolore qui proident adipisicing Lorem aliquip elit amet mollit. Id proident eiusmod et sunt tempor aliquip Lorem eu ex consequat ullamco aute labore ullamco. Labore officia dolor officia fugiat voluptate enim sint et nisi commodo eiusmod. Tempor enim ipsum laborum deserunt duis culpa reprehenderit aute cupidatat fugiat aliqua aliqua elit cupidatat. Velit nostrud ex ipsum mollit occaecat do elit aliqua ex elit est eiusmod. Consequat et dolor sit eu aliquip voluptate anim sint non culpa elit.
        </p>

        <br />
        <br />
        <br />
        <br />
        <p>Fugiat reprehenderit in ullamco Lorem sunt dolor incididunt. Dolore qui proident adipisicing Lorem aliquip elit amet mollit. Id proident eiusmod et sunt tempor aliquip Lorem eu ex consequat ullamco aute labore ullamco. Labore officia dolor officia fugiat voluptate enim sint et nisi commodo eiusmod. Tempor enim ipsum laborum deserunt duis culpa reprehenderit aute cupidatat fugiat aliqua aliqua elit cupidatat. Velit nostrud ex ipsum mollit occaecat do elit aliqua ex elit est eiusmod. Consequat et dolor sit eu aliquip voluptate anim sint non culpa elit.
        </p>

      </div>
  </Layout>
)

export default IndexPage
