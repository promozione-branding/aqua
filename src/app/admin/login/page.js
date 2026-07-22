"use client";
import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPass, setShowPass] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    const handleLogin = (e) => {
        e.preventDefault();
        
        // Validate credentials
        if (email === "admin@aqua.com" && password === "aqua@1234") {
            // Set the cookie for authentication
            document.cookie = "admin-token=secret123; path=/";
            router.push("/admin/dashboard");
        } else {
            setError("Invalid credentials!");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 text-black">
            <div className="w-full max-w-md bg-white border border-gray-200 shadow-xl rounded-2xl p-8">
                <div className="flex flex-col items-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-800">Admin Portal</h1>
                    <p className="text-sm text-gray-500 mt-1">Login to access dashboard</p>
                </div>

                {error && (
                    <div className="mb-4 text-center text-sm bg-red-100 text-red-700 py-2 rounded-lg">
                        {error}
                    </div>
                )}

                <form onSubmit={handleLogin} className="space-y-4">
                    <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="email"
                            placeholder="Admin Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                        />
                    </div>

                    <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type={showPass ? "text" : "password"}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full pl-12 pr-12 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                        />
                        <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700">
                            {showPass ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>

                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-xl font-semibold shadow-lg">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
