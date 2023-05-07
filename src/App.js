// import Categories from "./components/categories/Categories";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/Home";
import Navigation from "./routes/navigation/Navigation";
import UserAuthenticationForm from "./routes/authenticationForm/AuthenticationForm";
import Shop from "./routes/shop/Shop";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/auth" element={<UserAuthenticationForm />} />
        {/* <Route path="/sign-up" element={<SignUpForm />} /> */}
      </Route>
    </Routes>
  );
};

export default App;
