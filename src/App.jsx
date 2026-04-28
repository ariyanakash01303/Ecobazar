import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import MainLayouts from "./components/latouts/MainLayouts";



function App() {


  return (
    <>
      <Routes>
        <Route element={<MainLayouts/>}>
          <Route path="/" element={<Home/>} />
            <Route path="/Registration" element={<Registration/>}/>
          <Route path="/Login" element={<Login/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
