import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { site, markdownRemark } = data; // data.markdownRemark holds your post data
  const { siteMetadata } = site;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <Helmet>
        <title>
          {frontmatter.title} | {siteMetadata.title}
        </title>
        <meta name="description" content={frontmatter.metaDescription} />
      </Helmet>
      <div className="blog-post-container">
        <article className="post">
          {!!frontmatter.thumbnail && (
            // <div
            //   className="post-thumbnail"
            //   style={{ backgroundImage: `url(${frontmatter.thumbnail})` }}
            // />
            <div className="post-thumbnail">
              <img
                src={frontmatter.thumbnail}
                alt={frontmatter.title + "- Featured Shot"}
              />
            </div>
          )}
          <div>
            <h1 className="post-title">{frontmatter.title}</h1>
          </div>
          <div className="post-about">
            <table>
              <tbody>
                <tr>
                  <td className="table-left">TIMELINE</td>
                  <td>{frontmatter.duration}</td>
                </tr>
                <tr>
                  <td className="table-left">ROLE</td>
                  <td>{frontmatter.roles}</td>
                </tr>
                <tr>
                  <td className="table-left">ABOUT</td>
                  <td>{frontmatter.projectabout}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        duration
        projectabout
        roles
        thumbnail
        metaDescription
      }
    }
  }
`;
