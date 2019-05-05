import React from 'react'
import PropTypes from 'prop-types'
import {Link, graphql} from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import InstagramCarousel from '../components/InstagramCarousel'
import Hero from "../components/Hero";
import HighlightRoll from "../components/HighlightRoll";
import {Box} from "mineral-ui";

export const IndexPageTemplate = ({
                                      image,
                                      title,
                                      heading,
                                      subheading,
                                      mainpitch,
                                      description,
                                      intro,
                                  }) => (
    <Box>
        <header>
            <Hero cover_image={image}
                  title={title}
                  description={subheading}
                  height={500}/>
        </header>

        <main id="page-wrap">
            <div>
                <InstagramCarousel/>
            </div>
            <HighlightRoll/>

            <div className="">
                <div className="">
                    <div className="">
                        <div className="">
                            <div className="">
                                <div className="">
                                    <div className="">
                                        <div className="">
                                            <h1 className="">{mainpitch.title}</h1>
                                        </div>
                                        <div className="">
                                            <h3 className="">{mainpitch.description}</h3>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="">
                                            <h3 className="">
                                                {heading}
                                            </h3>
                                            <p>{description}</p>
                                        </div>
                                    </div>
                                    <Features gridItems={intro.blurbs}/>
                                    <div className="">
                                        <h3 className="">
                                            Latest stories
                                        </h3>
                                        <BlogRoll/>
                                        <div
                                            className="">
                                            <Link className="" to="/blog">
                                                Read more
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </Box>
);

IndexPageTemplate.propTypes = {
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    heading: PropTypes.string,
    subheading: PropTypes.string,
    mainpitch: PropTypes.object,
    description: PropTypes.string,
    intro: PropTypes.shape({
        blurbs: PropTypes.array,
    }),
};

const IndexPage = ({data}) => {
    const {frontmatter} = data.markdownRemark;

    return (
        <Layout>
            <IndexPageTemplate
                image={frontmatter.image.childImageSharp.fluid}
                title={frontmatter.title}
                heading={frontmatter.heading}
                subheading={frontmatter.subheading}
                mainpitch={frontmatter.mainpitch}
                description={frontmatter.description}
                intro={frontmatter.intro}
            />
        </Layout>
    )
};

IndexPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
};

export default IndexPage

export const pageQuery = graphql`
    query IndexPageTemplate {
        markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
            frontmatter {
                title
                image {
                    childImageSharp {
                        fluid(maxWidth: 2048, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp_tracedSVG
                        }
                    }
                }
                heading
                subheading
                mainpitch {
                    title
                    description
                }
                description
                intro {
                    blurbs {
                        image {
                            childImageSharp {
                                fluid(maxWidth: 240, quality: 64) {
                                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                                }
                            }
                        }
                        text
                    }
                    heading
                    description
                }
            }
        }
    }
`;