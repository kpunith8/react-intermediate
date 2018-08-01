// Re-usable css utility to position the items, with named parameters and default values if none passed while invoking

export const absolute = ({ y = 'top', x = 'left', yValue = 0, xValue = 0 }) => `
  position: absolute;
  ${y}: ${yValue};
  ${x}: ${xValue};
`;