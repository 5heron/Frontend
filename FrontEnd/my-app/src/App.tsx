import { HashRouter as Router, Routes, Route } from "react-router-dom";
import {HomePage} from "./Pages/HomePage";
import { LoginPage } from "./Pages/LoginPage";
import { Test } from "./Pages/Test";
import { useState, useEffect } from "react";
import { BookingPage } from "./Pages/BookingPage";
import LoginPageSuccess from "./Pages/LoginPageSuccess";
import { BookingPageSuccess } from "./Pages/BookingPageSuccess";
import { HomePageSuccess} from "./Pages/HomePageSuccess";
import { Theatre1 } from "./Pages/Theatre1";
import { Theatre2 } from "./Pages/Theatre2";
import { Theatre3 } from "./Pages/Theatre3";
import { Theatre4 } from "./Pages/Theatre4";
import { Theatre5 } from "./Pages/Theatre5";

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
            <Route path="/Theatre1" element={<Theatre1/>} />
            <Route path="/Theatre2" element={<Theatre2/>} />
            <Route path="/Theatre3" element={<Theatre3/>} />
            <Route path="/Theatre4" element={<Theatre4/>} />
            <Route path="/Theatre5" element={<Theatre5/>} />
            <Route path="/bookingpagesuccess" element={<BookingPageSuccess/>} />
            <Route path="/test" element={<Test/>} />
          </Routes>
        </Router>
      </>
    )
}
