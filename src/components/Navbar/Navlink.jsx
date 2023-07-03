const Navlink = ({ href, children }) => {
    return (
        <a href={href} className="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight">
            <span>{children}</span>
        </a>
    );
};

export default Navlink;
