import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton,
} from "react-twitter-embed";
import React from "react";

const Twittes = () => {
  return (
    <div className="twittsdiv">
      <span>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="narendramodi"
          options={{ height: 200 }}
        />
      </span>
      <span>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="realDonaldTrump"
          options={{ height: 200 }}
        />
      </span>
    </div>
  );
};

export default Twittes;
