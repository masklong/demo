import { cn } from "@/lib/utils";

const BigScreen = () => {
  return (
    <div
      className={cn("min-h-screen bg-slate-950 text-white p-8 flex flex-col")}
    >
      <header className="mb-8 border-b border-white/10 pb-4">
        <h1 className="text-4xl font-bold tracking-tight">
          Large Screen Dashboard
        </h1>
        <p className="text-slate-400 mt-2">Data visualization and monitoring</p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
        <div className="bg-slate-900 border border-white/10 rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Metric 1</h2>
          <div className="h-40 bg-slate-800/50 rounded flex items-center justify-center">
            Placeholder Chart
          </div>
        </div>
        <div className="bg-slate-900 border border-white/10 rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Metric 2</h2>
          <div className="h-40 bg-slate-800/50 rounded flex items-center justify-center">
            Placeholder Chart
          </div>
        </div>
        <div className="bg-slate-900 border border-white/10 rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Metric 3</h2>
          <div className="h-40 bg-slate-800/50 rounded flex items-center justify-center">
            Placeholder Chart
          </div>
        </div>
        <div className="bg-slate-900 border border-white/10 rounded-xl p-6 shadow-sm md:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Main Chart</h2>
          <div className="h-64 bg-slate-800/50 rounded flex items-center justify-center">
            Placeholder Big Chart
          </div>
        </div>
        <div className="bg-slate-900 border border-white/10 rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Status</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>System A</span>
              <span className="text-green-400">Online</span>
            </div>
            <div className="flex justify-between items-center">
              <span>System B</span>
              <span className="text-yellow-400">Maintenance</span>
            </div>
            <div className="flex justify-between items-center">
              <span>System C</span>
              <span className="text-green-400">Online</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BigScreen;
