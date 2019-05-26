import * as React from 'react';
import PropTypes from 'prop-types';

import { Box, Text } from 'mineral-ui';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import { colors } from '../utils/colors';

const HighlightFigure = styled(Box)`
    position: relative;
    overflow: hidden;
    margin: 10px 1%;
    background: ${colors.brand};
    text-align: center;
`;

const HighlightImg = styled(Img)`
    position: relative;
    display: block;
    min-height: 100%;
    max-width: none;
    opacity: 0.8;
    transition: opacity 1s, transform 1s;
    backface-visibility: hidden;
`;

const HighlightCaption = styled('figcaption')`
    padding: 2em;
    color: #fff;
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

const HighlightTitle = styled(Text)`
    margin: 0;
    position: relative;
    padding: 0.5em 0;
    color: ${colors.gray[9]}
`;

const HightlightDescription = styled(Text)`
    display: inline-block;
    margin: 0 0 0.25em;
    padding: 0.4em 1em;
    background: rgba(248, 249, 249, 0.7);
    text-transform: none;
    @media (hover: hover) {
        transition: opacity 0.35s, transform 0.35s;
        transform: translate3d(-1000px, 0, 0);
    }
`;

export default function Highlight(props) {
  const {
    coverImage, title, description, height,
  } = props;
  return (
    <HighlightFigure
      as="figure"
      height={height}
    >
      <HighlightImg fluid={coverImage} />
      <HighlightCaption>
        <HighlightTitle as="h2">
          {title}
        </HighlightTitle>
        <HightlightDescription as="p">
          {description}
        </HightlightDescription>
      </HighlightCaption>
    </HighlightFigure>
  );
}

Highlight.propTypes = {
  coverImage: PropTypes.shape({
    requiredProperty: PropTypes.object,
  }).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
};
