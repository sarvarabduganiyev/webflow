import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Storypage from "./pages/Storypage";
import Merchant from "./pages/Merchant";
import Landing from "./pages/Landing";
const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/storypage",
    element: <Storypage />,
  },
  {
    path: "/price",
    element: <Pricing />,
  },
  {
    path: "/merchant",
    element: <Merchant />,
  },
  {
    path: "/landing",
    element: <Landing />,
  },
];
function App() {
  return (
    <Routes>
      {routes.map(({ path, element }, idx) => (
        <Route path={path} element={element} key={idx} />
      ))}
    </Routes>
  );
}

export default App;
