import React from 'react'
import Layout from '../components/Layout'
import InstagramCarousel from '../components/InstagramCarousel'
import HighlightRoll from "../components/HighlightRoll";
import {Box} from "mineral-ui";

export default class IndexPageTemplate extends React.Component {
    render() {
        return (
            <Layout>
                <Box>
                    <header>
                        <HighlightRoll/>
                    </header>

                    <main id="page-wrap">
                        <div>
                            <InstagramCarousel/>
                        </div>
                    </main>
                </Box>
            </Layout>
        )
    }
}