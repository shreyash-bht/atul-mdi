"use client";

import { useEffect, useState } from "react";

// One light is active at a time, ~3.5s each, in real-world order:
// Go (green) -> Check (yellow) -> Stop (red) -> repeat
const STEP_MS = 3500;
const STEPS = [
  { color: "green", label: "Go" },
  { color: "yellow", label: "Check" },
  { color: "red", label: "Stop" },
];

export default function TrafficLight() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setStep((s) => (s + 1) % STEPS.length);
    }, STEP_MS);
    return () => clearInterval(id);
  }, []);

  const active = STEPS[step].color;

  return (
    <div className="traffic-light" aria-hidden="true">
      <span className={`tl-bulb green${active === "green" ? " on" : ""}`} />
      <span className={`tl-bulb yellow${active === "yellow" ? " on" : ""}`} />
      <span className={`tl-bulb red${active === "red" ? " on" : ""}`} />
      <span className="tl-text">{STEPS[step].label}</span>
    </div>
  );
}
