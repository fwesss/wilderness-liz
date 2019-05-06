import React from 'react'

import Layout from '../../components/Layout'
import TripRoll from '../../components/TripRoll'
import {Box} from "mineral-ui";

export default class TripIndexPage extends React.Component {
    render() {
        return (
            <Layout>
                <Box as="main" id="page-wrap">
                    <TripRoll/>
                </Box>
            </Layout>
        )
    }
}
