// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// )




import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import App from './App'
import React from "react";
import { createRoot } from 'react-dom/client'
import Dashboard from "./peges/1-dashboard/Dashboard";
import Team from "./peges/2-team/Team";
import Contacts from "./peges/3-contacts/Contacts";
import Invoices from "./peges/4-invoices/Invoices";
import Form from "./peges/5-form/Form";
import Calender from "./peges/6-calender/Calender";
import Faq from "./peges/7-faq/Faq";
import Bar from "./peges/8-bar/Bar";
import Pie from "./peges/9-pie/Pie";
import Line from "./peges/10-line/Line";
import Geography from "./peges/11-geography/Geography";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App></App>}>
      <Route index element={<Dashboard />} />
      <Route path="team" element={<Team />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="invoices" element={<Invoices />} />
      <Route path="form" element={<Form />} />
      <Route path="calender" element={<Calender />} />
      <Route path="faq" element={<Faq />} />
      <Route path="bar" element={<Bar />} />
      <Route path="pie" element={<Pie />} />
      <Route path="line" element={<Line />} />
      <Route path="geography" element={<Geography />} />
    </Route>
  )
);

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
