import React from "react";
import "./App.css";
import Home from "./pages/home";
import Services from "./pages/services/";
import About from "./pages/about";
import { Provider } from "react-redux";
import store from "./redux/store";
import "aos/dist/aos.css";
function App() {
  return (
    <Provider store={store}>
      {/* <Home /> */}
      {/* <Services /> */}
      <About />
    </Provider>
  );
}

export default App;
