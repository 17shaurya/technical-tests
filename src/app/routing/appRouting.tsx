import { Routes, Route, BrowserRouter } from "react-router-dom";
import Searching from "../pages/searching";
import Checkbox from "../pages/checkbox";
import HomeScreen from "../pages/homeScreen";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomeScreen />} />
        <Route path={"seachring"} element={<Searching />} />
        <Route path={"checkbox"} element={<Checkbox />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
