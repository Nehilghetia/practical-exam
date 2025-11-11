"use client"; // Client component for booking actions

import { useParams } from "next/navigation";
import { useState } from "react";

export default function HotelDetails() {
  const { hotelId } = useParams();
  const id = parseInt(hotelId);
  const [message, setMessage] = useState("");

  const hotels = [
    { id: 1, name: "Hotel Paradise", location: "Mumbai", price: 3500 },
    { id: 2, name: "Ocean View Resort", location: "Goa", price: 5000 },
    { id: 3, name: "Mountain Retreat", location: "Manali", price: 4000 },
    { id: 4, name: "City Comfort Inn", location: "Delhi", price: 3500 },
  ];

  const hotel = hotels.find((h) => h.id === id);

  if (!hotel) return <h2>❌ Hotel not found.</h2>;

  // 🧾 Book hotel
  const handleBooking = async () => {
    const res = await fetch("/api/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        hotelId: hotel.id,
        name: hotel.name,
        location: hotel.location,
        price: hotel.price,
      }),
    });
    const data = await res.json();
    setMessage(`✅ Booking created! ID: ${data.id}`);
  };

  // ❌ Cancel hotel booking (simulate with booking ID)
  const handleCancel = async () => {
    const bookingId = prompt("Enter booking ID to cancel:");
    if (!bookingId) return;
    const res = await fetch(`/api/booking/${bookingId}`, { method: "DELETE" });
    const data = await res.json();
    setMessage(data.message || "Booking canceled!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>{hotel.name}</h1>
      <p><b>Location:</b> {hotel.location}</p>
      <p><b>Price per night:</b> ₹{hotel.price}</p>

      <button
        onClick={handleBooking}
        style={{ marginRight: "10px", padding: "6px 12px", cursor: "pointer" }}
      >
        Book Now
      </button>

      <button
        onClick={handleCancel}
        style={{ padding: "6px 12px", cursor: "pointer", background: "red", color: "white" }}
      >
        Cancel Booking
      </button>

      {message && <p style={{ marginTop: "15px" }}>{message}</p>}
    </div>
  );
}
