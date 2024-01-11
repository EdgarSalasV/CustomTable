import { Routes, Route } from "react-router-dom";
import Layout from "./views/Layout";
import NoMatch from "./views/NoMatch";
import Products from "./views/Products";
import Home from "./views/Home";

interface iApp {}
function App({}: iApp): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />

        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
