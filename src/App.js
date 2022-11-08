import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Storypage from "./pages/Storypage";
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
];
function App() {
  return (
    <Routes>
      {routes.map(({ path, element }) => (
        <Route path={path} element={element} />
      ))}
    </Routes>
  );
}

export default App;
