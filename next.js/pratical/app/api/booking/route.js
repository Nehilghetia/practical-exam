let bookings = []; // temporary in-memory list

// ✅ GET: List all bookings
export async function GET() {
  return Response.json(bookings);
}

// ✅ POST: Create a new booking
export async function POST(request) {
  const data = await request.json();
  const newBooking = {
    id: Date.now(),
    ...data,
    date: new Date().toISOString(),
  };
  bookings.push(newBooking);
  return Response.json(newBooking);
}
