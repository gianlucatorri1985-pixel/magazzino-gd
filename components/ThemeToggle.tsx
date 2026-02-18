"use client";

import { useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="px-3 py-1 rounded bg-red-600 text-white"
    >
      {dark ? "Dark" : "Light"}
    </button>
  );
}

