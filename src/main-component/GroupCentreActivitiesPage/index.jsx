import React, { Fragment } from "react";
import Header from "../../components/header";
import PageTitle from "../../components/pagetitle";
import GroupCentreActivities from "../../components/GroupCentreActivities";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";

const GroupCentreActivitiesPage = () => {
  return (
    <Fragment>
      <Header />

      <PageTitle
        pageTitle="Group Centre & Activities"
        pagesub="Group Centre & Activities"
      />

      <GroupCentreActivities />

      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default GroupCentreActivitiesPage;