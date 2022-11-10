import { createBrowserRouter } from "react-router-dom";
import AddServices from "../components/AddServices/AddServices";
import Blog from "../components/Blog/Blog";
import Error from "../components/Error/Error";
import Home from "../components/Home/Home";
import Main from "../components/Layouts/Main";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import EditReview from "../components/Reviews/EditReview";
import Reviews from "../components/Reviews/Reviews";
import ServiceDetails from "../components/ServiceDetails/ServiceDetails";
import Services from "../components/Services/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      {
        path: "/services",
        // loader: () => fetch("http://localhost:5000/allservices"),
        element: <Services></Services>,
      },
      {
        path: "/services/:id",
        loader: async ({ params }) =>
          fetch(`http://localhost:5000/allservices/${params.id}`),
        element: <ServiceDetails></ServiceDetails>,
      },
      { path: "/reviews", element: <Reviews></Reviews> },
      { path: "/addservices", element: <AddServices></AddServices> },
      { path: "/blog", element: <Blog></Blog> },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
      {
        path: "/update/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/update/${params.id}`),
        element: <EditReview></EditReview>,
      },
    ],
  },
  { path: "*", element: <Error></Error> },
]);

export default router;
