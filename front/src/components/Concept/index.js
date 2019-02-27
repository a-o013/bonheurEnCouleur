import React, { Component } from 'react';
import './index.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from '../../assets/images/concept/Calendriers.jpg';
import img2 from '../../assets/images/concept/Comment_3.png';
import img3 from '../../assets/images/concept/Comment_2.png';


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
      <div id="concept">
        <section className="section_container">
          <div className="container_concept">
            <h2 className="section_title_1_text section_title_text">C’est quoi ?</h2>
          </div>
          <div className="container-flex" data-aos="fade-right">
            <div className="container_text_1">
              <p className="container_text_text">
                Des calendriers d’anniversaires
                <ul>
                  <li>décoratifs et originaux</li>
                  <li>
                    100% personnalisables pour s’associer au mieux à votre décoration intérieure
                  </li>
                  <li>fabriqués main en Belgique</li>
                </ul>
              </p>
            </div>
            <img className="img1" src={img1} alt="imgconcept" data-aos="fade-left" />
          </div>
        </section>

        <section className="section_container">
          <div>
            <h2 className="section_title_2_text section_title_text">Comment cela fonctionne ?</h2>
          </div>
          <div className="container-flex_2" data-aos="fade-left">
            <div className="container_text_2">
              <p className="container_text_text">
                Le calendrier se compose d’une planche sous laquelle sont disposés 12 crochets
                (un par mois de l’année).
              </p>
              <p className="container_text_text">
                Sous les crochets vous pouvez accrocher plusieurs pastilles en bois en
                forme de fleur, sur lesquelles sont collées du papier coloré et à motifs.
                Sur l’avant de la pastille vous pouvez écrire le prénom et le jour du mois
                où la personne est née.
              </p>
              <p className="container_text_text">
                Et sur l’arrière vous pouvez écrire l’année de naissance de la personne.
              </p>
            </div>
            <img className="img1 img2" src={img2} alt="imgconcept" data-aos="fade-right" />
          </div>
        </section>

        <section className="section_container">
          <div>
            <h2 className="section_title_3_text section_title_text">Comment commander ?</h2>
          </div>
          <div className="container-flex" data-aos="fade-right">
            <div className="container_text_3">
              <p className="container_text_text">
                Avec le simulateur ci-dessous vous pouvez créer votre propre calendrier en
                quelques étapes seulement :
                <ol>
                  <li>{`Choisissez la couleur de votre planche ${'"Birthdays"'} (gris ou chocolat).`}</li>
                  <li>Choisissez le nombre de fleurs que vous souhaitez commander.</li>
                  <li>
                    Choisissez le ton de couleurs que vous souhaitez
                    (mauve, rose, rouge, orange, ou turquoise).
                  </li>
                  <li>
                    Si la combinaison proposée ne vous convient pas,
                    choisissez vous mêmes les fleurs que vous souhaitez pour votre calendrier,
                    parmi une palette de 48 motifs.
                  </li>
                </ol>
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
