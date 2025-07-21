import { Carousel, Card } from 'antd';

const projects = [
  { title: 'Proyecto 1', desc: 'Descripción breve del proyecto 1' },
  { title: 'Proyecto 2', desc: 'Descripción breve del proyecto 2' },
  { title: 'Proyecto 3', desc: 'Descripción breve del proyecto 3' },
];

export default function Portfolio() {
  return (
    <section id="portafolio">
      <Carousel autoplay>
        {projects.map((p) => (
          <div key={p.title}>
            <Card
              title={p.title}
              className="card-hover"
              style={{ margin: '0 auto', maxWidth: 600 }}
            >
              {p.desc}
            </Card>
          </div>
        ))}
      </Carousel>
    </section>
  );
}
