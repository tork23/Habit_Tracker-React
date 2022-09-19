import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import MyHabits from "./components/MyHabits";
import TrackHabit from "./components/TrackHabit";

function App(props) {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MyHabits />} />
            <Route path="track-habit" element={<TrackHabit />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
