import { Routes, Route } from "react-router";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { DataPatientPage } from "./pages/DataPatientPage";
import { BookingPage } from "./pages/BookingPage";
import { AddPatient } from "./pages/AddPatient";
import { EditPatient } from "./pages/EditPatient";
import { ConsultPage } from "./pages/ConsultPage";
import { AddConsult } from "./pages/AddConsult";
import { EditConsult } from "./pages/EditConsult";

export function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/consult" element={<ConsultPage />} />
        <Route path="/add/consult" element={<AddConsult />} />
        <Route path="/edit/consult/:id" element={<EditConsult />} />
        <Route path="/patient" element={<DataPatientPage />} />
        <Route path="/add/patient" element={<AddPatient />} />
        <Route path="/edit/patient/:id" element={<EditPatient />} />
      </Routes>
    </div>
  );
}
