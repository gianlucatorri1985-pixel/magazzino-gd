"use client";

import AppShell from "@/components/AppShell";

export default function Home() {
  return (
    <AppShell>
      <div className="p-10 text-white">
        <h2 className="text-3xl font-bold mb-8">Dashboard Magazzino</h2>

        <div className="grid grid-cols-3 gap-6">
          <div className="bg-zinc-900 p-6 rounded-xl border border-red-700">
            <h3 className="text-lg">Bobine Totali</h3>
            <p className="text-3xl font-bold mt-2">0</p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl border border-red-700">
            <h3 className="text-lg">Colori Disponibili</h3>
            <p className="text-3xl font-bold mt-2">0</p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl border border-red-700">
            <h3 className="text-lg">Materiali</h3>
            <p className="text-3xl font-bold mt-2">PLA / PETG / ABS</p>
          </div>
        </div>

        <button className="mt-10 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold">
          + Nuovo Filamento
        </button>
      </div>
    </AppShell>
  );
}

