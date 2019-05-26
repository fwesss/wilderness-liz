import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import {
  Button,
  Card,
  CardActions,
  CardBlock,
  CardFooter,
  CardImage,
  CardTitle,
  Flex,
  FlexItem,
} from 'mineral-ui';
import styled from '@emotion/styled';

const MyCard = styled(Card)`
    min-width: 290px;
`;

const MyFlexItem = styled(FlexItem)`
    flex: 1 0 0;
    margin: 1em;
`;

function TripRoll(props) {
  const { data } = props;
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <Flex wrap id="roll-container">
      {posts && posts.map(({ node: post }) => (
        <MyFlexItem key={post.id}>
          <MyCard as="article">
            <Link to={post.fields.slug}>
              <CardImage
                as={Img}
                fluid={post.frontmatter.coverImage.childImageSharp.fluid}
              />
            </Link>
            <CardTitle>
              <Link to={post.fields.slug}>
                {post.frontmatter.title}
              </Link>
            </CardTitle>
            <CardBlock>
              {post.frontmatter.description}
            </CardBlock>
            <CardActions>
              <Button
                minimal
                as={Link}
                to={post.fields.slug}
              >
                            Keep Reading →
              </Button>
            </CardActions>
            <CardFooter title={post.frontmatter.date} />
          </MyCard>
        </MyFlexItem>
      ))}
    </Flex>
  );
}

TripRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }).isRequired,
};

export default () => (
  <StaticQuery
    query={graphql`
      query TripRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "trip-page" } } }
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
    render={(data, count) => <TripRoll data={data} count={count} />}
  />
);
