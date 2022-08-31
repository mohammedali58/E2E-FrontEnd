import { Home } from "pages";
import { Routes, Route } from "react-router-dom";

const AppRouter = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
