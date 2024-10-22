import Footer from '../components/common/footer';
import Header from '../components/common/header';
import BigCta from '../components/home/big-cta';
import Counts from '../components/home/counts';
import Faq from '../components/home/faq';
import FirstMeeting from '../components/home/first-meeting';
import Hero from '../components/home/hero';
import Properties from '../components/home/properties';
import ScreenView from '../components/home/screen-view';

const Home = () => {
  return (
    <main className='bg-zinc-950 min-h-screen'>
      <div className='container mx-auto'>
        <Header />
        <Hero />
        <ScreenView />
        <Counts />
        <Properties />
        <BigCta />
        <Faq />
        <FirstMeeting />
        <Footer />
      </div>
    </main>
  );
};
export default Home;
