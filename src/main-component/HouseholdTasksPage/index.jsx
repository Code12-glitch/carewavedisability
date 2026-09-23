import React, { Fragment } from 'react'
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import DailyTasksSharedLiving from '../../Components/DailyTasksSharedLiving'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'

const DailyTasksSharedLivingPage = () => {
    return (
        <Fragment>
            <Header />

            <PageTitle
                pageTitle="Daily Tasks & Shared Living"
                pagesub="Daily Tasks & Shared Living"
            />

            <DailyTasksSharedLiving />

            <Footer />
            <Scrollbar />
        </Fragment>
    )
}

export default DailyTasksSharedLivingPage