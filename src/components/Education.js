import React from 'react';
import { Timeline } from 'antd';
import SectionTitle from './SectionTitle';
import { education } from '../data/education';

const Education = () => (
  <section id="educacion">
    <SectionTitle>Educación</SectionTitle>
    <Timeline mode="left" items={education.map((e) => ({
      label: e.fecha,
      children: (
        <div>
          <strong>{e.titulo}</strong>
          <div>{e.institucion}</div>
        </div>
      ),
    }))} />
  </section>
);

export default Education;
