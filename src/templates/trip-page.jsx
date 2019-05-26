import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import { Box } from 'mineral-ui';
import styled from '@emotion/styled';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import Hero from '../components/Hero';

const Tags = styled(Box)`
    padding: 32px;
`;

export function TripPostTemplate(props) {
  const {
    content,
    contentComponent,
    description,
    tags,
    title,
    coverImage,
    helmet,
  } = props;
  const PostContent = contentComponent || Content;

  return (
    <div>
      <Box as="header">
        {helmet || ''}
        <Hero
          coverImage={coverImage}
          title={title}
          description={description}
          height={500}
        />
      </Box>

      <PostContent content={content} />

      <Tags as="section">
        {tags && tags.length ? (
          <Box>
            <h4>Tags</h4>
            <ul>
              {tags.map(tag => (
                <li key={`${tag}tag`}>
                  <Link
                    to={`/tags/${kebabCase(tag)}/`}
                  >
                    {tag}
                  </Link>
                </li>
              ))}
            </ul>
          </Box>
        ) : null}
      </Tags>
    </div>
  );
}

TripPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  coverImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  helmet: PropTypes.shape.isRequired,
  tags: PropTypes.arrayOf({
    requiredProperty: PropTypes.string,
  }),
};

TripPostTemplate.defaultProps = {
  tags: [],
};

const TripPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <TripPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={(
          <Helmet titleTemplate="%s | Trip">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
            <meta
              property="og:image"
              content={post.frontmatter.coverImage.childImageSharp.fluid.src}
            />
          </Helmet>
)}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        coverImage={post.frontmatter.coverImage.childImageSharp.fluid}
      />
    </Layout>
  );
};

TripPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }).isRequired,
};

export default TripPost;

export const pageQuery = graphql`
    query TripPostByID($id: String!) {
        markdownRemark(id: { eq: $id }) {
            id
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                description
                tags
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
`;
