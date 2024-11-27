import React from "react";
import "./Subscription.scss";
import loyaltyCardImage from "../../../assets/loyalty-card.png";

const Subscription: React.FC = () => {
  return (
    <div className="subscription-container">
      <section className="intro">
        <h1>Subscribe to our plans and enjoy exclusive benefits!</h1>
        <p>
          We offer loyalty programs for our customers. Subscribe now and take
          advantage of discounts, special promotions, and much more!
        </p>
      </section>

      <section className="plans">
        <h2>Choose Your Loyalty Plan</h2>
        <div className="plan">
          <div className="plan-info">
            <h3>Basic Plan</h3>
            <p>Benefits: Discounts on services, access to weekly promotions.</p>
          </div>
          <div className="plan-image">
            <img src={loyaltyCardImage} alt="Basic Plan" />
          </div>
        </div>
        <div className="plan">
          <div className="plan-info">
            <h3>Premium Plan</h3>
            <p>Benefits: Exclusive discounts, priority scheduling, and more!</p>
          </div>
          <div className="plan-image">
            <img src={loyaltyCardImage} alt="Premium Plan" />
          </div>
        </div>
      </section>

      <section className="call-to-action">
        <h2>Sign up now and start saving!</h2>
        <button className="signup-btn">Subscribe Now</button>
      </section>
    </div>
  );
};

export default Subscription;