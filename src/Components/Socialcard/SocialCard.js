import React from "react";
import "./SocialCard.css";
// import Card from "../../shared/Card/Card";
import { FaTwitter } from "react-icons/fa";
import { TwitterTimelineEmbed } from "react-twitter-embed";


const SocialCard = () => {
  let Handels = ['WHO','PMOIndia','realDonaldTrump'];
  return (
    <div className="TwitterFeeds">
        <div className="TwitterFeedsHeading">
        <p>Latest Feeds</p>
        <span><FaTwitter /></span>
        </div>
        <div className="TweetList">
        {Handels.map(handler => (
          <div key={handler}>
          <TwitterTimelineEmbed sourceType="profile" screenName={handler} options={{ height: 400, tweetLimit: 1 }} noHeader noFooter
        />
        </div>
        ))}
        </div>
    </div>
  );
};

export default SocialCard;
