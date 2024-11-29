import { NavLink } from "react-router-dom";

import {
    MdHome,
    MdMessage,
    MdPerson,
    MdSettings,
    MdEvent,
} from "react-icons/md";

const Navigation = () => {
    var navList = [];
    var navData = [
        { path: "/home", icon: <MdHome />, text: "ホーム" },
        { path: "/record", icon: <MdEvent />, text: "記録" },
        { path: "/message", icon: <MdMessage />, text: "メッセージ" },
        { path: "/profile", icon: <MdPerson />, text: "プロフィール" },
        { path: "/settings", icon: <MdSettings />, text: "設定" },
    ];

    for (var i in navData) {
        navList.push(
            <li key={i}>
                <NavLink to={navData[i].path} className="group">
                    <div className="m-2 rounded-full group-hover:bg-gray-200">
                        <div className="mx-4 flex h-10 items-center">
                            <span className="text-xl">{navData[i].icon}</span>
                            <span className="ml-2 text-xl">
                                {navData[i].text}
                            </span>
                        </div>
                    </div>
                </NavLink>
            </li>,
        );
    }

    return (
        <nav className="mx-auto max-w-screen-lg pb-2">
            <ul className="flex">{navList}</ul>
        </nav>
    );
};

export default Navigation;
