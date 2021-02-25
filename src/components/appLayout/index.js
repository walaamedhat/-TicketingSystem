import React, { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../../Routes/main";
import SuspenseFallback from "../shared/SuspenseFallback";
import LeftPanel from "../shared/LeftPanel";
import {getTickets} from "../../redux/Home/actions";

import './index.css';



export default function App() {
  const dispatch = useDispatch();
  useEffect(()=> {
      dispatch(getTickets())
  });
  return (
    <Router>
      <div className="root">
        <main className="content">
          <Suspense fallback={<SuspenseFallback />}>
            <div className="site-layout">
              <LeftPanel />
              <Routes />
            </div>
          </Suspense>
        </main>
      </div>
    </Router>
  );
}
