import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "../HomePage";
import Homepage2 from "../HomePage2";
import Homepage3 from "../HomePage3";
import AboutPage from "../AboutPage";
import NdisPage from "../NdisPage";
import ServicesPage from "../ServicesPage";

import AssistPersonalActivitiesPage from "../AssistPersonalActivitiesPage";
import AssistTravelTransportPage from "../AssistTravelTransportPage";
import DailyTasksSharedLivingPage from "../DailyTasksSharedLivingPage";
import CommunityParticipationPage from "../CommunityParticipationPage";
import HouseholdTasksPage from "../HouseholdTasksPage";

import CasePage from "../CasePage";
import CaseSinglePage from "../CaseSinglePage";
import EventPage from "../EventPage";
import EventPageSingle from "../EventPageSingle";
import DonatePage from "../DonatePage";
import VolunteerPage from "../volunteerPage";
import BlogPage from "../BlogPage";
import BlogPageLeft from "../BlogPageLeft";
import BlogPageFullwidth from "../BlogPageFullwidth";
import BlogDetails from "../BlogDetails";
import BlogDetailsLeftSiide from "../BlogDetailsLeftSiide";
import BlogDetailsFull from "../BlogDetailsFull";
import ErrorPage from "../ErrorPage";
import ContactPage from "../ContactPage";
import LoginPage from "../LoginPage";
import SignUpPage from "../SignUpPage";
import ForgotPassword from "../ForgotPassword";

const AllRoute = () => {
return ( <div className="App"> <BrowserRouter> <Routes>

```
      {/* Home */}
      <Route path="/" element={<Homepage />} />
      <Route path="home" element={<Homepage />} />
      <Route path="home2" element={<Homepage2 />} />
      <Route path="home3" element={<Homepage3 />} />

      {/* About */}
      <Route path="about" element={<AboutPage />} />

      {/* NDIS */}
      <Route path="ndis" element={<NdisPage />} />

      {/* Services */}
      <Route path="services" element={<ServicesPage />} />

      {/* Individual Services */}
      <Route
        path="assist-personal-activities"
        element={<AssistPersonalActivitiesPage />}
      />

      <Route
        path="assist-travel-transport"
        element={<AssistTravelTransportPage />}
      />

      <Route
        path="daily-tasks-shared-living"
        element={<DailyTasksSharedLivingPage />}
      />

      <Route
        path="community-participation"
        element={<CommunityParticipationPage />}
      />

      <Route
        path="household-tasks"
        element={<HouseholdTasksPage />}
      />

      {/* Cases */}
      <Route path="case" element={<CasePage />} />
      <Route path="case-single" element={<CaseSinglePage />} />

      {/* Events */}
      <Route path="event" element={<EventPage />} />
      <Route path="event-details" element={<EventPageSingle />} />

      {/* Other */}
      <Route path="donate" element={<DonatePage />} />
      <Route path="volunteer" element={<VolunteerPage />} />

      {/* Blog */}
      <Route path="blog" element={<BlogPage />} />
      <Route path="blog-left" element={<BlogPageLeft />} />
      <Route path="blog-fullwidth" element={<BlogPageFullwidth />} />
      <Route path="blog-details" element={<BlogDetails />} />
      <Route
        path="blog-details-left"
        element={<BlogDetailsLeftSiide />}
      />
      <Route
        path="blog-details-fullwidth"
        element={<BlogDetailsFull />}
      />

      {/* Contact / Authentication */}
      <Route path="404" element={<ErrorPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignUpPage />} />
      <Route path="forgot-password" element={<ForgotPassword />} />

    </Routes>
  </BrowserRouter>
</div>
```

);
};

export default AllRoute;
