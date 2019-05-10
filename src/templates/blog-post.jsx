import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {kebabCase} from 'lodash'
import Helmet from 'react-helmet'
import {graphql, Link} from 'gatsby'
import Layout from '../components/Layout'
import Content, {HTMLContent} from '../components/Content'
import {Box} from "mineral-ui";
import Hero from "../components/Hero";
import styled from "@emotion/styled";

const Tags = styled(Box)({
    padding: "32px",
});

export class BlogPostTemplate extends Component {
    render() {
        let {
            content,
            contentComponent,
            description,
            tags,
            title,
            cover_image,
            helmet,
        } = this.props;
        const PostContent = contentComponent || Content;

        return (
            <div>
                <Box as="header">
                    {helmet || ''}
                    <Hero cover_image={cover_image}
                          title={title}
                          description={description}
                          height={500}/>
                </Box>

                <PostContent content={content}/>

                <Tags as="section">
                    {tags && tags.length ? (
                        <Box>
                            <h4>Tags</h4>
                            <ul>
                                {tags.map(tag => (
                                    <li key={tag + `tag`}>
                                        <Link
                                            to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                                    </li>
                                ))}
                            </ul>
                        </Box>
                    ) : null}
                </Tags>
            </div>
        )
    }
}

BlogPostTemplate.propTypes = {
    content: PropTypes.node.isRequired,
    contentComponent: PropTypes.func,
    description: PropTypes.string,
    title: PropTypes.string,
    cover_image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    helmet: PropTypes.object,
};

const BlogPost = ({data}) => {
    const {markdownRemark: post} = data;

    return (
        <Layout>
            <BlogPostTemplate
                content={post.html}
                contentComponent={HTMLContent}
                description={post.frontmatter.description}
                helmet={
                    <Helmet titleTemplate="%s | Blog">
                        <title>{`${post.frontmatter.title}`}</title>
                        <meta
                            name="description"
                            content={`${post.frontmatter.description}`}
                        />
                        <meta
                            property="og:image"
                            content={post.frontmatter.cover_image.childImageSharp.fluid.src}
                        />
                    </Helmet>
                }
                tags={post.frontmatter.tags}
                title={post.frontmatter.title}
                cover_image={post.frontmatter.cover_image.childImageSharp.fluid}
            />
        </Layout>
    )
};

BlogPost.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.object,
    }),
};

export default BlogPost

export const pageQuery = graphql`
    query BlogPostByID($id: String!) {
        markdownRemark(id: { eq: $id }) {
            id
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                description
                tags
                cover_image {
                    childImageSharp {
                        fluid(maxWidth: 2080) {
                            ...GatsbyImageSharpFluid_withWebp_tracedSVG
                        }
                    }
                }
            }
        }
    }
`;
