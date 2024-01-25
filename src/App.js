import "./App.css";
import Footer from "./shared/components/Footer";
import Home from "./components/home/Home";
import Navbar from "./shared/components/Navbar";
import Foodhub from "./components/foodhub/Foodhub";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Househub from "./components/househub/Househub";
// import { useForm } from "react-hook-form"
function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Navbar className="navbar" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/foodhub" element={<Foodhub />} />
          <Route path="/househub" element={<Househub />} />
        </Routes>
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
