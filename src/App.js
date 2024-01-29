import "./App.css";
import Footer from "./shared/components/Footer";
import { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./shared/components/Navbar";
import Loader from "./shared/components/Loader";
const Home = lazy(() => import("./components/home/Home"));
const Foodhub = lazy(() => import("./components/foodhub/Foodhub"));
const Househub = lazy(() => import("./components/househub/Househub"));
const Login = lazy(() => import("./components/user/Login"));
const Onboard = lazy(() => import("./components/user/Onboard"));
const Pagenotfound = lazy(() => import("./shared/components/Pagenotfound"));
const Profile = lazy(() => import("./components/user/Profile"));
function App() {

  return (
    <div className="app-container">
      <BrowserRouter>
        <Navbar className="navbar" />
        <Suspense fallback={<Loader/>}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/foodhub" element={<Foodhub />} />
            <Route path="/househub" element={<Househub />} />
            <Route path="/user/login" element={<Login />} />
            <Route path="/user/onboard" element={<Onboard />} />
            <Route path="/user/profile" element={<Profile />} />
            <Route path="*" element={<Pagenotfound />} />
          </Routes>
        </Suspense>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

// const { register, handleSubmit, formState: { errors, isSubmitting }, setError  } = useForm();

// const onSubmit = async (data) =>{
//   await new Promise((resolve)=>{
//     setTimeout(resolve, 1000);
//     console.log(data)
//   })
// }

// <form onSubmit={handleSubmit(onSubmit)}>
//   <label htmlFor="name">Name:</label>
//   <input type="text" id="name" name='name' {...register("name")}/><br />
//   {errors.email && <div>{errors.email.message}</div>}
//   <label htmlFor="email">Email:</label>
//   <input type="text" id=""/>
//   <button type='submit'>{isSubmitting ? "Loading.." : "Submit"}</button>
// </form>
