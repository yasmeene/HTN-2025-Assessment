import { CalendarIcon, MapPinIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./EventCard.css";

export default function EventCard({ event }) {
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  // Handle "Learn More" button click
  const handleLearnMore = () => {
    navigate(`/events/${event.id}`); // Navigate to the event details page
  };

  return (
    <div className="event-card">
      <div className="event-card-content">
        <div className="event-card-decor-top"></div> {/* Top decorative circle */}
        <div className="event-card-decor-bottom"></div> {/* Bottom decorative circle */}

        {/* Event Title */}
        <h2 className="event-card-title">{event.name}</h2>

        {/* Event Date */}
        <div className="event-card-meta">
          <CalendarIcon className="w-5 h-5" /> {/* Calendar icon */}
          <p>{new Date(event.start_time).toLocaleDateString()}</p> {/* Formatted date */}
        </div>

        {/* Event Type */}
        <div className="event-card-meta">
          <MapPinIcon className="w-5 h-5" /> {/* Map pin icon */}
          <p>{event.event_type.replace(/_/g, " ")}</p> {/* Event type with underscores replaced by spaces */}
        </div>

        {/* Event Description */}
        <p className="event-card-description">{event.description}</p>

        {/* Learn More Button */}
        <button className="event-card-button" onClick={handleLearnMore}>
          Learn More
        </button>
      </div>
    </div>
  );
}