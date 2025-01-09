import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppLayout from "./components/AppLayout"
import AppMugiwara from "./components/AppMugiwara"
import HomePage from "./components/HomePage"
import AppRosso from "./components/AppRosso"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/mugiwara" element={<AppMugiwara />} />
          <Route path="/rosso" element={<AppRosso />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )

}

export default App
