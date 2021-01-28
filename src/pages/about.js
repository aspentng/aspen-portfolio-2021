import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const AboutPage = ({ data: { site } }) => {
  return (
    <Layout>
      <Helmet>
        <title>About — {site.siteMetadata.title}</title>
        <meta
          name="description"
          content={"About page of " + site.siteMetadata.description}
        />
      </Helmet>
      <div>
        {/* {site.siteMetadata.title} */}
        {/* {site.siteMetadata.about} */}
        Test
      </div>
    </Layout>
  );
};
export default AboutPage;
export const pageQuery = graphql`
  query AboutPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
