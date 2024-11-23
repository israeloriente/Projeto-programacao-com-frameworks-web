import React from "react";
import "./AboutUs.scss";
import barberImage from "../../../assets/about-us.png";
import logo from "../../assets/logo.png";

const AboutUs: React.FC = () => {
  return (
    <div className="about-us-container">
      {/* Banner Section */}
      <section className="banner">
        <img src={barberImage} alt="Barbearia" />
        <div className="banner-text">
          <h1>Sobre nós</h1>
          <p>
            Bem-vindo à nossa barbearia, onde estilo e conforto se encontram.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="content">
          <h2>Quem somos</h2>
          <p>
            Somos uma barbearia moderna com um ambiente acolhedor, onde cada
            cliente é tratado com carinho e respeito. Nossa missão é oferecer
            cortes de cabelo e serviços de barba de alta qualidade, garantindo
            que você saia de nossa barbearia se sentindo renovado.
          </p>
          <p>
            Com uma equipe de barbeiros experientes, oferecemos um serviço
            personalizado para cada cliente, porque entendemos que o estilo de
            cada um é único. Venha conhecer nossos serviços e vivencie uma
            experiência única!
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <h2>Conheça nossa equipe</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Barbeiro 1" />
            <h3>João Silva</h3>
            <p>Barbeiro chefe com mais de 10 anos de experiência.</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Barbeiro 2" />
            <h3>Ana Costa</h3>
            <p>Especialista em cortes modernos e estilos clássicos.</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Barbeiro 3" />
            <h3>Carlos Pereira</h3>
            <p>Barbeiro focado no atendimento de excelência.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Serviços</h2>
        <ul>
          <li>Corte de cabelo masculino</li>
          <li>Barba e bigode</li>
          <li>Tratamentos capilares</li>
          <li>Corte e design de cabelo para crianças</li>
          <li>Corte estiloso e personalizado</li>
        </ul>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>O que nossos clientes dizem</h2>
        <div className="testimonial">
          <p>
            "O melhor corte de cabelo que já tive! Os barbeiros são super
            atenciosos e o ambiente é muito agradável."
          </p>
          <span>- João, cliente regular</span>
        </div>
        <div className="testimonial">
          <p>
            "Adoro o atendimento e o cuidado que eles têm com cada detalhe.
            Sempre me sinto em casa!"
          </p>
          <span>- Ana, cliente satisfeita</span>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Pronto para agendar seu corte?</h2>
        <p>
          Venha nos visitar e viva a experiência de um atendimento
          personalizado.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
