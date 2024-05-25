import Banner from "../components/home/Banner";
import DevInfo from "../components/home/DevInfo";
import SuccessStory from "../components/home/SuccessStory";

const Home = () => {
  return (
    <main className="space-y-10">
      <Banner />
      <SuccessStory />
      <DevInfo />
    </main>
  );
};

export default Home;
