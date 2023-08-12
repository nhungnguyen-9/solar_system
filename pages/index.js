import { Footer, Navbar } from '../components';
import { About, Explore, GetStarted, Hero, News, NewInfo, World } from '../sections';

const Home = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
      <NewInfo />
    </div>
    <World />
    <News />
    <Footer />
  </div>
);

export default Home;
