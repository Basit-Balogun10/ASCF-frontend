import React, { useState } from "react";
import Link from "next/link";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { IoCalendarOutline } from "react-icons/io5";
import { FaSort, FaFilter } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";
import { capitalizeString } from "../utils";

interface sortOptionsType {
    id: string;
    optionName: string;
}

const sortOptions: sortOptionsType[] = [
    {
        id: "1",
        optionName: "title",
    },
    {
        id: "2",
        optionName: "date",
    },
    {
        id: "3",
        optionName: "likes",
    },
    {
        id: "4",
        optionName: "reads",
    },
];

const SortOrFilter = () => {
    const [activeMenu, setActiveMenu] = useState<"sort" | "filter" | null>(
        null
    );
    const [activeFilter, setActiveFilter] = useState<string>("all");
    const [activeSortOption, setActiveSortOption] = useState<string>("title");

    const handleSort = (sortOption: string) => {
        setActiveMenu(null);
        setActiveSortOption(sortOption.toLowerCase());
    };

    const handleFilter = (filter: string) => {
        setActiveMenu(null);
        setActiveFilter(filter.toLowerCase());
    };

    return (
        <div
            data-aos="fade-left"
            data-aos-duration="1500"
            className="flex items-center space-x-4"
        >
            {activeMenu === "sort" && (
                <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    className="flex-auto flex items-center justify-center md:justify-end space-x-2"
                >
                    <div className="flex items-center border-ourBlack dark:border-gray-200 rounded-md">
                        {["Title", "Date", "Likes", "Reads"].map(
                            (sortOption, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleSort(sortOption)}
                                    className={`w-20 md:w-16 py-4 text-sm md:text-xs text-center cursor-pointer ${
                                        activeSortOption ===
                                        sortOption.toLowerCase()
                                            ? "bg-ourRed !border !border-ourRed"
                                            : "bg-gray-200 dark:bg-ourBlack"
                                    } ${
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
                                    {sortOption}
                                </div>
                            )
                        )}
                    </div>
                </div>
            )}
            {activeMenu === "filter" && (
                <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    className="flex-auto flex items-center justify-center md:justify-end space-x-2"
                >
                    <div className="flex items-center border-ourBlack dark:border-gray-200 rounded-md">
                        {["Past", "Ongoing", "Future", "All"].map(
                            (filter, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleFilter(filter)}
                                    className={`w-20 md:w-16 py-4 text-sm md:text-xs text-center cursor-pointer ${
                                        activeFilter === filter.toLowerCase()
                                            ? "bg-ourRed !border !border-ourRed"
                                            : "bg-gray-200 dark:bg-ourBlack"
                                    } ${
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
                                    {filter}
                                </div>
                            )
                        )}
                    </div>
                </div>
            )}
            {activeMenu === null && (
                <>
                    <button
                        onClick={() => {
                            setActiveMenu("sort");
                        }}
                        className="p-2 flex items-center space-x-2 bg-white dark:bg-ourBlack text-ourBlack dark:text-gray-200 rounded"
                    >
                        <p className="text-sm">SORT</p>
                        <FaSort className="w-4 h-4" />
                        {/* {activeMenu == "sort" ? (
                        <MdKeyboardArrowUp className="absolute w-4 h-4 top-3 right-2" />
                    ) : (
                        <MdKeyboardArrowDown className="absolute w-4 h-4 top-3 right-2" />
                    )} */}
                    </button>
                    <button
                        onClick={() => {
                            setActiveMenu("filter");
                        }}
                        className="p-2 flex items-center space-x-2 bg-white dark:bg-ourBlack text-ourBlack dark:text-gray-200 rounded"
                    >
                        <p className="text-sm">FILTER</p>
                        <FiFilter className="w-4 h-4" />
                    </button>
                    {/* <FiFilter className="p-2 w-12 h-10 bg-white dark:bg-ourBlack rounded" /> */}
                </>
            )}
        </div>
    );
};

export default SortOrFilter;
