import { Avatar, Col, Row, Typography } from 'antd';

export default function About() {
  return (
    <section id="sobre-mi">
      <Row gutter={[32, 32]} align="middle">
        <Col xs={24} md={6} style={{ textAlign: 'center' }}>
          <Avatar size={120} src="/profile-julio.jpg" />
        </Col>
        <Col xs={24} md={18}>
          <Typography.Paragraph>
            Soy Ingeniero en Informática con más de 15 años de experiencia desarrollando software, liderando equipos y escalando plataformas bancarias basadas en microservicios. Docente universitario y entusiasta de la Inteligencia Artificial aplicada al desarrollo de software y DevSecOps. Mi objetivo: evolucionar hacia consultoría independiente en IA para modernizar ecosistemas tecnológicos.
          </Typography.Paragraph>
        </Col>
      </Row>
    </section>
  );
}
