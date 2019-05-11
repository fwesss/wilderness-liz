import React from 'react'
import PropTypes from 'prop-types'
import {Link, graphql, StaticQuery} from 'gatsby'
import {
    Button, Card,
    CardActions,
    CardBlock, CardFooter,
    CardImage,
    CardTitle, Flex, FlexItem
} from "mineral-ui";
import Img from "gatsby-image";
import styled from "@emotion/styled";

const MyCard = styled(Card)`
    min-width: 290px;
`;

const MyFlexItem = styled(FlexItem)`
    flex: 1 0 0;
    margin: 1em;
`;

class BlogRoll extends React.Component {
    render() {
        const {data} = this.props;
        const {edges: posts} = data.allMarkdownRemark;

        return (
            <Flex wrap
                  id="roll-container">
                {posts &&
                posts.map(({node: post}) => (
                    <MyFlexItem key={post.id}>
                        <MyCard as="article">
                            <Link to={post.fields.slug}>
                                <CardImage as={Img}
                                           fluid={post.frontmatter.cover_image.childImageSharp.fluid}/>
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
                                <Button minimal as={Link}
                                        to={post.fields.slug}>
                                    Keep Reading →
                                </Button>
                            </CardActions>
                            <CardFooter title={post.frontmatter.date}/>
                        </MyCard>
                    </MyFlexItem>
                ))}
            </Flex>
        )
    }
}

BlogRoll.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
};

export default () => (
    <StaticQuery
        query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
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
        render={(data, count) => <BlogRoll data={data} count={count}/>}
    />
)
