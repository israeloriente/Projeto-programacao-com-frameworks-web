import React from "react";
import "./AboutUs.scss";
import barberImage from "../../../assets/about-us.png";
import logo from "../../assets/logo.png";

const AboutUs: React.FC = () => {
  return (
    <div className="about-us-container">
      {/* Banner Section */}
      <section className="banner">
        <img src={barberImage} alt="Barbershop" />
        <div className="banner-text">
          <h1>About Us</h1>
          <p>
            Welcome to our barbershop, where style and comfort come together.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="content">
          <h2>Who We Are</h2>
          <p>
            We are a modern barbershop with a welcoming environment, where each
            customer is treated with care and respect. Our mission is to provide
            high-quality haircuts and beard services, ensuring you leave our
            barbershop feeling renewed.
          </p>
          <p>
            With a team of experienced barbers, we offer personalized service
            for every client because we understand that everyone's style is
            unique. Come and explore our services to experience something truly
            special!
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Barber 1" />
            <h3>John Smith</h3>
            <p>Head barber with over 10 years of experience.</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Barber 2" />
            <h3>Anna Costa</h3>
            <p>Specialist in modern cuts and classic styles.</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Barber 3" />
            <h3>Charles Perez</h3>
            <p>Barber focused on excellent service.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Services</h2>
        <ul>
          <li>Men's haircut</li>
          <li>Beard and mustache grooming</li>
          <li>Hair treatments</li>
          <li>Kids' haircuts and styling</li>
          <li>Stylish and personalized cuts</li>
        </ul>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial">
          <p>
            "The best haircut I've ever had! The barbers are very attentive and
            the environment is super pleasant."
          </p>
          <span>- John, regular client</span>
        </div>
        <div className="testimonial">
          <p>
            "I love the service and the attention to detail. I always feel at
            home!"
          </p>
          <span>- Anna, satisfied client</span>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Ready to Schedule Your Cut?</h2>
        <p>Come visit us and experience personalized service.</p>
      </section>
    </div>
  );
};

export default AboutUs;