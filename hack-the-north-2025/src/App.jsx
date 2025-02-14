import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventList from "./components/EventList";
import EventDetailPage from "./pages/EventDetails";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EventList />} />
        <Route path="/events/:id" element={<EventDetailPage />} />
      </Routes>
    </Router>
  );
}