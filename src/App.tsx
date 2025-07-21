import { Layout } from 'antd';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

const { Content } = Layout;

function App() {
  return (
    <Layout>
      <Navbar />
      <Content>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </Content>
    </Layout>
  );
}

export default App;
