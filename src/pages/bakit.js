import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      presidentialPhoto: file(relativePath: { eq: "presidential-photo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pgh: file(relativePath: { eq: "pgh.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sideEye: file(relativePath: { eq: "sideEye.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const presidentialPhoto = data.presidentialPhoto.childImageSharp.fluid
  const pgh = data.pgh.childImageSharp.fluid
  const sideEye = data.sideEye.childImageSharp.fluid

  return (
    <Layout>
      <SEO title="Home" />
      <h1 className="title is-size-2 is-size-3-mobile">
        Hanggang saan aabot ang{" "}
        <span className="has-text-danger">8.2 billion pesos</span> mo?
      </h1>
      <Img fluid={presidentialPhoto} alt="presidential photo" />
      <div className="content is-medium my-2">
        <p>
          Kaka-approve lang noong Sep 6 ang budget na <b>8.2 billion pesos</b>{" "}
          para sa <b>Office of the President (OP)</b> this 2020.
        </p>
        <p>
          Hashtag <span className="has-text-info">#blessed</span> talaga ang OP,
          ’di tulad ng... halimbawa, ang Philippine General Hospital, na
          nagkaroon pa ng{" "}
          <a
            href="https://newsinfo.inquirer.net/1171702/pgh-budget-for-2020-cut-by-p456m"
            target="__blank"
            rel="noopener noreferrer"
          >
            budget cut na 456 million
          </a>
          .
        </p>
        <article className="message is-primary">
          <div className="message-body">
            <p>
              Malacañang is asking for a budget of P8.2 billion for 2020. This
              is 21% higher than the P6.77 billion it received under the 2019
              General Appropriations Act.{" "}
              <span className="is-italic">
                (Pia Ranada,{" "}
                <a
                  href="https://www.rappler.com/nation/239473-office-president-2020-budget-breezes-through-house-panel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rappler
                </a>
                )
              </span>
            </p>
          </div>
        </article>
        <Img
          fluid={pgh}
          alt="Kuha ni Richard Reyes para sa Philippine Daily Inquirer (https://newsinfo.inquirer.net/1171702/pgh-budget-for-2020-cut-by-p456m)"
          title="Kuha ni Richard Reyes para sa Philippine Daily Inquirer (https://newsinfo.inquirer.net/1171702/pgh-budget-for-2020-cut-by-p456m)"
        />

        <p className="is-size-7 mt-1 mb-2">
          Kuha ni Richard Reyes para sa{" "}
          <a
            href="https://newsinfo.inquirer.net/1171702/pgh-budget-for-2020-cut-by-p456m"
            target="__blank"
            rel="noopener noreferrer"
          >
            Philippine Daily Inquirer
          </a>
        </p>

        <p>
          <b>ANYWAY, ayun.</b>{" "}
          <a
            href="https://newsinfo.inquirer.net/1161623/office-of-the-presidents-p8-2-b-2020-budget-gets-swift-house-ok"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wala pang anim na minutong pagtalakay
          </a>
          , aprubado na ’yung 8.2 billion OP budget ng House Panel.{" "}
          <b>Ang bilis!</b> (Manila traffic could never.)
        </p>

        <article className="message is-primary">
          <div className="message-body">
            <p>
              Executive Secretary Salvador Medialdea, the OP’s representative to
              the hearing, did not even present the budget through a Powerpoint
              presentation. Copies of the budget were merely handed out to
              lawmakers.
            </p>
            <p>
              This is unlike the Office of the Vice President (OVP) 2020 budget
              briefing in which Vice President Leni Robredo’s chief of staff,
              Undersecretary Philip Dy, presented their budget and gave updates
              on the office’s anti-poverty initiatives.
            </p>
            <p>
              The OVP budget briefing lasted 24 minutes.{" "}
              <span className="is-italic">
                (Pia Ranada,{" "}
                <a
                  href="https://www.rappler.com/nation/239473-office-president-2020-budget-breezes-through-house-panel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rappler
                </a>
                )
              </span>
            </p>
          </div>
        </article>
        <p>
          I mean, okay naman siguro ’yun ’no... basta ba magagamit sa,
          halimbawa, mga proyektong pang-edukasyon. O pang-kalusugan. O para sa
          ating mga magsasaka...
        </p>

        <article className="message is-primary">
          <div className="message-body">
            <p>
              More than half of the 2020 OP budget consists of{" "}
              <b>
                confidential and intelligence funds amounting to P4.5 billion.
              </b>{" "}
              This is almost double the budget it asked for in the previous 3
              years.{" "}
              <span className="is-italic">
                (Pia Ranada,{" "}
                <a
                  href="https://www.rappler.com/nation/239473-office-president-2020-budget-breezes-through-house-panel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rappler
                </a>
                )
              </span>
            </p>
          </div>
        </article>
        <p>
          ...o kaya sa mass transport. Pwede ring housing initiatives? (Beke
          nemen?)
        </p>

        <article className="message is-primary">
          <div className="message-body">
            <p>
              For 2020, if the proposed OP budget gets the green light,
              Duterte’s office will receive the biggest share of confidential
              and intelligence funds out of all the agencies in government,
              including the police and military.{" "}
              <span className="is-italic">
                (Pia Ranada,{" "}
                <a
                  href="https://www.rappler.com/nation/239473-office-president-2020-budget-breezes-through-house-panel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rappler
                </a>
                )
              </span>
            </p>
          </div>
        </article>
        <Img fluid={sideEye} alt="Wala eh." className="mb-2" />
        <hr />
        <p>
          Pero realtalk, ang hirap isipin ng tunay na halaga ng 8.2 billion
          pesos. Ilang Stan Smiths ang kayang bilhin noon? Dito natin tingnan.
        </p>

        <b className="is-size-4">Saan nga ba aabot ang 8.2 billion pesos mo?</b>
      </div>

      <center>
        <Link to="/shop">
          <button className="button is-primary is-large my-3 is-fullwidth">
            Let’s go shopping!
          </button>
        </Link>
      </center>
    </Layout>
  )
}

export default About
