import React from "react";
import { Route, Routes } from "react-router-dom";
import Location from "../pages/Location";
import Maps from "../pages/Maps";
import Search from "../pages/Search";
import Main from "../pages/Main";
import Today from "../pages/Today";
import Daily from "../pages/Daily";
import Hourly from "../pages/Hourly";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Today />}></Route>
        <Route path="today" element={<Today />} />
        <Route path="daily" element={<Daily />} />
        <Route path="hourly" element={<Hourly />} />
      </Route>
      <Route path="/locations" element={<Location />} />
      <Route path="/maps" element={<Maps />} />
      <Route path="/search" element={<Search />} />
      <Route path="*" element={<div>ERROR 404</div>} />
    </Routes>
  );
};

export default AppRoutes;
