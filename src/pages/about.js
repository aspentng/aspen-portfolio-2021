import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/layout";

import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            description
            about
          }
        }
        picture: file(relativePath: { eq: "blog/test-image.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => (
      <Layout>
        <Helmet>
          <title>{data.site.siteMetadata.title}</title>
          <meta
            name="description"
            content={data.site.siteMetadata.description}
          />
        </Helmet>
        <div className="two-grids">
          <div>
            <Img fluid={data.picture.childImageSharp.fluid} alt="testing" />
          </div>

          <div>
            testrender about:
            {data.site.siteMetadata.about}
          </div>
        </div>
      </Layout>
    )}
  />
);