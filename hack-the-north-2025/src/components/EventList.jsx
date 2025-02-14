import { useEffect, useState } from "react";
import axios from "axios";
import EventCard from "./EventCard";
import KurzBackground from "./KurtzBackground";
import Login from "../context/Login";
import "../context/Login.css";
import "./EventList.css";

export default function EventList() {
  // State Management
  const [events, setEvents] = useState([]); // Stores all events
  const [filteredEvents, setFilteredEvents] = useState([]); // Stores filtered events
  const [searchQuery, setSearchQuery] = useState(""); // Stores search query
  const [eventType, setEventType] = useState("all"); // Stores selected event type filter
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Authentication state
  const [showLogin, setShowLogin] = useState(false); // Controls login modal visibility

  // Fetch Events from API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("https://api.hackthenorth.com/v3/events");
        const sortedEvents = response.data.sort((a, b) => a.start_time - b.start_time); // Sort events by start time
        setEvents(sortedEvents);
        setFilteredEvents(sortedEvents);
      } catch (error) {
        setError("Failed to fetch events. Please try again later."); // Set error message
      } finally {
        setIsLoading(false); // End loading state
      }
    };

    fetchEvents();
  }, []);

  // Filter events based on search query, event type, and login status
  useEffect(() => {
    let filtered = events.filter((event) =>
      event.name.toLowerCase().includes(searchQuery.toLowerCase()) // Filter by search query
    );

    if (eventType !== "all") {
      filtered = filtered.filter((event) => event.event_type === eventType); // Filter by event type
    }

    if (!isLoggedIn) {
      filtered = filtered.filter((event) => event.permission === "public"); // Filter out private events if not logged in
    }

    setFilteredEvents(filtered); // Update filtered events
  }, [searchQuery, eventType, events, isLoggedIn]);

  if (isLoading) return <div className="text-cyan-400 text-center p-8">Loading...</div>;
  if (error) return <div className="text-red-500 text-center p-8">{error}</div>;

  return (
    <div className="event-list-container">
      <KurzBackground />

      <div className="relative z-10 p-6">
        {/* Login to view private events button */}
        {!isLoggedIn && (
          <button
            onClick={() => setShowLogin(true)}
            className="login-button"
          >
            Login
          </button>
        )}

        <h1 className="text-4xl font-bold text-center mb-8 text-amber-400">Events</h1>

        {/* Search and filter options */}
        <div className="filter-search-container">
          <input
            type="text"
            placeholder="Search events..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="filter-search-input"
          />
          <select
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
            className="filter-search-select"
          >
            <option value="all">All</option>
            <option value="workshop">Workshop</option>
            <option value="activity">Activity</option>
            <option value="tech_talk">Tech Talk</option>
          </select>
        </div>

        {/* Event cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>

      {showLogin && (
        <Login
          onLogin={() => {
            setIsLoggedIn(true); // Set logged-in state
            setShowLogin(false); // Hide login modal
          }}
          onClose={() => setShowLogin(false)} // Close login modal
        />
      )}
    </div>
  );
}