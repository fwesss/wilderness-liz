"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const gatsby_1 = require("gatsby");
class BlogRoll extends react_1.default.Component {
    render() {
        const { data } = this.props;
        const { edges: posts } = data.allMarkdownRemark;
        return (<div className="columns is-multiline">
                {posts &&
            posts.map(({ node: post }) => (<div className="is-parent column is-6" key={post.id}>
                        <article className="tile is-child box notification">
                            <p>
                                <gatsby_1.Link className="title has-text-primary is-size-4" to={post.fields.slug}>
                                    {post.frontmatter.title}
                                </gatsby_1.Link>
                                <span> &bull; </span>
                                <span className="subtitle is-size-5 is-block">
                    {post.frontmatter.date}
                  </span>
                            </p>
                            <p>
                                {post.excerpt}
                                <br />
                                <br />
                                <gatsby_1.Link className="button" to={post.fields.slug}>
                                    Keep Reading →
                                </gatsby_1.Link>
                            </p>
                        </article>
                    </div>))}
            </div>);
    }
}
BlogRoll.propTypes = {
    data: prop_types_1.default.shape({
        allMarkdownRemark: prop_types_1.default.shape({
            edges: prop_types_1.default.array,
        }),
    }),
};
exports.default = () => (<gatsby_1.StaticQuery query={gatsby_1.graphql `
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
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
              }
            }
          }
        }
      }
    `} render={(data, count) => <BlogRoll data={data} count={count}/>}/>);
//# sourceMappingURL=BlogRoll.jsx.map