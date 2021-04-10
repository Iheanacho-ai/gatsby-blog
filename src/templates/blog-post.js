import * as React from "react"
import { Link, graphql } from "gatsby"

import Header from "../components/header"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next, readingTime } = data

  return (
    <div className= 'body'>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Header/>
      <div className= 'blog-post-container' >
        <div className= 'blog-title-description' >
          <div className= 'blog-title-description-container'>
            <h3>AMARA</h3>
            <div></div>
            <p>Amara @ 2021. Design from the internet</p>
          </div>
        </div>
        <div className= "blog-item" >
          <article
            className="article-item blog-post"
            itemScope
            itemType="http://schema.org/Article"
          >
            <header>
              <h1 className= 'article-h2' itemProp="headline">{post.frontmatter.title}</h1>
              <p className= 'article-date'>{post.frontmatter.date} - {readingTime}</p>
            </header>
            <section
              className= "article-excerpt"
              dangerouslySetInnerHTML={{ __html: post.html }}
              itemProp="articleBody"
            />
            <hr />
            <footer>
            </footer>
          </article>
          <nav className="blog-post-nav">
            <ul
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `space-between`,
                listStyle: `none`,
                padding: 0,
              }}
            >
              <li>
                {previous && (
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
