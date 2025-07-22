import React from 'react';
import { Button, Typography } from 'antd';
import { Link } from 'react-scroll';

const Hero = () => (
  <section
    style={{
      background: "url('/hero-bg.jpg') center/cover no-repeat",
      textAlign: 'center',
      padding: '120px 20px',
      color: 'white',
    }}
  >
    <Typography.Title style={{ color: 'inherit' }}>
      Ingeniero en Informática & Líder Técnico en Banca Digital
    </Typography.Title>
    <Typography.Paragraph style={{ fontSize: 18 }}>
      +15 años creando soluciones de software. Ahora tu socio estratégico en Inteligencia Artificial.
    </Typography.Paragraph>
    <div style={{ marginTop: 32 }}>
      <Link to="portafolio" smooth duration={500}>
        <Button type="primary" size="large" style={{ marginRight: 16 }}>
          Ver Portafolio
        </Button>
      </Link>
      <Link to="contacto" smooth duration={500}>
        <Button size="large" type="default">
          Contáctame
        </Button>
      </Link>
    </div>
  </section>
);

export default Hero;
