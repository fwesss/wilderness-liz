import * as React from 'react';

import { Flex, FlexItem, Text } from 'mineral-ui';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';
import * as PropTypes from 'prop-types';
import { colors } from '../utils/colors';

const Description = styled(Text)`
    font-size: 18px;
    text-align: center;
`;

const DescriptionBox = styled(FlexItem)`
    margin: 32px;
    padding: 32px;
    background-color: ${colors.brand};
    opacity: 0.85;
    border-radius: 4px;
    align-self: center;
    flex-direction: column;
`;

function Hero(props) {
  const {
    coverImage, title, description, height,
  } = props;
  return (
    <BackgroundImage
      fluid={coverImage}
      backgroundColor={colors.brand}
    >
      <Flex
        justifyContent="evenly"
        direction="row"
        height={height}
      >
        <DescriptionBox>
          <Text align="center" as="h1">
            {title}
          </Text>
          <Description>
            {description}
          </Description>
        </DescriptionBox>
      </Flex>
    </BackgroundImage>
  );
}

Hero.propTypes = {
  coverImage: PropTypes.shape.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default Hero;
