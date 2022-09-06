import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import TVSeries from "./components/pages/TVSeries";
import Movies from "./components/pages/Movies";
import Anime from "./components/pages/Anime";
import Banner from "./components/pages/Banner";
import LeftDrawer from "./components/Drawer";

function App() {
  return (
    <div className="App">
      <LeftDrawer>
        <Home />
      </LeftDrawer>
      {/* <LeftDrawer>
        <Banner />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/tvseries" component={TVSeries} />
          <Route path="/movies" component={Movies} />
          <Route path="/anime" component={Anime} />
          {/* <Route path="/posts/:post_id" component={Post} /> */}
      {/* </Routes> */}
      {/* </LeftDrawer> */}
    </div>
  );
}

export default App;
