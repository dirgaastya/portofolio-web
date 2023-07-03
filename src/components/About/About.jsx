import Title from "./../Title";

const About = () => {
    return (
        <section id="about" className="w-full bg-transparent backdrop-blur-xl rounded px-16 py-4 mb-24">
            <div className="text-white">
                <Title>About Me</Title>
            </div>
            <div className="w-3/4">
                <p className="text-white text-smg tracking-tight leading-loose text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt a enim, voluptatum cum blanditiis dicta soluta,
                    assumenda quibusdam, aperiam eligendi voluptate impedit consequuntur dolorem quam minus? Et dolorum ab
                    voluptates incidunt nemo neque beatae corporis optio quae molestiae, dolorem eveniet asperiores similique?
                    Minus in possimus ratione eaque facere tenetur facilis?
                </p>
            </div>
        </section>
    );
};

export default About;
