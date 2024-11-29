import { Link } from "react-router-dom";

import { Navigation, SearchBox, Logout } from "./";

const Header = () => {
    return (
        <header className="border-b">
            <div className="">
                <div className="mx-auto flex max-w-screen-lg justify-between p-5">
                    <h1 className="text-4xl font-bold text-indigo-600">
                        <Link to="/home">timer</Link>
                    </h1>
                    <div className="flex items-center space-x-4">
                        <SearchBox />
                        <Logout />
                    </div>
                </div>
            </div>
            <div className="">
                <Navigation />
            </div>
        </header>
    );
};

export default Header;
