import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const AboutPage = ({ data: { site } }) => {
  return (
    <Layout>
      <Helmet>
        <title>Contact — {site.siteMetadata.title}</title>
        <meta
          name="description"
          content={"Contact page of " + site.siteMetadata.description}
        />
      </Helmet>
      <div>Test</div>
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
