import { useState, useRef } from "react";

import { MdSearch } from "react-icons/md";

const SearchBox = () => {
    const [searchText, setSearchText] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClear = () => {
        setSearchText("");
    };

    const handleDivClick = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <div
            className="relative flex w-64 cursor-text items-center justify-center rounded-full bg-gray-200 px-4 py-2"
            onClick={handleDivClick}
        >
            <div className="mr-2">
                <MdSearch />
            </div>
            <input
                ref={inputRef}
                className="w-full flex-grow bg-transparent outline-none"
                placeholder="検索"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />

            {searchText && (
                <button
                    className="absolute right-4 flex h-4 w-4 items-center justify-center rounded-full bg-gray-400 text-white hover:cursor-pointer"
                    onClick={handleClear}
                >
                    {/* TODO: バツ印を特殊文字で表現しているが、若干ズレが発生したりするためいつか修正する。 */}
                    &times;
                </button>
            )}
        </div>
    );
};

export default SearchBox;
