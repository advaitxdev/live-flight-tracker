import React from "react";
import Globe3D from "./components/ui/3d-globe";

function App() {
  return (
    <main className="relative flex flex-col items-center justify-between min-h-screen w-full bg-gray-900 text-white overflow-hidden">
      {/* Top Header Overlay */}
      <header className="z-10 pt-8 pb-4 text-center">
        <h1 className="font-extrabold text-4xl md:text-5xl tracking-tight text-white drop-shadow-md">
          Live Flight Tracker
        </h1>
        <p className="text-sm md:text-base text-slate-400 mt-2">
          Real-time global flight radar & coordinate visualization
        </p>
      </header>

      {/* 3D Globe Container */}
      <div className="relative w-full h-[70vh] md:h-[78vh] flex items-center justify-center">
        <Globe3D className="w-full h-full" />
      </div>

      {/* Footer / Status Bar */}
      <footer className="z-10 pb-4 text-xs text-slate-500">
        Made with ❤️ by @advaitxdev
      </footer>
    </main>
  );
}

export default App;