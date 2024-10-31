import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./css/App.css";
import MainPage from "./pages/MainPage";
import Admin from "./pages/Admin";

const routerProv = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/main/" element={<MainPage />}>
        <Route path="/main/:role" element={<Admin />}></Route>
      </Route>
    </>
  )
);

export default function App() {
  return <RouterProvider router={routerProv}></RouterProvider>;
}