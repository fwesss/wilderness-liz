import * as React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import { Flex, FlexItem } from 'mineral-ui';
import styled from '@emotion/styled';
import ContentThumb from './ContentThumb';


const ContentLink = styled(FlexItem)`
    flex: 1 0 0;
    @media screen and (min-width: 1600px) {
        min-width: 420px;
    }
`;

function ContentRoll(props) {
  const { data } = props;
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <Flex wrap>
      {posts
          && posts.slice(3).map(({ node: post }) => (
            <ContentLink
              key={post.id}
              minWidth="290px"
            >
              <ContentThumb
                coverImage={post.frontmatter.coverImage.childImageSharp.fluid}
                description={post.frontmatter.description}
                title={post.frontmatter.title}
                link={post.fields.slug}
                contentType={post.frontmatter.templateKey}
                date={post.frontmatter.date}
                height={300}
              />
            </ContentLink>
          ))}
    </Flex>
  );
}

ContentRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }).isRequired,
};

export default () => (
  <StaticQuery
    query={graphql`
      query ContentRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: {frontmatter: {templateKey: {in: ["trip-page", "blog-post"]}}}
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
    render={(data, count) => <ContentRoll data={data} count={count} />}
  />
);
