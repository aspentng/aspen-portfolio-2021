import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import { Link, StaticQuery, graphql } from "gatsby";
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
            {/* <div
              className="primary-content"
              dangerouslySetInnerHTML={{
                __html: data.site.siteMetadata.about,
              }}
            /> */}
            <div>
              <p>
                I'm currently a product designer at the{" "}
                <Link to="https://www.hive.tech.gov.sg/">
                  Government Technology Agency, Singapore
                </Link>{" "}
                working on the{" "}
                <Link to="https://app.singpass.gov.sg/">Singpass app</Link>, the
                nation's digital identity platform for its citizens.
              </p>
              <p>
                Born and raised in Singapore, I went through a primarily
                science-based education, but decided to pursue a fine arts
                degree in industrial design at the{" "}
                <Link to="https://illinois.edu/">
                  University of Illinois at Urbana-Champaign
                </Link>{" "}
                in the United States.
              </p>
              <p>
                My education background in both the arts and sciences, and an
                early exposure to tech, were pivotal in helping me become a
                product designer in tech. These experiences help me to better
                find balance between functionality/scalability and aesthetics
                when thinking about or designing products.
              </p>
              {/* <p>
                Outside of work, I listen to tech and design podcasts, watch
                conference livestreams, learn to code, design and 3d print
                stuff. Outside of design, I enjoy bouldering and playing soccer.
              </p> */}
              <p>Feel free to reach out for a chat or coffee!</p>
              <p>-</p>
              <p>
                <a href="mailto: aspentng@gmail.com">Email</a> <br />
                <Link to="https://twitter.com/aspentng">Twitter</Link> <br />
                <Link to="https://www.linkedin.com/in/aspentng/">LinkedIn</Link>
              </p>
            </div>
          </div>
        </div>
      </Layout>
    )}
  />
);
