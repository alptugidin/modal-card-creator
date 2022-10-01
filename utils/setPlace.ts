export const setPlace = (attr:string, props:any, colors:any):string => {
  let output = '';
  console.log(props, colors);
  if (colors.backgroundColor !== undefined && props.backgroundColor !== undefined) {
    if (attr === 'bg') {
      output = !props.inStory ? colors.backgroundColor : props.backgroundColor;
    }
  }

  if (colors.borderColor !== undefined && props.borderColor !== undefined) {
    if (attr === 'bd') {
      output = !props.inStory ? colors.borderColor : props.borderColor;
    }
  }

  if (colors.themeColor !== undefined && props.themeColor !== undefined) {
    if (attr === 'th') {
      output = !props.inStory ? colors.themeColor : props.themeColor;
    }
  }
  if (colors.textColor !== undefined && props.textColor !== undefined) {
    if (attr === 'tx') {
      output = !props.inStory ? colors.textColor : props.textColor;
    }
  }
  if (colors.otherTextColor !== undefined && props.otherTextColor !== undefined) {
    if (attr === 'ot') {
      output = !props.inStory ? colors.otherTextColor : props.otherTextColor;
    }
  }
  return output;
};
