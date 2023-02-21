import { Routes, Route } from "react-router-dom";
import UserList from "./components/UserList";
import UserDashboard from "./components/UserDashboard";

function App() {
  return (
    <Routes>
        <Route index element={<UserList/>}></Route>
        <Route path="/profile/:id" element={<UserDashboard />} />
    </Routes>
  );
}

export default App;