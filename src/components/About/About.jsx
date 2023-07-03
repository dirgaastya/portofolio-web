import Title from "./../Title";

const About = () => {
    return (
        <section id="about" className="w-full bg-transparent backdrop-blur-xl rounded pr-16 mb-24">
            <div className="w-full flex justify-vetween items-center">
                <div className="w-1/4">
                    <img src="https://ucarecdn.com/241bb76f-3c62-4f48-a045-99bc670da3b8/" alt="avatar2" />
                </div>
                <div className="w-3/4 px-4">
                    <div className="w-1/3 text-white border-b border-white">
                        <Title>About Me</Title>
                    </div>
                    <p className="text-white text-sm tracking-tight leading-loose text-justify">
                        Saya adalah seorang web developer yang berasal dari Bandung. Saya sangat tertarik dan antusias dalam
                        bidang pengembangan web. Saya memiliki motivasi yang kuat untuk terus belajar dan meningkatkan
                        keterampilan saya dalam mengembangkan aplikasi dan situs web yang menarik dan fungsional. Saya senang
                        bekerja dalam tim dan memiliki kemampuan komunikasi yang baik. Saya berkomitmen untuk mencapai hasil yang
                        optimal dalam setiap proyek yang saya kerjakan.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
