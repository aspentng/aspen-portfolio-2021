// import React from "react";
// import Helmet from "react-helmet";
// import { graphql } from "gatsby";
// import Layout from "../components/layout";

// const AboutPage = ({ data: { site } }) => {
//   return (
//     <Layout>
//       <Helmet>
//         <title>Contact — {site.siteMetadata.title}</title>
//         <meta
//           name="description"
//           content={"Contact page of " + site.siteMetadata.description}
//         />
//       </Helmet>
//       <div>Test</div>
//     </Layout>
//   );
// };
// export default AboutPage;
// export const pageQuery = graphql`
//   query AboutPageQuery {
//     site {
//       siteMetadata {
//         title
//         description
//       }
//     }
//   }
// `;

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
        picture: file(relativePath: { eq: "blog/image-1.jpg" }) {
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

// import { Link, useStaticQuery, graphql } from "gatsby";
// import Navigation from "../components/navigation";

// export default ({ data }) => {
//   const aboutPage = useStaticQuery(
//     graphql`
//       query {
//         site {
//           siteMetadata {
//             title
//             description
//           }
//         }
//         picture: file(relativePath: { eq: "blog/image-1.jpg" }) {
//           childImageSharp {
//             fixed(width: 125, height: 125) {
//               ...GatsbyImageSharpFixed
//             }
//           }
//         }
//       }
//     `
//   );
//   return (
//     <div className="site-wrapper">
//       <header className="site-header">
//         <div className="site-title">
//           <Link to="/">{data.site.siteMetadata.title}</Link>
//         </div>
//         <Navigation />
//       </header>
//       <div>{aboutPage.site.siteMetadata.description}</div>
//       <div>
//         <Img fixed={aboutPage.picture.childImageSharp.fixed} />
//       </div>
//     </div>
//   );
// };
