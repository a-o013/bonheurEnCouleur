const RenderPDF = require('chrome-headless-render-pdf');
RenderPDF.generateSinglePdf('localhost:3000/facture', 'facturebonheurencouleur.pdf');