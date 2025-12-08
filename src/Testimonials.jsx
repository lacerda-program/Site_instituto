import React from "react";
import './App.css';

const Testimonials = () => (
  <div className="container">
    <h1>Nossos Projetos</h1>

    <div className="testimonials">
      <div className="testimonial">
        <p>"Levamos educação de qualidade a crianças e adolescentes em situação de vulnerabilidade"</p>
        <h2>Andressa P.</h2>
        <img src="https://img.freepik.com/fotos-gratis/notas-de-educacao-feminina-estudando-ambiente-de-trabalho-natural_1418-88.jpg?semt=ais_hybrid&w=740" />
      </div>

      <div className="testimonial">
        <p>"Através do jiu-jitsu, ensinamos disciplina, respeito e superação a crianças e jovens de áreas carentes."</p>
        <h2>Ricardo L.</h2>
        <img src="https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800&auto=format&fit=crop" alt="Praticantes de judô" />
      </div>

      <div className="testimonial">
        <p>"Ensinamos violão para jovens em situações difíceis, criando vínculos e novas possibilidades."</p>
        <h2>Eduardo A.</h2>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBh9AN5JY3fq9Z_LkT50PCFOkp8HjdNnGEZw&s" />
      </div>
    </div> 
  </div>
);

export default Testimonials;
