import BestSeller from '../components/BestSeller';
import Hero from '../components/Hero';
import LatestCollection from '../components/LatestCollection';
import NewsLetterBox from '../components/NewsLetterBox';
import Ourpolicy from '../components/Ourpolicy';

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection/>
      <BestSeller/>
      <Ourpolicy/>
      <NewsLetterBox/>
    </div>
  );
};

export default Home;
