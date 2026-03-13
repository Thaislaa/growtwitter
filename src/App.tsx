import { Navigate, Route, Routes } from "react-router-dom"
import { Explore } from "./pages/Explore/Explore"
import { Profile } from "./pages/Profile/Profile"
import { Home } from "./pages/Home/Home"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to={"/home"} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  )
}

export default App
