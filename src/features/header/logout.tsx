const Logout = () => {
    const handleLogout = () => {
        localStorage.removeItem("token");

        window.location.href = "/login";
    };

    return (
        <button
            onClick={handleLogout}
            className="m-2 rounded-full hover:bg-gray-200"
        >
            <span className="text-l m-3">ログアウト</span>
        </button>
    );
};

export default Logout;
