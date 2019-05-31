import * as React from 'react';
import PropTypes from 'prop-types';

import {
  Box, FlexItem, Text, Link,
} from 'mineral-ui';
import Img from 'gatsby-image';
import styled from '@emotion/styled';

const InstaLink = styled(FlexItem)`
    p, h4 {
        opacity: 0;
    }
    
    @media (hover: hover) {
        &:hover p, &:hover h4 {
            animation: fadein 1s;
            animation-fill-mode: forwards;
        }
        
        &:hover div {
            animation: fadeout 1s;
            animation-fill-mode: forwards;
        }
        
        @keyframes fadein {
            from { opacity: 0; }
            to   { opacity: 1; }
        }
        
        @keyframes fadeout {
            from { opacity: 1; }
            to   { opacity: 0.35; }
        }
    }
`;

const InstaFigure = styled(Box)`
    position: relative;
    overflow: hidden;
    margin: 10px 1%;
`;

const InstaImg = styled(Img)`
    position: relative;
    display: block;
    min-height: 100%;
    max-width: none;
    transition: opacity 1s, transform 1s;
    backface-visibility: hidden;
`;

const InstaCaption = styled(Box)`
    padding: 2.5px;
    backface-visibility: hidden;
    &::before, &::after {
        pointer-events: none;
    }
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: left;
`;

export default function InstaSquare(props) {
  const {
    imageLink, coverImage, likes, description, background,
  } = props;

  const randomBackground = {
    backgroundColor: background,
  };

  return (
    <InstaLink as={Link} href={imageLink}>
      <InstaFigure as="figure" style={randomBackground}>
        <InstaImg fluid={coverImage} />
        <InstaCaption as="figcaption">
          <Text as="h4">
            {likes}
          </Text>
          <Text as="p">
            {description}
          </Text>
        </InstaCaption>
      </InstaFigure>
    </InstaLink>
  );
}

InstaSquare.propTypes = {
  imageLink: PropTypes.string.isRequired,
  coverImage: PropTypes.shape({
    requiredProperty: PropTypes.object,
  }).isRequired,
  likes: PropTypes.string,
  description: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
};

InstaSquare.defaultProps = {
  likes: '',
};
