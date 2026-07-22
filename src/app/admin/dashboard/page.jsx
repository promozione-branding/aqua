import Sidebar from "../Sidebar";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      
      <main className="flex-1 p-8 text-black">
        <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
        <p className="text-gray-600">Welcome to the aqua administration dashboard.</p>
      </main>
    </div>
  );
}

