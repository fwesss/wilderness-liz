import React from 'react'
import PropTypes from 'prop-types'
import {graphql, Link, StaticQuery} from 'gatsby'
import {Grid, GridItem, Flex, FlexItem} from "mineral-ui";
import Hero from "./Hero";
import styled from "@emotion/styled";

const HighlightFlexItem = styled(FlexItem)`
    &:last-child {
        margin-top: 20px;
    }
    
    @media screen and (max-width: 1000px) {
        &:first-of-type {
            margin-top: 20px;
        }
    }
`;

class HighlightRoll extends React.Component {
    render() {
        const {data} = this.props;
        const {edges: posts} = data.allMarkdownRemark;

        return (
            <Grid columns={3}
                  breakpoints={[1000]}
                  gutterWidth={20}
                  margin="5vw">
                {posts &&
                posts.slice(0, 1).map(({node: post}) => (
                    <GridItem key={post.id}
                              as={Link}
                              to={post.fields.slug}
                              span={[3, 2]}>
                        <Hero
                            cover_image={post.frontmatter.cover_image.childImageSharp.fluid}
                            description={post.excerpt}
                            title={post.frontmatter.title}
                            height={500}/>
                    </GridItem>
                ))}
                <GridItem span={[3, 1]}>
                    <Flex direction="column">
                        {posts &&
                        posts.slice(1, 3).map(({node: post}) => (
                            <HighlightFlexItem key={post.id}
                                               as={Link}
                                               to={post.fields.slug}>
                                <Hero
                                    cover_image={post.frontmatter.cover_image.childImageSharp.fluid}
                                    description={post.excerpt}
                                    title={post.frontmatter.title}
                                    height={240}/>
                            </HighlightFlexItem>
                        ))}
                    </Flex>
                </GridItem>
            </Grid>
        )
    }
}

HighlightRoll.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
};

export default () => (
    <StaticQuery
        query={graphql`
      query HighlightRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: {frontmatter: {templateKey: {in: ["trip-page", "blog-post"]}}}
          limit: 3
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
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
        }
      }
    `}
        render={(data, count) => <HighlightRoll data={data} count={count}/>}
    />
)
