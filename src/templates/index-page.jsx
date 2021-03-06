import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, GridItem } from 'mineral-ui';
import styled from '@emotion/styled';
import withSizes from 'react-sizes';
import Layout from '../components/Layout';
import InstagramCarousel from '../components/InstagramCarousel';
import HighlightRoll from '../components/HighlightRoll';
import ContentRoll from '../components/ContentRoll';
import { colors } from '../utils/colors';


const ContentGrid = styled(Grid)`
    margin: 3vh 7.5vw;
    @media screen and (max-width: 1400px) {
        margin: 3vh 6vw;
    }
    @media screen and (max-width: 1000px) {
        margin: 3vh 3vw;
    }
    @media screen and (max-width: 670px) {
        margin: 0 5vw;
        padding-top: 1.5vh;
        border-top: 2px solid ${colors.pink[7]};
    }
`;

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 670,
});

function IndexPageTemplate(props) {
  const { isMobile } = props;

  return (
    <Layout>
      <Box as="main" id="page-wrap">
        <header>
          <HighlightRoll />
        </header>
        {isMobile ? (
          <ContentGrid gutterWidth={0} columns={1}>
            <GridItem span={1} as="section">
              <ContentRoll />
            </GridItem>

            <GridItem span={1} as="section">
              <InstagramCarousel />
            </GridItem>
          </ContentGrid>
        ) : (
          <ContentGrid columns={12}>
            <GridItem span={9} as="section">
              <ContentRoll />
            </GridItem>

            <GridItem span={3} as="section">
              <InstagramCarousel />
            </GridItem>
          </ContentGrid>
        )}
      </Box>
    </Layout>
  );
}

IndexPageTemplate.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default withSizes(mapSizesToProps)(IndexPageTemplate);
