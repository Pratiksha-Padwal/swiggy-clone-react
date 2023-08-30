import "./App.css";
import "./index.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { createBrowserRouter, Outlet } from "react-router-dom";
import About from "./components/Aboutus";
import Contact from "./components/Contactus";
function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  // {
  //   path: "/about",
  //   element: <About />,
  // },
]);

export default App;
