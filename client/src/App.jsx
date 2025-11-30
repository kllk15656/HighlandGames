import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Tickets from "./pages/Tickets";
import Events from "./pages/Events";
import EventInfo from "./pages/EventInfo";
import EventSignup from "./pages/EventSignup";
import CalendarPage from "./pages/Calendar";
import Leaderboard from "./pages/Leaderboard";
import PastEvents from "./pages/PastEvents";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";

/**
 * Mobile-first layout is used via Tailwind classes in components.
 */
export default function App(){
  return (
    /** this sets up thr header and navbar and sets up the routes */
    <BrowserRouter>
      <div className="min-h-screen">
      <Navbar />
        <main className="max-w-5xl mx-auto p-4">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/tickets' element={<Tickets />} />
            <Route path='/events' element={<Events />} />
            <Route path='/events/:id' element={<EventInfo />} />
            <Route path='/signup' element={<EventSignup />} />
            <Route path='/calendar' element={<CalendarPage />} />
            <Route path='/leaderboard' element={<Leaderboard />} />
            <Route path='/pastevents' element={<PastEvents />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
