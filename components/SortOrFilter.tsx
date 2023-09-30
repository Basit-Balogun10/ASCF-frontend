import React, { Dispatch, SetStateAction, useState } from "react";
import { BiSortAlt2 } from "react-icons/bi";
import { FaSort, FaFilter } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";
import { capitalizeString } from "../utils";

interface PropsType {
    menuIsActive: boolean;
    setMenuIsActive: Dispatch<SetStateAction<boolean>>;
}

interface Options {
    id: string;
    name: string;
}

type Menu = "sort" | "filter";

const sortOptions: Options[] = [
    {
        id: "title_1",
        name: "Title",
    },
    {
        id: "date_2",
        name: "Date",
    },
    {
        id: "likes_3",
        name: "Likes",
    },
    {
        id: "reads_4",
        name: "Reads",
    },
];

const filterOptions: Options[] = [
    {
        id: "past_1",
        name: "Past",
    },
    {
        id: "ongoing_2",
        name: "Ongoing",
    },
    {
        id: "future_3",
        name: "Future",
    },
    {
        id: "all_4",
        name: "All",
    },
];

const SortOrFilter = ({ menuIsActive, setMenuIsActive }: PropsType) => {
    const [activeMenu, setActiveMenu] = useState<"sort" | "filter" | null>(
        null
    );
    const [activeFilter, setActiveFilter] = useState<string>("all");
    const [activeSortOption, setActiveSortOption] = useState<string>("title");
    const [menuStateChanged, setMenuStateChanged] = useState(false);

    const handleSort = (sortOption: string) => {
        setActiveMenu(null);
        setActiveSortOption(sortOption.toLowerCase());
        setMenuIsActive(false);
    };

    const handleFilter = (filter: string) => {
        setActiveMenu(null);
        setActiveFilter(filter.toLowerCase());
        setMenuIsActive(false);
    };

    const activateMenu = (menuType: Menu) => {
        setMenuIsActive(true);
        setActiveMenu(menuType);
    };

    return (
        <div
            data-aos="fade-left"
            data-aos-duration="1500"
            className="flex items-center space-x-4"
        >
            {activeMenu === "sort" && menuIsActive && (
                <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    className="flex-auto flex items-center justify-center md:justify-end space-x-2"
                >
                    <div className="flex items-center border-ourBlack dark:border-gray-200 rounded-md">
                        {sortOptions.map((sortOption, index) => (
                            <div
                                key={index}
                                onClick={() => handleSort(sortOption.name)}
                                className={`w-20 md:w-16 py-4 text-sm md:text-xs text-center bg-gray-200 dark:bg-ourBlack hover:bg-ourRed dark:hover:bg-ourRed cursor-pointer transition-colors ease-in-out duration-500 ${
                                    index != sortOptions.length - 1
                                        ? "border-r border-gray-300 dark:border-gray-200/30"
                                        : ""
                                } ${
                                    index == 0
                                        ? "rounded-tl-md rounded-bl-md"
                                        : ""
                                } ${
                                    index == sortOptions.length - 1
                                        ? "rounded-tr-md rounded-br-md"
                                        : ""
                                }`}
                            >
                                {sortOption.name}
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {activeMenu === "filter" && menuIsActive && (
                <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    className="flex-auto flex items-center justify-center md:justify-end space-x-2"
                >
                    <div className="flex items-center border-ourBlack dark:border-gray-200 rounded-md">
                        {filterOptions.map((filter, index) => (
                            <div
                                key={index}
                                onClick={() => handleFilter(filter.name)}
                                className={`w-20 md:w-16 py-4 text-sm md:text-xs text-center bg-gray-200 dark:bg-ourBlack hover:bg-ourRed dark:hover:bg-ourRed cursor-pointer transition-colors ease-in-out
                                      ${
                                          index != 3
                                              ? "border-r dark:border-gray-200/30"
                                              : ""
                                      } ${
                                    index == 0
                                        ? "rounded-tl-md rounded-bl-md"
                                        : ""
                                } ${
                                    index == 3
                                        ? "rounded-tr-md rounded-br-md"
                                        : ""
                                }`}
                            >
                                {filter.name}
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {(activeMenu === null || !menuIsActive) && (
                <div
                    className="flex items-center space-x-4"
                    data-aos="fade-left"
                    data-aos-duration="1500"
                >
                    <button
                        onClick={() => {
                            activateMenu("sort");
                        }}
                        className="px-4 py-2 flex items-center space-x-2 bg-white dark:bg-ourBlack text-ourBlack dark:text-gray-200 rounded-md hover:scale-[1.05] transition-transform ease-in-out"
                    >
                        <p className="text-sm">Sort</p>
                        <BiSortAlt2 className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => {
                            activateMenu("filter");
                        }}
                        className="px-4 py-2 flex items-center space-x-2 bg-white dark:bg-ourBlack text-ourBlack dark:text-gray-200 rounded-md hover:scale-[1.05] transition-transform ease-in-out"
                    >
                        <p className="text-sm">Filter</p>
                        <FiFilter className="w-5 h-5" />
                    </button>
                </div>
            )}
        </div>
    );
};

export default SortOrFilter;
