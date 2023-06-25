import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Whyus from './components/Whyus';
import Process from './components/Process';
import Fotter from './components/Fotter';
import Jobs from './components/Jobs';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Whyus />
      <Process />
      <Jobs />
      <Fotter />
    </div>
  );
}
