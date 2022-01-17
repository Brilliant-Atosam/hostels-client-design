import "./tweets.css";
const Tweets = () => {
  return (
    <div className="container tweets-container">
      <h1 className="hLight title tc intro-title newsletter-title pb20">This is what student say about us</h1>
      <div className="tweets flex">
        <div className="tweet">
          <div className="tweet-user">
            <img src="" alt="" className="tweet-img" />
            <span className="tweet-username">kingcrow</span>
            <span className="tweet-name">@jon snow</span>
          </div>
          <div className="tweet-post">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            officia maiores est.
          </div>
        </div>
        <div className="tweet">
          <div className="tweet-user">
            <img src="" alt="" className="tweet-img" />
            <span className="tweet-username">kingcrow</span>
            <span className="tweet-name">@jon snow</span>
          </div>
          <div className="tweet-post">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            officia maiores est.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweets;
