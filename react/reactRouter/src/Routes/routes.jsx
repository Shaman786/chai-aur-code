import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "../Layout";
import Home from "../components/Home/Home";
import About from "../components/AboutUs/AboutUs.jsx";
import Contact from "../components/ContactUs/ContactUs.jsx";
import User from "../components/User/User.jsx";
import Github, { githubInfoLoader } from "../components/Github/Github.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
      <Route path="user/:userid" element={<User />} />
      <Route loader={githubInfoLoader} path="github" element={<Github />} />
      <Route />
    </Route>,
  ),
);

export default router;
