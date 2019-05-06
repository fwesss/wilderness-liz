import React from 'react'
import Layout from '../components/Layout'
import InstagramCarousel from '../components/InstagramCarousel'
import HighlightRoll from "../components/HighlightRoll";
import {Box} from "mineral-ui";

export default class IndexPageTemplate extends React.Component {
    render() {
        return (
            <Layout>
                <Box as="main" id="page-wrap">
                    <header>
                        <HighlightRoll/>
                    </header>

                    <section>
                        <InstagramCarousel/>
                    </section>
                </Box>
            </Layout>
        )
    }
}