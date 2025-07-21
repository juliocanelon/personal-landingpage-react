import { Button, Typography } from 'antd';
import { Link } from 'react-scroll';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="hero" style={{ background: '#f5f5f5', height: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
      <div className={show ? 'fade-enter-active' : 'fade-enter'}>
        <Typography.Title>
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
            <Button size="large" ghost>
              Contáctame
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
