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
            about
            home {
              title
            }
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
          <div className="post-thumbnail">
            <Img fluid={data.picture.childImageSharp.fluid} alt="testing" />
          </div>

          <div>
            <div className="headline">{data.site.siteMetadata.home.title}</div>
            <div
              className="primary-content"
              dangerouslySetInnerHTML={{
                __html: data.site.siteMetadata.about,
              }}
            />
            {/* {data.site.siteMetadata.about} */}
            {/* </div> */}
          </div>
        </div>
      </Layout>
    )}
  />
);
