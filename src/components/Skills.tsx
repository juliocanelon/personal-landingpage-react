import { Card, Col, Row } from 'antd';

const skills = [
  'DevSecOps',
  'Arquitectura de Microservicios',
  'IA aplicada',
  'Liderazgo Técnico',
  'Gestión Agile',
];

export default function Skills() {
  return (
    <section id="habilidades">
      <Row gutter={[16, 16]}>
        {skills.map((skill) => (
          <Col xs={24} sm={12} md={8} key={skill}>
            <Card hoverable className="card-hover" style={{ textAlign: 'center' }}>
              {skill}
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}
