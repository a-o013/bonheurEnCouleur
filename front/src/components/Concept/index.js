import React, { Component } from 'react';
import './index.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img2 from './img2.png';
import img1 from './img1.png';
import img3 from './img3.png';


class Concept extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    AOS.init({
      duration: 2000,
    });
  }

  render() {
    return (
      <div>
        <section className="section_container">
          <div>
            <h2 className="section_title_1_text section_title_text">1. Lorem ipsum dolor</h2>
          </div>
          <div className="container-flex" data-aos="fade-right">
            <div className="container_text_1">
              <h3 className="container_text_title">Lorem ipsum dolor</h3>
              <p className="container_text_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Duis ex lacus, porta vel dui non, volutpat imperdiet urna.
                Donec porta euismod nibh vel interdum. Nulla at arcu in ligula ultricies viverra.
                Nunc nec elit et velr adipiscing elit.
                Duis ex lacus, porta vel dui non, volutpat imperdiet urna.
                Donec porta euismod nibh vel interdum. Nulla at arcu in ligula ultricies viverra.
              </p>
            </div>
            <img className="img1" src={img1} alt="imgconcept" data-aos="fade-left" />
          </div>
        </section>

        <section className="section_container">
          <div>
            <h2 className="section_title_2_text section_title_text">2. Lorem ipsum dolor</h2>
          </div>
          <div className="container-flex_2" data-aos="fade-left">
            <div className="container_text_2">
              <h3 className="container_text_title">Lorem ipsum dolor</h3>
              <p className="container_text_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Duis ex lacus, porta vel dui non, volutpat imperdiet urna.
                Donec porta euismod nibh vel interdum. Nulla at arcu in ligula ultricies viverra.
                Nunc nec elit et velr adipiscing elit.
                Duis ex lacus, porta vel dui non, volutpat imperdiet urna.
                Donec porta euismod nibh vel interdum. Nulla at arcu in ligula ultricies viverra.
              </p>
            </div>
            <img className="img1 img2" src={img2} alt="imgconcept" data-aos="fade-right" />
          </div>
        </section>

        <section className="section_container">
          <div>
            <h2 className="section_title_3_text section_title_text">3. Lorem ipsum dolor</h2>
          </div>
          <div className="container-flex" data-aos="fade-right">
            <div className="container_text_3">
              <h3 className="container_text_title">Lorem ipsum dolor</h3>
              <p className="container_text_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Duis ex lacus, porta vel dui non, volutpat imperdiet urna.
                Donec porta euismod nibh vel interdum. Nulla at arcu in ligula ultricies viverra.
                Nunc nec elit et velr adipiscing elit.
                Duis ex lacus, porta vel dui non, volutpat imperdiet urna.
                Donec porta euismod nibh vel interdum. Nulla at arcu in ligula ultricies viverra.
              </p>
            </div>
            <img className="img1" src={img3} alt="imgconcept" data-aos="fade-left" />
          </div>
        </section>
      </div>
    );
  }
}

export default Concept;
