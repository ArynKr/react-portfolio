import React from 'react';
import {
  Header,
  About,
  Contact,
  Experience,
  Footer,
  Nav,
  Portfolio,
} from './components';

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      {/* <Services /> */}
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
