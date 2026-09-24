import React, { Fragment } from 'react'
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import AssistPersonalActivities from "../../components/AssistPersonalActivities";
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'

const AssistPersonalActivitiesPage = () => {
    return (
        <Fragment>
            <Header />

            <PageTitle
                pageTitle="Assist Personal Activities"
                pagesub="Assist Personal Activities"
            />

            <AssistPersonalActivities />
        
            <Footer />
            <Scrollbar />
        </Fragment>
    )
}

export default AssistPersonalActivitiesPage;