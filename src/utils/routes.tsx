
import {Route,createBrowserRouter,createRoutesFromElements} from "react-router-dom"
import Home from "../pages/Home"
import Error from "../pages/error"
import Login from "../pages/login";
import NotFound from "../pages/notFound";
import Register from "../pages/register"
import History from "../pages/history"

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<Home/>} />
        <Route path="/error" element={<Error/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/history" element={<History />} />
        <Route path="/*" element={<NotFound />} />
      </Route>
    )
  );

export default router