export const nextStep = () => ({
  type: 'NEXTSTEP',
});

export const previousStep = () => ({
  type: 'PREVIOUSSTEP',
});

export const selectColor = currentColor => ({
  type: 'SELECTCOLOR',
  payload: currentColor,
});
