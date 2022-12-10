import Home from "./routes/home/Home.component";
import Navigation from "./routes/navigation/Navigation.component";
import SingIn from "./routes/sing-in/sing-in";
import Shop from "./routes/shop/Shop.component.jsx";
import Checkout from "./components/checkout/checkout.component";

import { Route, Routes } from "react-router-dom";

import "./categories.style.scss";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="sign-in" element={<SingIn />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
