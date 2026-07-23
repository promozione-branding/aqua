export default function Loading() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center gap-4 p-6">
      <div className="relative flex items-center justify-center">
        <div className="w-14 h-14 rounded-full border-4 border-blue-200 animate-spin border-t-blue-900" />
      </div>
      <p className="text-sm font-bold text-blue-955 tracking-wider uppercase animate-pulse">
        Loading Products...
      </p>
    </div>
  );
}
