import Home from "./routes/home/Home.component";
import Navigation from "./routes/navigation/Navigation.component";
import SingIn from "./routes/sing-in/sing-in";

import { Route, Routes, Navigate } from "react-router-dom";

import "./categories.style.scss";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Navigation />}>
        <Route index path="" element={<Home />} />
        <Route index path="sign-in" element={<SingIn />} />
      </Route>
    </Routes>
  );
};

export default App;
