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
                                fixed(width: 480, height: 360) {
                                    ...GatsbyImageSharpFixed_withWebp_tracedSVG
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
        images.push(<div>
            <Img
                fixed={node.childImageSharp.fixed}
                key={node.id}
                alt={node.name.replace(/-/g, ' ')}
            />
        </div>);
    });

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1920,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
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