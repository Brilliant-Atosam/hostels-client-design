import Campus from "../components/campuses/Campus";
import Choose from "../components/choose-us/Choose-us";
import Intro from "../components/intro/Intro";
import Managers from "../components/managers/Managers";
import Newsletter from "../components/newsletter/Newsletter";
import Tweets from "../components/tweets/Tweets";
const Homepage = () => {
  return (
    <>
      <Intro />
      <Campus />
      <Choose />
      <Managers />
      <Newsletter />
      <Tweets />
    </>
  );
};

export default Homepage;
