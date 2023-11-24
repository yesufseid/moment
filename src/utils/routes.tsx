
import {Route,createBrowserRouter,createRoutesFromElements} from "react-router-dom"
import Home from "../pages/Home"
import NotFound from "../pages/notFound";
import History from "../pages/history"
import Form from "../commponents/UI/form"
import Register from "../commponents/UI/register"

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<Home/>} />
        <Route path="/login" element={<Form/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/history" element={<History />} />
        <Route path="/*" element={<NotFound />} />
      </Route>
    )
  );

export default router