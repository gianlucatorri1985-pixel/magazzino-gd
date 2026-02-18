import AppShell from "@/components/AppShell";

function Card({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 p-6 shadow-sm">
      <div className="text-lg font-bold">{title}</div>
      <div className="mt-2 text-sm opacity-75">{desc}</div>
      <button className="mt-5 rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">
        Apri
      </button>
    </div>
  );
}

export default function Home() {
  return (
    <AppShell>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card
          title="Scelta Guidata"
          desc="Trova il filamento giusto in base a materiale, colore e uso."
        />
        <Card
          title="Magazzino"
          desc="Lista bobine, quantità, posizioni, note e stato."
        />
        <Card
          title="Acquisti"
          desc="Lista acquisti e storico: cosa serve, quando ordinare, fornitori."
        />
      </div>
    </AppShell>
  );
}
