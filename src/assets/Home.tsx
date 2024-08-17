import Features from "./Features";
import Header from "./Header";
import HeroHome from "./Hero";
import Courses from "./Features1";
import FeaturesBlocks from "./FeaturesBlock";
import Community from "./Community";
import Faq from "./FAQ";
import Footer from "./Footer";
import ContactMe from "./Contact";


const Home = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
        <Header />
        <main className="flex-grow">
            <HeroHome />
            <Features />
            <Courses />
            <FeaturesBlocks />
            <Community />
            <Faq />
            <ContactMe />
        </main>

        <Footer />
    </div>
  )
}

export default Home;