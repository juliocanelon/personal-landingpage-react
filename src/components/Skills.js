import React from 'react';
import { Row, Col, Card, Tag } from 'antd';
import SectionTitle from './SectionTitle';
import { skills } from '../data/skills';

const renderTags = (items) => items.map((skill) => <Tag key={skill}>{skill}</Tag>);

const Skills = () => (
  <section id="habilidades">
    <SectionTitle>Habilidades</SectionTitle>
    <Row gutter={[16, 16]}>
      {Object.entries(skills).map(([cat, items]) => (
        <Col xs={24} md={12} lg={8} key={cat}>
          <Card title={cat.replace(/([A-Z])/g, ' $1')} bordered={false}>
            {renderTags(items)}
          </Card>
        </Col>
      ))}
    </Row>
  </section>
);

export default Skills;
