/* eslint-disable */

import React, { Component } from 'react';
// import { PropTypes } from 'prop-types';
import html2canvas from 'html2canvas';
import JsPdf from 'jspdf';
import Facture from '../Facture/index';
import './convert.scss';

// download html2canvas and jsPDF and save the files in app/ext, or somewhere else
// the built versions are directly consumable
// import {html2canvas, jsPDF} from 'app/ext';


export default class Export extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  printDocument() {
    html2canvas(this.toPrint)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        console.log(imgData, canvas.width);
        const pdf = new JsPdf();
        pdf.addImage(imgData, 'PNG', 0, 0, 210, 297);
        pdf.save('facture.pdf');
      });
  }

  render() {
    return (
      <div>
        <div ref={(el) => { this.toPrint = el; }} className="canvas-container">
          <Facture />
        </div>
      </div>
    );
  }
}
