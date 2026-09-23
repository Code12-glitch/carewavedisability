import React, { Fragment } from "react";
import Header from "../../components/header";
import PageTitle from "../../components/pagetitle";
import HouseholdTasks from "../../Components/HouseholdTasks";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";

const HouseholdTasksPage = () => {
return ( <Fragment> <Header />


  <PageTitle
    pageTitle="Household Tasks"
    pagesub="Household Tasks"
  />

  <HouseholdTasks />

  <Footer />
  <Scrollbar />
</Fragment>


);
};

export default HouseholdTasksPage;
