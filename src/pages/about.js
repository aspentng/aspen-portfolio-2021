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
export default () => (
  <StaticQuery
    query={graphql`
      query AboutPageQuery {
        site {
          siteMetadata {
            description
            about
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
        <div>test</div>
        <div>
          this supposed to render description:
          {data.site.siteMetadata.description}
        </div>
        <div>
          render about:
          {data.site.siteMetadata.about}
        </div>
      </Layout>
    )}
  />
);
