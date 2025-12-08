import React from "react";
import "./donate.css";


const DonationSection = () => {
  return (
    <div className="donation-wrapper">
      <h2>Faça a doação</h2>
      <div className="donation-box">
        <div className="qr-code-container">
          <img src="https://www.gov.br/inss/pt-br/centrais-de-conteudo/imagens/qr-code-novo-fw-300x300-png" alt="QR Code de Doação" className="qr-code" />
        </div>
        <div className="donation-info">
          <p>IGREJA BATISTA BETHLÉEM</p>
          <p>CNPJ: 05.104.859/0001-64</p>
          <p>CHAVE PIX:<br /> (77) 98886-8953</p>
        </div>
      </div>
    </div>
  );
};

export default DonationSection;
