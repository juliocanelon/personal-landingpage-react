import React from 'react';
import { Row, Col, Typography, Image } from 'antd';
import SectionTitle from './SectionTitle';

const About = () => (
  <section id="sobre-mi">
    <SectionTitle>Sobre mí</SectionTitle>
    <Row gutter={[32, 32]} align="middle">
      <Col xs={24} md={8} style={{ textAlign: 'center' }}>
        <Image
          src="/profile-julio.jpg"
          alt="Julio Canelón"
          width={200}
          height={200}
          style={{ borderRadius: '50%' }}
        />
      </Col>
      <Col xs={24} md={16}>
        <Typography.Paragraph>
          Ingeniero en Informática con más de 15 años de experiencia en desarrollo de software, arquitectura de soluciones y liderazgo técnico en banca, retail y servicios. He trabajado diseñando y escalando plataformas basadas en microservicios, integraciones seguras y prácticas DevSecOps.
        </Typography.Paragraph>
        <Typography.Paragraph>
          También soy docente universitario y un entusiasta de la Inteligencia Artificial aplicada a la ingeniería de software y la gestión de proyectos. Mi objetivo actual: evolucionar hacia consultoría independiente en IA para organizaciones que buscan modernizar su ecosistema tecnológico.
        </Typography.Paragraph>
      </Col>
    </Row>
  </section>
);

export default About;
