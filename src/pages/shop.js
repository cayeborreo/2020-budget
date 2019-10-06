import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Card from "../components/shop/card"

const Shop = () => {
  const alternateItems = [
    {
      description:
        "0% sugar kasi mahirap na, mahal magpagamot ng dyabetis sa bansang 'to.",
      imgurl:
        "https://images.unsplash.com/photo-1522036150865-e4ee8b0c2695?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      label: "Starbucks Tall Java Chip Frappuccino",
      price: 165,
    },
    {
      description:
        "The Ultimate Matapobre Phone. Pwedeng-pwede kang mag-selfie with pride.",
      imgurl:
        "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      label: "iPhone 7, Space Gray",
      price: 33000,
    },
    {
      description:
        "Bilang mahirap mag-commute, bili ka na lang ng sarili mong private vehicle.",
      imgurl:
        "https://images.unsplash.com/photo-1566367576585-051277d52997?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      label: "Toyota Fortuner, Black",
      price: 2275000,
    },
    {
      description:
        "The Ultimate Matapobre Phone. Pwedeng-pwede kang mag-selfie with pride.",
      imgurl:
        "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      label: "iPhone 7, Space Gray",
      price: 33000,
    },
    {
      description:
        "0% sugar kasi mahirap na, mahal magpagamot ng dyabetis sa bansang 'to.",
      imgurl:
        "https://images.unsplash.com/photo-1522036150865-e4ee8b0c2695?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      label: "Starbucks Tall Java Chip Frappuccino",
      price: 165,
    },
    {
      description:
        "Bilang mahirap mag-commute, bili ka na lang ng sarili mong private vehicle.",
      imgurl:
        "https://images.unsplash.com/photo-1566367576585-051277d52997?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      label: "Toyota Fortuner, Black",
      price: 2275000,
    },
  ]
  return (
    <Layout showMoneyCounter>
      <center>
        <p className="title my-3 has-text-dark">
          Start your Presidential Shopping Spree!
        </p>
      </center>
      <div className="columns is-multiline">
        {alternateItems.map((item, index) => (
          <div className="column is-4-fullhd is-6-tablet" key={index}>
            <Card
              id={index}
              name={item.label}
              price={item.price}
              description={item.description}
            />
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Shop
