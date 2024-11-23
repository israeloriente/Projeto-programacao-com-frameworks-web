import React from "react";
import "./Subscription.scss";
import loyaltyCardImage from "../../../assets/loyalty-card.png";

const Subscription: React.FC = () => {
  return (
    <div className="subscription-container">
      <section className="intro">
        <h1>Assine nossos planos e ganhe benefícios exclusivos!</h1>
        <p>
          Oferecemos programas de fidelidade para nossos clientes. Assine agora
          e aproveite descontos, promoções especiais e muito mais!
        </p>
      </section>

      <section className="plans">
        <h2>Escolha o seu plano de fidelidade</h2>
        <div className="plan">
          <div className="plan-info">
            <h3>Plano Básico</h3>
            <p>
              Benefícios: Descontos em serviços, acesso a promoções semanais.
            </p>
          </div>
          <div className="plan-image">
            <img src={loyaltyCardImage} alt="Plano Básico" />
          </div>
        </div>
        <div className="plan">
          <div className="plan-info">
            <h3>Plano Premium</h3>
            <p>
              Benefícios: Descontos exclusivos, agendamentos prioritários e
              mais!
            </p>
          </div>
          <div className="plan-image">
            <img src={loyaltyCardImage} alt="Plano Premium" />
          </div>
        </div>
      </section>

      <section className="call-to-action">
        <h2>Inscreva-se agora e comece a economizar!</h2>
        <button className="signup-btn">Assine Agora</button>
      </section>
    </div>
  );
};

export default Subscription;
