// app/layout.js
import "./globals.css";

export const metadata = {
  title: "Online Hotel Order System",
  description: "Hotel booking app using Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}
