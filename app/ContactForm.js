"use client";

import { useState } from "react";
import { Icon, ICONS } from "./icons";

const SERVICES = ["Beginner lessons", "RTO test preparation", "Refresher training"];
const TIMES = ["Morning", "Afternoon", "Evening"];

function formatDate(iso) {
  if (!iso) return "";
  const d = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function ContactForm({ whatsapp }) {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [startDate, setStartDate] = useState("");
  const [time, setTime] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const message = [
      "Hi Atul! I want to book a driving lesson.",
      "",
      `Name: ${name.trim()}`,
      `Lesson: ${service}`,
      startDate ? `Start date: ${formatDate(startDate)}` : null,
      time ? `Preferred time: ${time}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const url = `${whatsapp}?text=${encodeURIComponent(message)}`;
    const win = window.open(url, "_blank", "noopener");
    if (!win) window.location.href = url; // fallback if popups are blocked
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
        autoComplete="name"
        required
      />
      <select
        value={service}
        onChange={(e) => setService(e.target.value)}
        required
      >
        <option value="" disabled>
          What do you want to learn?
        </option>
        {SERVICES.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>
      <input
        type="date"
        value={startDate}
        min={new Date().toLocaleDateString("en-CA")} // today, so no past dates
        onChange={(e) => setStartDate(e.target.value)}
        aria-label="When do you want to start learning?"
      />
      <select value={time} onChange={(e) => setTime(e.target.value)}>
        <option value="">Anytime works for me</option>
        {TIMES.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>
      <button type="submit" className="btn btn-wa">
        <Icon path={ICONS.whatsapp} size={18} />
        Send on WhatsApp
      </button>
      <p className="form-note">
        Opens WhatsApp with your details pre-filled — just press send.
      </p>
    </form>
  );
}
