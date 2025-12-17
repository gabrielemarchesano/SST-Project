import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Homepage from "./pages/Homepage";
import TravelPage from "./pages/TravelPage";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/details/:id" element={<TravelPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App