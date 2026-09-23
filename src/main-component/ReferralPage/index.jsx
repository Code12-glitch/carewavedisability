import React, { Fragment } from "react";
import Header from "../../components/header";
import PageTitle from "../../components/pagetitle";
import Referral from "../../components/Referral";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";

const ReferralPage = () => {
  return (
    <Fragment>
      <Header />

      <PageTitle
        pageTitle="Referral"
        pagesub="Referral"
      />

      <Referral />

      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default ReferralPage;