import Navlink from "./Navlink";
const Navbar = () => {
    return (
        <header>
            <input type="checkbox" name="hbr" id="hbr" className="hbr peer" hidden aria-hidden="true" />
            <nav className="fixed z-20 w-full navbar peer-checked:navbar-active md:absolute md:top-0 md:left-0 ">
                <div className="xl:max-w-7xl m-auto px-6 md:px-12">
                    <div className="flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0">
                        <div className="w-full flex justify-between lg:w-auto">
                            <a href="#" aria-label="logo" className="flex space-x-2 items-center">
                                <div aria-hidden="true" className="flex space-x-1">
                                    <div className="h-4 w-4 rounded-full bg-gray-200"></div>
                                    <div className="h-6 w-2 bg-primary dark:bg-primaryLight"></div>
                                </div>
                                <span className="text-base font-bold text-white">Hesewake</span>
                            </a>
                            <label
                                htmlFor="hbr"
                                className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden"
                            >
                                <div
                                    aria-hidden="true"
                                    className="m-auto h-0.5 w-6 rounded bg-gray-300 transition duration-300"
                                ></div>
                                <div
                                    aria-hidden="true"
                                    className="m-auto mt-2 h-0.5 w-6 rounded bg-gray-300 transition duration-300"
                                ></div>
                            </label>
                        </div>
                        <div className="navmenu hidden w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 r lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 ">
                            <div className="text-gray-300 lg:pr-4">
                                <ul className="space-y-6 tracking-wide font-medium text-base lg:text-sm lg:flex lg:space-y-0">
                                    <li>
                                        <Navlink href="#hero">Home</Navlink>
                                    </li>
                                    <li>
                                        <Navlink href="#about">About</Navlink>
                                    </li>
                                    <li>
                                        <Navlink href="#portofolio">Portofolio</Navlink>
                                    </li>
                                    <li>
                                        <Navlink href="#contact">Contact</Navlink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
