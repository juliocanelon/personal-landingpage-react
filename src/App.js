import React, { useState } from 'react';
import { ConfigProvider, Layout } from 'antd';
import { Helmet } from 'react-helmet-async';
import { customTheme, darkTheme } from './theme';
import HeaderNav from './components/HeaderNav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Education from './components/Education';
import ContactForm from './components/ContactForm';
import FooterSection from './components/Footer';

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <ConfigProvider theme={isDark ? darkTheme : customTheme}>
      <Helmet>
        <title>Julio C. Canelón Rangel</title>
        <meta name="description" content="Currículum online de Julio Canelón" />
        <meta property="og:title" content="Julio C. Canelón" />
      </Helmet>
      <Layout>
        <HeaderNav isDark={isDark} onToggleTheme={() => setIsDark(!isDark)} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Portfolio />
          <Education />
          <ContactForm />
        </main>
        <FooterSection />
      </Layout>
    </ConfigProvider>
  );
}

export default App;
