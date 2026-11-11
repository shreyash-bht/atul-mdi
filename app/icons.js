// ---------- Shared inline icons ----------

export function Icon({ path, size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  );
}

export const ICONS = {
  car: "M5 17h14M6.5 17a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm13 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM4 16v-4.5c0-.6.2-1.2.6-1.7L6 8c.5-.7 1.3-1 2.1-1h7.8c.8 0 1.6.3 2.1 1l1.4 1.8c.4.5.6 1.1.6 1.7V16M7 11h10",
  wheel:
    "M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18Zm0 0v-7m-8.6-2h17.2M12 14l-5.5 3.5M12 14l5.5 3.5",
  badge: "M12 3 4 6v6c0 5 3.4 8.4 8 9 4.6-.6 8-4 8-9V6l-8-3Zm-3 9 2 2 4-4",
  clock:
    "M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18Zm0-13v5l3 2",
  pin: "M12 21s-7-5.6-7-11a7 7 0 0 1 14 0c0 5.4-7 11-7 11Zm0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
  phone:
    "M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z",
  whatsapp:
    "M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3Zm-3 5.5c.3 2.5 3.9 6.1 6.4 6.4l1.1-1.1c.2-.2.5-.3.8-.2l2 .9v1.3c0 .7-.6 1.2-1.2 1.2C13.5 17 7 10.5 7 5.9c0-.7.5-1.2 1.2-1.2h1.3l.9 2c.1.3 0 .6-.2.8L9 9.5Z",
  check: "M4 12.5 9 17.5 20 6.5",
  send: "m4 12 16-8-5 16-3.5-6L4 12Z",
};
