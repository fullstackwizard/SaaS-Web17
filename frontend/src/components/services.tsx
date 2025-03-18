import React from 'react';

function Services() {
  return (
    <div className="services">
      <h1>Our Services</h1>
      <div className="service-item">
        <h2>Marketing Digital</h2>
        <p>Enhance your business with our digital marketing services.</p>
        <button>Learn More</button>
      </div>
      <div className="service-item">
        <h2>Website Hosting</h2>
        <p>Reliable and fast website hosting to keep your site up and running.</p>
        <button>Learn More</button>
      </div>
      {/* Podemos adicionar mais serviços aqui */}
    </div>
  );
}

export default Services;
