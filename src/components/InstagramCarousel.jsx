import React from 'react';

import Slider from 'react-slick';
import Img from "gatsby-image";

import {useStaticQuery, graphql} from 'gatsby'

function InstagramCarousel() {
    const {allFile} = useStaticQuery(
        graphql`
            query {
                allFile(
                    sort: { fields: name, order: DESC }
                    filter: { sourceInstanceName: { eq: "insta" } }
                ) {
                    edges {
                        node {
                            id
                            name
                            childImageSharp {
                                fluid(maxWidth: 2080, maxHeight: 2080) {
                                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                                }
                            }
                        }
                    }
                }
            }
        `
    );

    let images = [];

    allFile.edges.forEach(({node}) => {
        images.push(<div key={node.id}>
            <Img fluid={node.childImageSharp.fluid}
                 alt={node.name.replace(/-/g, ' ')}
                 backgroundColor={`#A1B5B2`}
            />
        </div>);
    });

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1920,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Slider {...settings}>
            {images}
        </Slider>
    )
}

export default InstagramCarousel