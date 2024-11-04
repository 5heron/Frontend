import { HashRouter as Router, Routes, Route } from "react-router-dom";
import {HomePage} from "./Pages/HomePage";
import { LoginPage } from "./Pages/LoginPage";
import { Test } from "./Pages/Test";
import { useState, useEffect } from "react";
import { BookingPage } from "./Pages/BookingPage";
import LoginPageSuccess from "./Pages/LoginPageSuccess";
import { BookingPageSuccess } from "./Pages/BookingPageSuccess";
import { HomePageSuccess} from "./Pages/HomePageSuccess";
import { ShrekBooking } from "./Pages/ShrekBooking";
export default function App() {

  useEffect(()=>{
    console.log(import.meta.env.VITE_API_URL)
  }, [])

    return(
      <>
        <Router>
          <Routes>
            <Route path="test" element={<Test/>}/>
            <Route path="login" element={<LoginPage/>}/>
            <Route path="bookingpage" element={<BookingPage/>}/>
            <Route path="" element={<HomePage/>} />
            <Route path="/loggedin" element={<LoginPageSuccess/>} />
            <Route path="/homepageloggedin" element={<HomePageSuccess/>} />
            <Route path="/shrekbooking" element={<ShrekBooking/>} />
            <Route path="/bookingpagesuccess" element={<BookingPageSuccess/>} />
          </Routes>
        </Router>
      </>
    )
}
