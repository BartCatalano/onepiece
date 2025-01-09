import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppLayout from "./components/AppLayout"
import AppMugiwara from "./components/AppMugiwara"
import HomePage from "./components/HomePage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/mugiwara" element={<AppMugiwara />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )

}

export default App
