import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../layouts"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <h1>My WordPress Blog</h1>
      <div css={{ marginBottom: '100px' }}>
        <h1>Pages</h1>
        {data.allWordpressPage.edges.map(({ node }) => (
          <div key={node.slug}>
            <Link to={node.slug} css={{ textDecoration: `none` }}>
              <h3>{node.title}</h3>
            </Link>
            <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            <span>
              {node.date}
            </span>
          </div>
        ))}
      </div>
      <hr />
      <h4>Posts</h4>
      {data.allWordpressPost.edges.map(({ node }) => (
        <div>
          <p>{node.title}</p>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
  allWordpressPage {
      edges {
        node {
          id
          title
          excerpt
          slug
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          excerpt
          slug
        }
      }
    }
  }
`
