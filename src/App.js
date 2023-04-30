import Home from "./Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Setting from "./menu buttons/Setting";
import PaymentDetails from "./menu buttons/PaymentDetails";
import Aboutus from "./menu buttons/Aboutus";
import CommunityGuidline from "./menu buttons/CommunityGuidline";
import Faqs from "./menu buttons/Faqs";
import TermsandCondistions from "./menu buttons/TermsandCondistions";
import PrivacyPolicy from "./menu buttons/PrivacyPolicy";
import ContactUs from "./menu buttons/ContactUs";
import Login from "./Home/Login";
import Howitworks from "./How it works/Howitworks";
import PageName1 from "./How it works/PageName1";
import PageName2 from "./How it works/PageName2";
import PageName3 from "./How it works/PageName3";
import PageName4 from "./How it works/PageName4";
import SignUp from "./Home/SignUp";
import Navbar from "./Home/Navbar";
import MyProfile from "./Home/MyProfile";
import JobProvider from "./Home/JobProvider";
import EditProfile from "./Home/EditProfile";
import MyPostedJobs from "./Home/MyPostedJobs";
import Chat from "./Home/Chat";
import Catagory from "./Home/Catagory";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/PaymentDetails" element={<PaymentDetails />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/communityGuidline" element={<CommunityGuidline />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/termsandCondistions" element={<TermsandCondistions />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/howitworks" element={<Howitworks />} />
        <Route path="/pagename1" element={<PageName1 />} />
        <Route path="/pagename2" element={<PageName2 />} />
        <Route path="/pagename3" element={<PageName3 />} />
        <Route path="/pagename4" element={<PageName4 />} />
        <Route path="/signup/" element={<SignUp />}>
          <Route path="jobprovider" element={<JobProvider />} />
        </Route>
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/mypostedjobs" element={<MyPostedJobs />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/catagory" element={<Catagory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
