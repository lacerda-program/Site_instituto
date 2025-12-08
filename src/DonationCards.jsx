import React from 'react';
import './donation.css';

function DonationCards() {
  return (
    <div className="donation-container">
      <h1>Doar</h1>
      <p>Não importa o valor, sua doação fará uma grande diferença na</p>
      <p>vida de nossos beneficiários. Aqui estão três maneiras de doar. </p>
      
      <div className="donation-options">
        <div className="donation-card">
          <h3>Monetária</h3>
          <p>Você pode escolher fazer uma contribuição única ou torná-la recorrente mensal ou trimestral. Somos gratos por sua generosidade.</p>
          <button className="donation-button">Selecione para doar</button>
        </div>

        <div className="donation-card">
          <h3>Em espécie</h3>
          <p>Aceitamos itens novos e usados relevantes para nossa causa. Oferecer suas habilidades ou expertise nos ajudará a atingir nossos objetivos.</p>
          <button className="donation-button">Selecione para doações em espécie</button>
        </div>

        <div className="donation-card">
          <h3>Tempo</h3>
          <p>Trabalhamos diretamente com nossos beneficiários. Sua presença e suporte prático criará um impacto duradouro.</p>
          <button className="donation-button">Selecione para doar seu tempo</button>
        </div>
      </div>
    </div>
  );
}

export default DonationCards;
