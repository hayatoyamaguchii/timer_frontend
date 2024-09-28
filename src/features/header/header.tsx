import { Link, NavLink} from 'react-router-dom';

const Header = () => {

    // navigationのボタンをforで作る。
    var navList = [];
    var navData = [
        {path: "/home", text: "ホーム"},
        {path: "/achievement", text: "実績"},
        {path: "/message", text: "メッセージ"},
        {path: "/profile", text: "プロフィール"},
        {path: "/settings", text: "設定"},
    ];
    for(var i in navData){
        navList.push(
            <li>
                <NavLink to={navData[i].path} className="group">
                    <div className="m-2 rounded-full group-hover:bg-gray-200">
                        <div className="mx-4 text-sm">
                            {navData[i].text}
                        </div>
                    </div>
                </NavLink>
            </li>
        );
    }

    return (
    <header className="">
        <div className="">
            <div className="px-10 flex justify-between">
                <h1 className="font-bold text-indigo-600">
                    <Link to="/home">
                        timer
                    </Link>
                </h1>
                <div className="mx-6">
                    search
                </div>
            </div>
            <nav className="pl-4 pr-10">
                <ul className="flex justify-between">
                    {navList}
                </ul>
            </nav>
        </div>
    </header>
    );
};

export default Header;