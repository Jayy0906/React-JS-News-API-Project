import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Nav from "./components/Nav.jsx";
import News from "./components/News.jsx";
function App() {
  // https://newsapi.org/docs/endpoints/top-headlines
  // const [category, setCategory] = useState("health")
  const [category, setCategory] = useState("general");
  return (
    <>
      <Nav setCategory={setCategory} />
      <News category={category} />
    </>
  );
}
export default App;
