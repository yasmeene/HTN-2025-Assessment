import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import KurzBackground from "../components/KurtzBackground";
import { CalendarIcon, MapPinIcon, ArrowLeftIcon } from "lucide-react";
import "./EventDetails.css";

export default function EventDetailPage() {
  const { id } = useParams(); // Get event ID from URL parameters
  const navigate = useNavigate(); // Navigation function
  const [event, setEvent] = useState(null); // Store event data
  const [isLoading, setIsLoading] = useState(true); // Loading state

  // Fetch data
  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(
          `https://api.hackthenorth.com/v3/events/${id}`
        );
        setEvent(response.data);
      } catch (error) {
        console.error("Error fetching event:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchEvent();
  }, [id]); // Re-run effect when ID changes

  if (isLoading) return <div className="text-cyan-400 text-center p-8">Loading...</div>;
  
  if (!event) return <div className="text-rose-500 text-center p-8">Event not found</div>;

  return (
    <div className="event-details-container">
      <KurzBackground /> {/* Animated space background component */}
      
      <div className="event-details-content">
        {/* Navigation back button */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center text-amber-400 hover:text-orange-400 mb-8"
        >
          <ArrowLeftIcon className="w-5 h-5 mr-2" />
          Back to Events
        </button>

        {/* Event details card */}
        <div className="event-details-card">
          {/* Event Title */}
          <h1>{event.name}</h1>

          {/* Event date and time */}
          <div className="icon-text">
            <CalendarIcon className="w-6 h-6" />
            <p>
              {new Date(event.start_time).toLocaleString()} -{" "}
              {new Date(event.end_time).toLocaleString()}
            </p>
          </div>

          {/* Event type */}
          <div className="icon-text">
            <MapPinIcon className="w-6 h-6" />
            <p>{event.event_type.replace(/_/g, " ")}</p>
          </div>

          {/* Event description */}
          <h2 className="text-2xl font-bold mb-4 text-rose-400">Event Details</h2>
          <p>{event.description}</p>

          {/* Registration button (Currently placeholder) */}
          <button>Register Now</button>
        </div>
      </div>
    </div>
  );
}