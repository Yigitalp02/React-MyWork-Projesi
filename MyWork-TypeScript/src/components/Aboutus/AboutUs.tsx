// src/components/AboutUs.tsx
import React, { useEffect } from 'react';
import Header from '../Contact/Header';
import './aboutus.css';
import { loadBootstrap } from '../loadBootstrap.tsx';

const AboutUs: React.FC = () => {
  useEffect(() => {
    loadBootstrap();
  }, []);

  return (
    <div id="about-page">
      <Header />
      <main className="main-section">
        <div className="content-wrapper">
          <h1 className="about-header">We are,</h1>
          <p className="about-paragraph">
            Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.
            
            Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.<br />
            Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos.<br />
            Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac
            rhoncus nisl, eu tempor urna.<br /> Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia.
            Aliquam in elementum tellus.
          </p>
        </div>
      </main>
    </div>
  );
};

export default AboutUs;
