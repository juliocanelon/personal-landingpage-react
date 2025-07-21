import React from 'react';
import { Layout } from 'antd';
import { FloatButton } from 'antd';

const { Footer } = Layout;

const FooterSection = () => (
  <Footer style={{ textAlign: 'center' }}>
    © {new Date().getFullYear()} Julio C. Canelón Rangel. Todos los derechos reservados.{' '}
    <a href="#" target="_blank" rel="noopener noreferrer">
      Código fuente
    </a>
    <FloatButton.BackTop visibilityHeight={300} />
  </Footer>
);

export default FooterSection;
