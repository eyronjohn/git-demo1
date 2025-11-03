import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import Navbar2 from "./components/Navbar2/Navbar2";
import AboutUs from "./pages/AboutUs/AboutUs";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import ReportedLostPets from "./pages/ReportedLostPets/ReportedLostPets";
import LostPets from "./pages/LostPets/LostPets";
import ContactUs from "./pages/ContactUs/ContactUs";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Home from "./pages/Home/Home";
import Homepage from "./pages/Homepage/Homepage";
import EditProfile from "./pages/EditProfile/EditProfile";
import ReportedFoundtPets from "./pages/ReportedFoundPets/ReportedFoundPets";
import ReportedFoundPets from "./pages/ReportedFoundPets/ReportedFoundPets";
import FoundPets from "./pages/FoundPets/FoundPets";
import ReportLostPet from "./pages/ReportLostPet/ReportLostPet";


function App() {
  return (
    <>
      <div className="w-full min-h-screen bg-[#F2C879] bg-[linear-gradient(20deg,rgba(242,200,121,0.2)_0%,rgba(166,5,48,0.2)_60%)] bg-blend-normal">
        <div className="w-[90%] mx-auto py-8">
          <BrowserRouter>
            <Navbar2 />
            <Routes>
              <Route path="/" element={<AboutUs />}></Route>
              <Route path="/about" element={<AboutUs />}></Route>
              <Route path="/register" element={<Register/>}></Route>
              <Route path="/login" element={<Login/> }></Route>
              <Route path="/profile" element={<Profile/>}></Route>
              <Route path="/reportedLostPets" element={<ReportedLostPets/>}></Route>
              <Route path="/lostPets" element={<LostPets/>}></Route>
              <Route path="/reportedFoundPets" element={<ReportedFoundPets/>}></Route>
              <Route path="/foundPets" element={<FoundPets/>}></Route>

              <Route path="/reportLostPet" element={<ReportLostPet/>}></Route>

              <Route path="/contactus" element={<ContactUs />}></Route>
              <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/homepage" element={<Homepage />}></Route>
              <Route path="/editprofile" element={<EditProfile />}></Route>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}


export default App
