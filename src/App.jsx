import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import { Background, Container, Navbar } from "./components/index";
export default function App() {
    return (
        <Container>
            <Hero />
            <About />
            <About />
        </Container>
    );
}
