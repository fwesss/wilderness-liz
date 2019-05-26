import React from 'react';

import { Box } from 'mineral-ui';
import Layout from '../../components/Layout';
import TripRoll from '../../components/TripRoll';

export default function TripIndexPage() {
  return (
    <Layout>
      <Box as="main" id="page-wrap">
        <TripRoll />
      </Box>
    </Layout>
  );
}
