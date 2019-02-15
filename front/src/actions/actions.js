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

export const nextModel = () => ({
  type: 'NEXTMODEL',
});

export const previousModel = () => ({
  type: 'PREVIOUSMODEL',
});

export const to30 = () => ({
  type: 'TO30',
});

export const to40 = () => ({
  type: 'TO40',
});

export const to50 = () => ({
  type: 'TO50',
});

export const to60 = () => ({
  type: 'TO60',
});

export const popUpColors = () => ({
  type: 'POPCOLORS',
});

export const popUpPackage = () => ({
  type: 'POPPACKAGE',
});

export const popUpOffColor = () => ({
  type: 'POPOFFCOLOR',
});

export const popUpOffPackage = () => ({
  type: 'POPOFFPACKAGE',
});
