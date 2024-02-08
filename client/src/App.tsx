import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./page/Main";
import Employee from "./page/Employee";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<Employee />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;