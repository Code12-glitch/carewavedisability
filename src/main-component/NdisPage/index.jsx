import React, { Fragment } from 'react'

import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import Ndis from '../../components/ndis'
import Testimonials from '../../components/testimonials'
import FAQ from '../../components/faq'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'

const NdisPage = () => {
    return (
        <Fragment>
            <Header />

            <PageTitle
                pageTitle="NDIS"
                pagesub="NDIS"
            />

            <Ndis />

            <Testimonials />

            <FAQ />

            <Footer />

            <Scrollbar />
        </Fragment>
    )
}

export default NdisPage