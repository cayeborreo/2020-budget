import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout/layout"

const Shop = () => {
  const data = useStaticQuery(graphql`
    {
      allGoogleSheetShoppingItemsRow {
        nodes {
          imgurl
          label
          price
          description
        }
      }
    }
  `)

  const items = data.allGoogleSheetShoppingItemsRow.nodes
  return (
    <Layout showMoneyCounter>
      <p>Hello</p>
      {!!items && items.map((item, index) => <p key={index}>{item.imgurl}</p>)}
    </Layout>
  )
}

export default Shop
