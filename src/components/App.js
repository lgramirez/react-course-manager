import React from "react";
import Header from "./common/Header";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import CoursesPage from "./CoursesPage";
import PageNotFound from "./PageNotFound";
import ManageCoursePage from "./ManageCoursePage";
import { Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthorsPage from "./AuthorsPage";
import ManageAuthorPage from "./ManageAuthorPage";

export default function App() {
  return (
    <div className="container-fluid">
      <ToastContainer autoClose={3000} hideProgressBar />
      <Header />
      <Switch>
        <Route path="/author/:id" component={ManageAuthorPage} />
        <Route path="/author" component={ManageAuthorPage} />
        <Route path="/authors" exact component={AuthorsPage} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Route path="/course" component={ManageCoursePage} />
        <Route path="/courses" exact component={CoursesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" exact component={HomePage} />
        <Redirect from="/about-page" to="about" />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
