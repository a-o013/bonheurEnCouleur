import React, { Component } from 'react';
import './index.scss';
import img2 from './img2.png';
// import img1 from './img1.png';
// import img3 from './img3.png';

class Concept extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <section className="section section1">
          <div className="-section_container">
            <h2 className="section1_container_title">Notre concept</h2>
          </div>
          <div className="section_container_text">
            <h3>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Curabitur eget arcu porttitor, hendrerit magna semper, facilisis elit.</p>
            <p>Fusce vitae posuere purus, a porta diam. Nunc volutpat, sem nec porttitor.</p>
            <p>In ornare sem ac neque ultricies aliquet. Phasellus sit amet sem congue.</p>
          </div>
        </section>

        <section className="section2">
          <div className="section_container_text">
            <h3>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Curabitur eget arcu porttitor, hendrerit magna semper, facilisis elit.</p>
            <p>Fusce vitae posuere purus, a porta diam. Nunc volutpat, sem nec porttitor.</p>
            <p>In ornare sem ac neque ultricies aliquet. Phasellus sit amet sem congue.</p>
          </div>
          <div className="section_container_place">
            <p>
              <img className="section_container_place_image" src={img2} alt="img_section2" />
            </p>
          </div>
        </section>

        <section className="section section3">
          <div className="section_container_text">
            <h3>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Curabitur eget arcu porttitor, hendrerit magna semper, facilisis elit.</p>
            <p>Fusce vitae posuere purus, a porta diam. Nunc volutpat, sem nec porttitor.</p>
            <p>In ornare sem ac neque ultricies aliquet. Phasellus sit amet sem congue.</p>
          </div>
        </section>
      </div>
    );
  }
}

export default Concept;
