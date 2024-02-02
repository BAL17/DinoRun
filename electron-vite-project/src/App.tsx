import Editor from "./Components/Dashboard";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<SignUp />} /> */}
          {/* <Route path="/signin" element={<SignIn />} /> */}
          <Route path="/" element={<Editor />} />
        </Routes>
      </Router>
          {/* <SignIn /> */}
          {/* <Editor/> */}
    </>
  );
}

export default App;
