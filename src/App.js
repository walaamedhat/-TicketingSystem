import { BrowserRouter } from "react-router-dom";
import AppLayout from "./components/appLayout";

import './App.css';

function App() {
  return (
      <BrowserRouter>
        <div className="app">
          <AppLayout />
        </div>
      </BrowserRouter>
  );
}

export default App;
