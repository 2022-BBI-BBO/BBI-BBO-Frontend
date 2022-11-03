import { Routes, BrowserRouter, Route } from "react-router-dom";
import PostMain from "./page/post/PostMain";
import PostView from "./page/post/PostView";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/postView/:no" element={<PostView/>} />
          <Route exact path="/" element={<PostMain/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
