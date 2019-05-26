import * as React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'mineral-ui';
import styled from '@emotion/styled';
import { colors } from '../utils/colors';

const ContentBox = styled(Box)`
    margin: 5vh 5vw;
    
    h1 {
        margin: 2.5vh auto;
        max-width: 45em;
        font-size: 1.75em;
        color: ${colors.cyan[9]};
    }
    
    h2 {
        margin: 1.5vh auto;
        max-width: 52.5em;
        font-size: 1.5em;
        color: ${colors.teal[9]};
    }
    
    p {
        margin: 2.5vh auto;
        max-width: 70em;
        font-size: 1.125em;
        color: ${colors.gray[9]};
    }
    
    ul {
        margin-left: 10vw;
        font-size: 1.125em;
        color: ${colors.gray[9]};
    }
    
    blockquote {
        margin: auto;
        max-width: 67.5em;
        border-color: ${colors.pink[6]};
        p {
            margin: auto 0;
            font-size: 1em;
            color: ${colors.gray[9]};
        }
    }
    
    figure {
        margin: 4vh auto;
    }
    
    figcaption {
        color: ${colors.gray[8]};
    }
`;

export const HTMLContent = ({ content, className }) => (
  <ContentBox
    as="main"
    id="page-wrap"
    className={className}
    dangerouslySetInnerHTML={{ __html: content }}
  />
);

const Content = ({ content }) => (
  <div>
    {content}
  </div>
);

Content.propTypes = {
  content: PropTypes.node.isRequired,
};

HTMLContent.propTypes = Content.propTypes;

export default Content;
