
export const nextStep = () => ({
  type: 'NEXTSTEP',
});

export const previousStep = () => ({
  type: 'PREVIOUSSTEP',
});

export const toPDF = form => ({
  type: 'TOPDF',
  payload: form,
});
