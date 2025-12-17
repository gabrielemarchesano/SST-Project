import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Homepage from "./pages/Homepage";
import TravelPage from "./pages/TravelPage";
import viaggi from "./data/data";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Homepage viaggi={viaggi} />} />
            <Route path="/details/:id" element={<TravelPage viaggi={viaggi} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App