export async function GET(request, { params }) {
  const bookingId = parseInt(params.bookingId);
  const booking = bookings.find((b) => b.id === bookingId);

  if (!booking) return Response.json({ error: "Booking not found" }, { status: 404 });
  return Response.json(booking);
}

export async function DELETE(request, { params }) {
  const bookingId = parseInt(params.bookingId);
  const index = bookings.findIndex((b) => b.id === bookingId);

  if (index === -1) return Response.json({ error: "Booking not found" }, { status: 404 });

  bookings.splice(index, 1);
  return Response.json({ message: "❌ Booking canceled successfully!" });
}
