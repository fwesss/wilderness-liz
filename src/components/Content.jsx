import React from 'react'
import PropTypes from 'prop-types'
import {Box} from "mineral-ui";
import styled from "@emotion/styled";

const ContentBox = styled(Box)({
  padding: "32px",

});

export const HTMLContent = ({ content, className }) => (
  <ContentBox as="main" id="page-wrap" className={className} dangerouslySetInnerHTML={{ __html: content }} />
);

const Content = ({ content }) => (
  <div>{content}</div>
);

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
};

HTMLContent.propTypes = Content.propTypes;

export default Content
