import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql, Link, StaticQuery } from 'gatsby';
import Layout from '../components/Layout';

const TagRoute = (props) => {
  const { pageContext, data } = props;
  const posts = data.allMarkdownRemark.edges;
  const postLinks = posts.map(post => (
    <li key={post.node.fields.slug}>
      <Link to={post.node.fields.slug}>
        <h2 className="is-size-2">{post.node.frontmatter.title}</h2>
      </Link>
    </li>
  ));
  const { tag } = pageContext;
  const { title } = data.site.siteMetadata;
  const { totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with “${tag}”`;

  return (
    <Layout>
      <section className="section">
        <Helmet title={`${tag} | ${title}`} />
        <div className="container content">
          <div className="columns">
            <div
              className="column is-10 is-offset-1"
              style={{ marginBottom: '6rem' }}
            >
              <h3
                className="title is-size-4 is-bold-light"
              >
                {tagHeader}
              </h3>
              <ul className="taglist">{postLinks}</ul>
              <p>
                <Link to="/tags/">Browse all tags</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
        query ($tag: String) {
            site {
                siteMetadata {
                    title
                }
            }
            allMarkdownRemark(
                limit: 1000
                sort: { fields: [frontmatter___date], order: DESC }
                filter: { frontmatter: { tags: { in: [$tag] } } }
            ) {
                totalCount
                edges {
                    node {
                        fields {
                            slug
                        }
                        frontmatter {
                            title
                        }
                    }
                }
            }
        }
    `}
    render={data => <TagRoute data={data} {...props} />}
  />
);

TagRoute.propTypes = {
  pageContext: PropTypes.shape.isRequired,
  data: PropTypes.shape.isRequired,
};
