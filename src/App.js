import {Home} from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import {Posts} from "./pages/Posts";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="*" element={<h1>not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
