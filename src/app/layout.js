import "./globals.css";

export const metadata = {
  title: "My Portfolio",
  description: "Portfolio project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
