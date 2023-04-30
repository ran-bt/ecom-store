// import Categories from "./components/categories/Categories";
import { Route, Routes } from "react-router-dom";
import SignUpForm from "./components/signup-form/SignUpForm";
import Home from "./routes/home/Home";
import Navigation from "./routes/navigation/Navigation";
import SignIn from "./routes/sign-in/SignIn";

const App = () => {
  const Shop = () => {
    return <h1> Welcome to to shop</h1>;
  };

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/sign-in" element={<SignIn />} />
        {/* <Route path="/sign-up" element={<SignUpForm />} /> */}
      </Route>
    </Routes>
  );
};

export default App;
