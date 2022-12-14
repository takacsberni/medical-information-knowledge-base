import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import AllDiseases from "./routes/AllDiseases";
import GetDiseaseDetail from "./components/GetDiseaseDetail";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />}>
              <Route path="" element={<Home />} />
              <Route path="diseases/all" element={<AllDiseases />} />
              <Route path="diseases/get/:filter" element={<GetDiseaseDetail />} />
          </Route>
      </Routes>
  </BrowserRouter>
);

