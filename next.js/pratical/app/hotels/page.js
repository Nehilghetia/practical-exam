import Link from "next/link";

export default function HotelsPage() {
  const hotels = [
    { id: 1, name: "Hotel Paradise", location: "Mumbai", price: 3500 },
    { id: 2, name: "Ocean View Resort", location: "Goa", price: 5000 },
    { id: 3, name: "Mountain Retreat", location: "Manali", price: 4000 },
    { id: 4, name: "City Comfort Inn", location: "Delhi", price: 3500 },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>🏨 Hotel Listings</h1>
      <ul>
        {hotels.map((hotel) => (
          <li key={hotel.id}>
            <Link href={`/hotels/${hotel.id}`}>
              {hotel.name} – {hotel.location} – ₹{hotel.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
