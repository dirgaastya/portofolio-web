const Button = ({ to, text, variant }) => {
    const variants = {
        primary:
            "bg-green-400 text-white bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-green-400 via-teal-600 to-teal-700 hover:bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] hover:from-green-400 hover:via-teal-600 hover:to-teal-700",
        secondary:
            "bg-blue-400 text-white  bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-blue-400 via-cyan-600 to-cyan-700 hover:bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] hover:from-blue-400 hover:via-cyan-600 hover:to-cyan-700",
    };
    return (
        <button
            className={`px-6 py-1 rounded-full transition-all ease-in-out duration-300 hover:-translate-y-1 ${variants[variant]}`}
        >
            <a href={to} className="font-semibold">
                {text}
            </a>
        </button>
    );
};

export default Button;
