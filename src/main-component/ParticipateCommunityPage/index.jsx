import React, { Fragment } from "react";
import Header from "../../components/header";
import PageTitle from "../../components/pagetitle";
import ParticipateCommunity from "../../Components/ParticipateCommunity";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";

const ParticipateCommunityPage = () => {
  return (
    <Fragment>
      <Header />

      <PageTitle
        pageTitle="Participate Community"
        pagesub="Participate Community"
      />

      <ParticipateCommunity />

      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default ParticipateCommunityPage;