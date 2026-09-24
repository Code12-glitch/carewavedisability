import React, { Fragment } from 'react'
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import AssistTravelTransport from "../../components/AssistTravelTransport"
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'

const AssistTravelTransportPage = () => {
    return (
        <Fragment>
            <Header />

            <PageTitle
                pageTitle="Assist Travel & Transport"
                pagesub="Assist Travel & Transport"
            />

            <AssistTravelTransport />

            <Footer />
            <Scrollbar />
        </Fragment>
    )
}

export default AssistTravelTransportPage
