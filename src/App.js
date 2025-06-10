import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Header from "./sections/Header";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter as Router } from "react-router";

function App() {
  return (
    <Router>
      <Header />
      <AppRoutes />
    </Router>
  );
}

export default App;
