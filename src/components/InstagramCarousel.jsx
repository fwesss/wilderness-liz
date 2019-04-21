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
                                fixed(width: 350, height: 250) {
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
        slidesToShow: 6,
        slidesToScroll: 6,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1745,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
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