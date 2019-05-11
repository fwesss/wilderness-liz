import React from 'react';

import Slider from 'react-slick';
import Img from "gatsby-image";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import {useStaticQuery, graphql} from 'gatsby'
import colors from "../utils/colors";

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
                 backgroundColor={colors.brand}
            />
        </div>);
    });

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 8,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnFocus: true,
        pauseOnHover: true,
        lazyLoad: 'progressive',
        responsive: [
            {
                breakpoint: 1920,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
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