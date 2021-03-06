import * as React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link, StaticQuery } from 'gatsby';
import {
  Flex, FlexItem, Grid, GridItem,
} from 'mineral-ui';
import styled from '@emotion/styled';
import Highlight from './Highlight';

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

const HighlightGrid = styled(Grid)`
    position: relative;
    margin: 0 auto;
    padding: 1vh 0 1vh;
    text-align: center;
`;

function HighlightRoll(props) {
  const { data } = props;
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <HighlightGrid
      columns={5}
      breakpoints={[1000]}
      gutterWidth={0}
    >
      {posts && posts.slice(0, 1).map(({ node: post }) => (
        <GridPadBox
          key={post.id}
          span={[5, 3]}
        >
          <Highlight
            imageLink={post.fields.slug}
            coverImage={post.frontmatter.coverImage.childImageSharp.fluid}
            description={post.frontmatter.description}
            title={post.frontmatter.title}
            height={540}
          />
        </GridPadBox>
      ))}
      <GridPadBox>
        <GridItem span={[5, 2]}>
          <Flex direction="column">
            {posts && posts.slice(1, 3).map(({ node: post }) => (
              <Highlight
                key={post.id}
                imageLink={post.fields.slug}
                coverImage={post.frontmatter.coverImage.childImageSharp.fluid}
                description={post.frontmatter.description}
                title={post.frontmatter.title}
                height={250}
              />
            ))}
          </Flex>
        </GridItem>
      </GridPadBox>
    </HighlightGrid>
  );
}

HighlightRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }).isRequired,
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
                coverImage {
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
    render={(data, count) => <HighlightRoll data={data} count={count} />}
  />
);
