import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnimatedCardGrid from "./AnimatedCardGrid";
import ExplodingImages from "./ExplodingImages";
import FadeAway from "./FadeAway";
import Randompurple from "./Randompurple";

function AllRoutes() {
  return (
    <div className="AppContainer">
      <Routes>
        <Route path="/" element={<ExplodingImages />} />
        <Route path="/grid" element={<AnimatedCardGrid />} />
        <Route path="/fade" element={<FadeAway />} />
        <Route path="/purple" element={<Randompurple />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;