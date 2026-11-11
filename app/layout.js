import "./globals.css";

export const metadata = {
  title: "Atul's Mukta Driving Instructor",
  description:
    "Learn to drive with confidence. Personalized driving lessons for beginners, refresher training and RTO test preparation with a patient, certified instructor.",
};

export const viewport = {
  themeColor: "#fafaf9",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
