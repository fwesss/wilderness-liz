import React from 'react';

import Slider from 'react-slick';
import Img from 'gatsby-image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { graphql, useStaticQuery } from 'gatsby';
import {
  Box, Grid, GridItem, Text,
} from 'mineral-ui';
import { colors } from '../utils/colors';


export default function InstagramCarousel() {
  const { allFile } = useStaticQuery(
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
    `,
  );

  const images = [];

  allFile.edges.forEach(({ node }) => {
    images.push(
      <div key={node.id}>
        <Img
          fluid={node.childImageSharp.fluid}
          alt={node.name.replace(/-/g, ' ')}
          backgroundColor={colors.brand}
        />
      </div>,
    );
  });

  const settings = {
    vertical: true,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnFocus: true,
    pauseOnHover: true,
    lazyLoad: 'progressive',
  };

  return (
    <Box>
      <Text
        align="center"
        as="h2"
      >
        Instagram
      </Text>
      <Grid
        gutterWidth={0}
        columns={2}
        breakpoints={[1000]}
      >
        <GridItem span={[2, 1]}>
          <Slider {...settings}>
            {images.splice(0, Math.ceil(images.length / 2))}
          </Slider>
        </GridItem>
        <GridItem span={[2, 1]}>
          <Slider {...settings}>
            {images.reverse().splice(0, Math.ceil(images.length / 2))}
          </Slider>
        </GridItem>
      </Grid>
    </Box>
  );
}
