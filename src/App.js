import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'react-image-lightbox/style.css';
/* plugins styles downloaded */
import "./assets/vendor/fullcalendar/dist/fullcalendar.min.css";
import "./assets/vendor/sweetalert2/dist/sweetalert2.min.css";
import "./assets/vendor/quill/dist/quill.core.css";
import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/vendor/@fortawesome/fontawesome-free/css/v4-shims.min.css";
/* override styles */
import "./assets/styles/App.scss";

import IndexView from "./screens/Index.js";
import ResumeView from "./screens/Resume.js";
import PortfolioView from "./screens/Portfolio.js";
import ContactView from "./screens/Contact.js";
import SignInView from "./screens/SignIn.js";

const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact render={props => <IndexView {...props} />} />
      <Route path="/resume" exact render={props => <ResumeView {...props} />} />
      <Route path="/portfolio" exact render={props => <PortfolioView {...props} />} />
      <Route path="/contact" exact render={props => <ContactView {...props} />} />
      <Route path="/signin" exact render={props => <SignInView {...props} />} />
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>
  );
}

export default App;
