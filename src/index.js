import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import Routing from "./Routing";

const history = createBrowserHistory();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router history={history}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {Routing.map((route) => (
            <Route key={route.path} path={route.path} element={<route.component />} />
          ))}
        </Routes>
      </Suspense>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

