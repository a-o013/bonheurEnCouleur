export const nextStep = () => ({
  type: 'NEXTSTEP',
});

export const previousStep = () => ({
  type: 'PREVIOUSSTEP',
});

export const changeGris = () => ({
  type: 'SELECTGRAY',
});

export const changeChoco = () => ({
  type: 'SELECTCHOCO',
});

export const selectColor = currentColor => ({
  type: 'SELECTCOLOR',
  payload: currentColor,
});
