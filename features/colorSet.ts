export const colorSet = (param:string): any => {
  const output = {
    n: 'default',
    h: '#7D4AEA',
  };
  if (param !== null) {
    if (param === 'black') {
      output.n = 'black';
      output.h = '#000';
    } if (param === 'darkgrey') {
      output.n = 'darkgrey';
      output.h = '#777777';
    } if (param === 'orange') {
      output.n = 'orange';
      output.h = '#F37C34';
    } if (param === 'default') {
      output.n = 'default';
      output.h = '#7D4AEA';
    }
  }
  return output;
};
