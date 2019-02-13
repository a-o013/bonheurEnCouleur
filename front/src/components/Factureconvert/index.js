import React, { Component } from 'react';
// import { PropTypes } from 'prop-types';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
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
        const pdf = new { jsPDF }();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        pdf.output('dataurlnewwindow');
        pdf.save('facture.pdf');
      });
  }

  render() {
    return (
      <div>
        <div ref={(el) => { this.toPrint = el; }} className="mt4">
          <div>FACTURE</div>
          <Facture />
          <div className="mb5">
            <button type="button" onClick={this.printDocument}>Print</button>
          </div>
        </div>
      </div>
    );
  }
}
