import React from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { graphql, useStaticQuery } from 'gatsby';
import {
  Box, Grid, GridItem, Text,
} from 'mineral-ui';
import InstaSquare from './InstaSquare';
import { colors } from '../utils/colors';


export default function InstagramCarousel() {
  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(
          filter: {fields: {InstagramImage: {eq: "true"}}}
          sort: {fields: [fields___likes], order: DESC}
          limit: 60
        ) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 600, maxHeight: 600) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
              id
              fields {
                link
                caption
                likes
              }
            }
          }
        }
      }
    `,
  );

  const images = [];
  let likesCount = '';
  const palette = [
    colors.yellow,
    colors.fuschia,
    colors.teal,
    colors.blue,
    colors.cyan,
    colors.green,
    colors.indigo,
    colors.lime,
    colors.green,
  ];

  allFile.edges.forEach(({ node }) => {
    likesCount = `\u2764 ${node.fields.likes}`;
    images.push(
      <div key={node.id}>
        <InstaSquare
          likes={likesCount.toString()}
          imageLink={node.fields.link}
          coverImage={node.childImageSharp.fluid}
          description={node.fields.caption}
          background={palette[Math.floor(Math.random() * palette.length)][3]}
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
    autoplaySpeed: 8000,
    pauseOnFocus: true,
    pauseOnHover: true,
    lazyLoad: 'progressive',
  };

  return (
    <Box>
      <Text align="center" as="h2">
        Instagram
      </Text>
      <Grid gutterWidth={0} columns={2} breakpoints={[1000]}>
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
