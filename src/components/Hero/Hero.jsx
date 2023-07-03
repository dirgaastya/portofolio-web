import Button from "./../Button";
const Hero = () => {
    return (
        <section id="hero" className="w-full h-[100vh] p-16">
            <div className="h-full flex flex-col justify-center md:flex-row md:justify-between items-center">
                <div className="w-2/4 text-white">
                    <h3 className="text-2xl uppercase tracking-tighter leading-relaxed">
                        Web <span className="text-blue-400">Developer</span>
                    </h3>
                    <h2 className="text-4xl font-semibold leading-relaxed uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-green-400 to-green-700">
                        Dirga Astya Wisnuwardana
                    </h2>
                    <p className="text-sm tracking-tight leading-loose text-justify">
                        Seorang web developer yang kreatif dan berpengalaman dalam merancang dan mengembangkan solusi web inovatif
                        yang menarik, responsif, dan fungsional.
                    </p>
                    <div className="flex justify-end space-x-3 my-3">
                        <Button to={"#"} text={"Download CV"} variant={"secondary"} />
                        <Button to={"#"} text={"Portofolio"} variant={"primary"} />
                    </div>
                </div>
                <div>
                    <img src="https://ucarecdn.com/170555e1-4a6d-4eaf-8eb7-70e80c6ce07c/" alt="avatar" className="max-w-full" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
