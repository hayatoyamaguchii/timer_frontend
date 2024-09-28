import { Link } from "react-router-dom";

import { default as SearchBox } from "./searchbox";
import { default as Navigation } from "./navigation";

const Header = () => {
    return (
        <header className="border-b">
            <div className="">
                <div className="mx-auto flex max-w-screen-lg justify-between p-5">
                    <h1 className="text-4xl font-bold text-indigo-600">
                        <Link to="/home">timer</Link>
                    </h1>
                    <SearchBox />
                </div>
            </div>
            <div className="">
                <Navigation />
            </div>
        </header>
    );
};

export default Header;
