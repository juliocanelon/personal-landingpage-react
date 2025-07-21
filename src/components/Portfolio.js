import React from 'react';
import { Row, Col, Card, Tag, Modal, Button } from 'antd';
import SectionTitle from './SectionTitle';
import { projects } from '../data/projects';

const { Meta } = Card;

const Portfolio = () => {
  const [selected, setSelected] = React.useState(null);

  return (
    <section id="portafolio">
      <SectionTitle>Portafolio</SectionTitle>
      <Row gutter={[16, 16]}>
        {projects.map((proy) => (
          <Col xs={24} md={12} lg={8} key={proy.id}>
            <Card
              hoverable
              cover={<img src={proy.imagen} alt={proy.titulo} />}
              onClick={() => setSelected(proy)}
            >
              <Meta title={proy.titulo} description={proy.rol} />
            </Card>
          </Col>
        ))}
      </Row>
      <Modal
        open={!!selected}
        onCancel={() => setSelected(null)}
        footer={null}
        title={selected?.titulo}
      >
        <p>{selected?.descripcion}</p>
        <div style={{ marginBottom: 12 }}>
          {selected?.tecnologias.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
        {selected?.github && (
          <Button type="link" href={selected.github} target="_blank">
            GitHub
          </Button>
        )}
        {selected?.demo && (
          <Button type="link" href={selected.demo} target="_blank">
            Demo
          </Button>
        )}
      </Modal>
    </section>
  );
};

export default Portfolio;
