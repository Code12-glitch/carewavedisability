import React, { Fragment } from "react";
import Header from "../../components/header";
import PageTitle from "../../components/pagetitle";
import NewParticipants from "../../components/NewParticipants";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";

const NewParticipantsPage = () => {
  return (
    <Fragment>
      <Header />

      <PageTitle
        pageTitle="New Participants"
        pagesub="New Participants"
      />

      <NewParticipants />

      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default NewParticipantsPage;