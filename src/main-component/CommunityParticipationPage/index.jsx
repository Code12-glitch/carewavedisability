import React, { Fragment } from "react";
import Header from "../../components/header";
import PageTitle from "../../components/pagetitle";
import CommunityParticipation from "../../Components/CommunityParticipation";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";

const CommunityParticipationPage = () => {
  return (
    <Fragment>
      <Header />

      <PageTitle
        pageTitle="Community Participation"
        pagesub="Community Participation"
      />

      <CommunityParticipation />

      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default CommunityParticipationPage;