import React from "react";
import { Link, graphql, StaticQuery } from "gatsby";
export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `}
    render={(data) => (
      <div className="hero-header grids">
        <div className="headline">{data.site.siteMetadata.home.title}</div>
        <div>
          <p>
            Product designer at{" "}
            <Link to="https://www.hive.tech.gov.sg/">
              Government Technology Agency, Singapore
            </Link>{" "}
            . Currently using design as a tool to empower those next in line to
            do their best work, and to build trust between users and emerging
            technologies.
          </p>
          <p>
            Previously, UX designer at{" "}
            <Link to="https://2020.hackillinois.org/">HackIllinois</Link> // UX
            design intern at{" "}
            <Link to="https://innovation.cargill.com/">Cargill, Inc.</Link>
          </p>
        </div>
      </div>
    )}
  />
);
