import * as React from "react"
import { Link, graphql } from "gatsby"
import "@fontsource/lato" 
import "@fontsource/roboto" 
import Header from "../components/header"
import MobileFooter from "../components/mobile-footer"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes


  if (posts.length === 0) {
    return (
      <Layout location={location} >
        <SEO title="All posts" />
       
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <div className = 'body'>
      <Header/>
      <div className= 'body-container'>
        <SEO title="All posts" />
        <div className= 'blog-title-description'>
          <div className= 'blog-title-description-container' >
            <h3>AMARA</h3>
            <div></div>
            <p>Amara @ 2021. Design from the internet</p>
          </div>
        </div>
        <ol className = 'blog-list' style={{ listStyle: `none` }}>
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug
            console.log(post.frontmatter.featuredImage, 'image')

            return (
              
              <li key={post.fields.slug} className = 'blog-list-item'>
                <div className = 'blog-image'>
                  <img src= {post.frontmatter.featuredImage.childImageSharp.fluid.originalImg}/>
                </div>
                <article
                  className="article-item post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    <h2>
                      <Link to={post.fields.slug} itemProp="url">
                        <span className= "article-h2" itemProp="headline">{title}</span>
                      </Link>
                    </h2>
                    <small className= "article-date">{post.frontmatter.date}</small>
                  </header>
                  <section>
                    <p
                      className= "article-excerpt"
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                    />
                  </section>
                </article>
              </li>
            )
          })}
        </ol>
      </div>
      <hr/>
      <MobileFooter/>
    </div>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          featuredImage {
            childImageSharp {
              fluid {
                base64
                tracedSVG
                srcWebp
                srcSetWebp
                originalImg
                originalName
              }
            }
          }
        }
      }
    }
  }
`
