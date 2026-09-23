import React, { Fragment } from 'react'
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import Services from '../../components/services'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'

const ServicesPage = () => {
    return (
        <Fragment>
            <Header />

            <PageTitle
                pageTitle={'Our Services'}
                pagesub={'Services'}
            />

            <Services />

            <Footer />

            <Scrollbar />
        </Fragment>
    )
}

export default ServicesPage