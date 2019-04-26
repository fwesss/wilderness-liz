import React from 'react'

import Layout from '../../components/Layout'
import TripRoll from '../../components/TripRoll'
import {Box, Text} from "mineral-ui";

export default class TripIndexPage extends React.Component {
    render() {
        return (
            <Layout>
                <Box as="header" paddingTop="lg" paddingRight="lg">
                    <Text align="end" as="h1">
                        Adventures
                    </Text>
                </Box>
                <Box as="main" id="page-wrap">
                    <TripRoll/>
                </Box>
            </Layout>
        )
    }
}
