import * as React from "react";
import PropTypes from 'prop-types';
import {graphql, Link, StaticQuery} from 'gatsby';
import {Grid, GridItem, Flex, FlexItem} from "mineral-ui";
import Highlight from "./Highlight";
import styled from "@emotion/styled";

const GridPadBox = styled(GridItem)`
    &:first-of-type {
        padding: 0 10px 0 5vw;
        
        @media screen and (max-width: 1000px) {
            padding: 0 5vw;
        }
    }
    
    &:last-of-type {
        padding: 0 5vw 0 10px;
        
        @media screen and (max-width: 1000px) {
            padding: 0 5vw;
        }
    }
    
    @media screen and (max-width: 1000px) {
        padding: 0;
    }
`;

const HighlightLink = styled(FlexItem)`
    &:last-child {
        margin-top: 20px;
    }
    
    @media screen and (max-width: 1000px) {
        &:first-of-type {
            margin-top: 20px;
        }
    }
    
    @media (hover: hover) {
        &:hover p {
            opacity: 1;
            transform: translate3d(0, 0, 0);
            transition-delay: 0.15s;
        }
        &:hover div {
            opacity: 0.4;
            transform: scale3d(1.1, 1.1, 1);
        }
    }
`;

const HighlightGrid = styled(Grid)`
    position: relative;
    margin: 0 auto;
    padding: 1em 0 4em;
    text-align: center;
`;

class HighlightRoll extends React.Component {
    render() {
        const {data} = this.props;
        const {edges: posts} = data.allMarkdownRemark;

        return (
            <HighlightGrid columns={5}
                           breakpoints={[1000]}
                           marginBottom="2vw"
                           gutterWidth={0}>
                {posts &&
                posts.slice(0, 1).map(({node: post}) => (
                    <GridPadBox key={post.id}
                                span={[5, 3]}>
                        <HighlightLink as={Link}
                                       to={post.fields.slug}>
                            <Highlight
                                cover_image={post.frontmatter.cover_image.childImageSharp.fluid}
                                description={post.frontmatter.description}
                                title={post.frontmatter.title}
                                height={520}/>
                        </HighlightLink>
                    </GridPadBox>
                ))}
                <GridPadBox>
                    <GridItem span={[5, 2]}>
                        <Flex direction="column">
                            {posts &&
                            posts.slice(1, 3).map(({node: post}) => (
                                <HighlightLink key={post.id}
                                               as={Link}
                                               to={post.fields.slug}>
                                    <Highlight
                                        cover_image={post.frontmatter.cover_image.childImageSharp.fluid}
                                        description={post.frontmatter.description}
                                        title={post.frontmatter.title}
                                        height={240}/>
                                </HighlightLink>
                            ))}
                        </Flex>
                    </GridItem>
                </GridPadBox>
            </HighlightGrid>
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
              id
              fields {
                slug
              }
              frontmatter {
                title
                description
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
