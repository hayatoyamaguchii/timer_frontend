import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();

        const userData = {
            name,
            email,
            password,
        };

        try {
            const response = await fetch("http://localhost:8000/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage("登録が完了しました！");
                navigate("/login");
            } else {
                setMessage(`登録に失敗しました: ${data.error}`);
            }
        } catch (error) {
            setMessage("登録に失敗しました。");
            console.log(error);
        }
    };

    return (
        <div className="mx-auto mt-10 max-w-md rounded-lg bg-white p-6 shadow-lg">
            <h1 className="mb-6 text-center text-2xl font-bold text-indigo-600">
                新規登録
            </h1>
            <form onSubmit={handleRegister} className="space-y-4">
                <div className="flex flex-col">
                    <label
                        htmlFor="name"
                        className="text-lg font-semibold text-gray-700"
                    >
                        ユーザー名
                    </label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="mt-2 rounded-lg border px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                <div className="flex flex-col">
                    <label
                        htmlFor="email"
                        className="text-lg font-semibold text-gray-700"
                    >
                        メールアドレス
                    </label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="mt-2 rounded-lg border px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                <div className="flex flex-col">
                    <label
                        htmlFor="password"
                        className="text-lg font-semibold text-gray-700"
                    >
                        パスワード
                    </label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="mt-2 rounded-lg border px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                <button
                    type="submit"
                    className="mt-4 w-full rounded-lg bg-indigo-500 py-2 font-semibold text-white shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    登録
                </button>
            </form>

            {message && (
                <p className="mt-4 text-center text-red-600">{message}</p>
            )}

            <div className="mt-6 text-center">
                <Link to="/login" className="text-sm hover:text-indigo-500">
                    ログインはこちら
                </Link>
            </div>
        </div>
    );
};

export default Register;
