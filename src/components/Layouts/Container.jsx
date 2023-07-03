import Background from "../Background/Background";
import Navbar from "../Navbar/Navbar";

const Container = ({ children }) => {
    return (
        <div className="w-full">
            <Navbar />
            <Background />
            <div className="max-w-7xl mx-auto">{children}</div>
        </div>
    );
};

export default Container;
