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
          <h2 className="section1_title">Notre concept</h2>
          <div className="section_text">
            <h3 className="section_text_h3">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</h3>
            <p className="section_text_p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur eget arcu porttitor, hendrerit magna semper, facilisis elit.
              Fusce vitae posuere purus, a porta diam. Nunc volutpat, sem nec porttitor.
              In ornare sem ac neque ultricies aliquet. Phasellus sit amet sem congue.
            </p>
          </div>
        </section>

        <section className="section section2">
          <div className="section_text">
            <h3 className="section_text_h3">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</h3>
            <p className="section_text_p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur eget arcu porttitor, hendrerit magna semper, facilisis elit.
              Fusce vitae posuere purus, a porta diam. Nunc volutpat, sem nec porttitor.
              In ornare sem ac neque ultricies aliquet. Phasellus sit amet sem congue.
            </p>
          </div>
          <div className="section2_container">
            <img className="section2_container_image" src={img2} alt="img_section2" />
          </div>
        </section>

        <section className="section section3">
          <div className="section_text">
            <h3 className="section_text_h3">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</h3>
            <p className="section_text_p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur eget arcu porttitor, hendrerit magna semper, facilisis elit.
              Fusce vitae posuere purus, a porta diam. Nunc volutpat, sem nec porttitor.
              In ornare sem ac neque ultricies aliquet. Phasellus sit amet sem congue.
            </p>
          </div>
        </section>
      </div>
    );
  }
}

export default Concept;
