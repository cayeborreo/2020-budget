import gql from "graphql-tag"

export const shopImagesQuery = gql`
  query {
    polioVax: file(relativePath: { eq: "shop/polioVax.webp" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    palay: file(relativePath: { eq: "shop/palay.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    losartan: file(relativePath: { eq: "shop/losartan.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    starbucksFrappe: file(relativePath: { eq: "shop/starbucksFrappe.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    beerBucket: file(relativePath: { eq: "shop/beerBucket.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    vanGoghAlive: file(relativePath: { eq: "shop/vanGoghAlive.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    nintendoSwitch: file(relativePath: { eq: "shop/nintendoSwitch.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    nintendoSwitchGames: file(
      relativePath: { eq: "shop/nintendoSwitchGames.jpeg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    iphoneX: file(relativePath: { eq: "shop/iphoneX.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    standardFuneralPackage: file(
      relativePath: { eq: "shop/standardFuneralPackage.jpeg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    macbookPro: file(relativePath: { eq: "shop/macbookPro.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    researchGrant: file(relativePath: { eq: "shop/researchGrant.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cartierDiamondRing: file(
      relativePath: { eq: "shop/cartierDiamondRing.jpeg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    modernJeepney: file(relativePath: { eq: "shop/modernJeepney.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    toyotaFortuner: file(relativePath: { eq: "shop/toyotaFortuner.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    condoUnit: file(relativePath: { eq: "shop/condoUnit.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    houseAndLot: file(relativePath: { eq: "shop/houseAndLot.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ninjaCopBribe: file(relativePath: { eq: "shop/ninjaCopBribe.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    presidentialJet: file(relativePath: { eq: "shop/presidentialJet.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
