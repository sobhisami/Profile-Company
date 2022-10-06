import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "../pages/About";
import { ContactPage } from "../pages/ContactPage";
import { HomePage } from "../pages/HomePage";
import ProjectPage from "../pages/ProjectPage";

export default function RouteAll() {
  return <Fragment>
<Routes>
  <Route path="/" element={<HomePage/>}></Route>
  <Route path="/home" element={<HomePage/>}></Route>
  <Route path="/About" element={<AboutPage/>}></Route>
  <Route path="/project" element={<ProjectPage/>}></Route>
  <Route path="/Contact" element={<ContactPage/>}></Route>
</Routes>

  </Fragment>
}