import { Route, Routes } from "react-router";
import Layout from "./layout/Layout";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Homepage from "./layout/Homepage";
import Trainers from "./trainers/Trainers";
import TrainerById from "./trainers/TrainerById";
import ProgramsById from "./programs/ProgramsById";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/trainers/:id" element={<TrainerById />} />
        <Route path="/programs/:id" element={<ProgramsById />} />
      </Route>
    </Routes>
  );
}
