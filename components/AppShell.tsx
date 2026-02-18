import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <header className="sticky top-0 z-10 border-b border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/60 backdrop-blur">
        <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Mettiamo il logo qui dopo (per ora placeholder) */}
            <div className="h-10 w-10 rounded-2xl bg-red-600/90 flex items-center justify-center font-black">
              GD
            </div>

            <div className="leading-tight">
              <div className="font-extrabold tracking-tight">
                Magazzino Filamenti
              </div>
              <div className="text-xs opacity-70">
                Carpenteria G&amp;D · Torri Gianluca
              </div>
            </div>
          </div>

          <ThemeToggle />
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>

      <footer className="mx-auto max-w-5xl px-4 pb-10 text-xs opacity-60">
        Powered by OneShot_85
      </footer>
    </div>
  );
}
