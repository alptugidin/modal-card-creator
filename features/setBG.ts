export const setBG = (param:string) : string => {
  let output = 'bg-[#7D4AEA]';
  if (param === '#000') {
    output = 'bg-[#000]';
  }
  if (param === '#777777') {
    output = 'bg-[#777777]';
  }
  if (param === '#F37C34') {
    output = 'bg-[#F37C34]';
  }
  if (param === '#DDDDDD') {
    output = 'bg-[#DDDDDD]';
  }
  if (param === '#7D4AEA') {
    output = 'bg-[#7D4AEA]';
  }
  return output;
};

export const setBorder = (param:string) => {
  let output = 'border-[#7D4AEA]';
  if (param === '#000') {
    output = 'border-[#000]';
  }
  if (param === '#777777') {
    output = 'border-[#777777]';
  }
  if (param === '#F37C34') {
    output = 'border-[#F37C34]';
  }
  if (param === '#DDDDDD') {
    output = 'border-[#DDDDDD]';
  }
  if (param === '#7D4AEA') {
    output = 'border-[#7D4AEA]';
  }
  return output;
};
