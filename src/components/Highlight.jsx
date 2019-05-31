import * as React from 'react';
import PropTypes from 'prop-types';

import { Box, FlexItem, Text } from 'mineral-ui';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { colors } from '../utils/colors';

const HighlightLink = styled(FlexItem)`
    &:last-child {
        margin-top: 20px;
    }
    
    @media screen and (max-width: 1000px) {
        &:first-of-type {
            margin-top: 20px;
        }
    }
    
    @media (hover: hover) {
        &:hover p {
            opacity: 1;
            transform: translate3d(0, 0, 0);
            transition-delay: 0.15s;
        }
        &:hover div {
            opacity: 0.4;
            transform: scale3d(1.1, 1.1, 1);
        }
    }
`;

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
    color: ${colors.white};
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
    background: rgba(3, 12, 6, 0.05);
`;

const HighlightTitle = styled(Text)`
    margin: 0;
    position: relative;
    padding: 0.5em 0;
    color: ${colors.gray[1]};
    font-size: 2.5em;
`;

const HightlightDescription = styled(Text)`
    display: inline-block;
    margin: 0 0 0.25em;
    padding: 0.4em 1em;
    background: rgba(248, 249, 249, 0.7);
    text-transform: none;
    width: 95%;
    overflow: hidden;
    @media (hover: hover) {
        transition: opacity 0.35s, transform 0.35s;
        transform: translate3d(-1000px, 0, 0);
    }
`;

export default function Highlight(props) {
  const {
    imageLink, coverImage, title, description, height,
  } = props;
  return (
    <HighlightLink as={Link} to={imageLink}>
      <HighlightFigure as="figure" height={height}>
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
    </HighlightLink>
  );
}

Highlight.propTypes = {
  imageLink: PropTypes.string.isRequired,
  coverImage: PropTypes.shape({
    requiredProperty: PropTypes.object,
  }).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
};
