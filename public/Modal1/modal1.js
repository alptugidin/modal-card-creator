window.userData = undefined;
const events = ['click', 'submit', 'keypress'];
const listenUserEvents = (element) => {
  events.forEach((event) => {
    element.addEventListener(event, (e) => {
      if (event === 'keypress') {
        console.log(e.target.value);
      } else if (event === 'click') {
        console.log(e.target.innerText);
      }
    });
  });
  // el.addEventListener('click', () => {
  //   console.log('sss');
  // });
};

window.onload = () => {
  let output;
  const scale = () => {
    if (window.userData.size === 'Small') {
      output = 0.8;
    } else if (window.userData.size === 'Medium') {
      output = 1;
    } else {
      output = 1.2;
    }
    return output;
  };
  let tranpos;

  const x = ['top left', 'top center', 'top right', 'center left', 'center center', 'center'
    + ' right', 'bottom left', 'bottom center', 'bottom right'];
  const y = [
    'top: 0;left: 0;',
    'top: 0;left: 0;right:0;margin-left:auto !important;margin-right:auto!important;',
    'top: 0;right: 0;',
    'margin-top:auto!important; margin-bottom:auto!important;top:0; bottom:0;left:0;',
    'margin-top:auto!important; margin-bottom:auto !important; top:0; bottom:0; right:0; left:0; margin-left:auto !important; margin-right:auto !important;',
    'margin-top:auto!important; margin-bottom:auto!important; top:0; bottom:0;right:0;',
    'bottom:0;left:0;',
    'bottom:0;left:0;right:0;margin-left:auto !important;margin-right:auto!important;',
    'bottom:0;right:0;',
  ];
  const origin = () => x[userData.pos];
  const fixedPosition = () => y[userData.pos];
  console.log(fixedPosition());
  const raw = `

<div id="Modal1" class="Modal1_body__zt6uP" style="--bgColor:${window.userData.color.bgc};
--svgColor:${window.userData.color.theme};--textColor:${window.userData.color.text};--borderColor:${window.userData.color.border};--themeColor:${window.userData.color.theme};transform:scale(${scale()});transform-origin:${origin()}">
<button type="button" class="Modal1_cancel__XIL9t"><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.4" d="M18 3.00001C15.0333 3.00001 12.1332 3.87974 9.66645 5.52796C7.19972 7.17618 5.27713 9.51886 4.14181 12.2598C3.0065 15.0006 2.70945 18.0166 3.28823 20.9264C3.86701 23.8361 5.29562 26.5088 7.3934 28.6066C9.49119 30.7044 12.1639 32.133 15.0737 32.7118C17.9834 33.2906 20.9994 32.9935 23.7403 31.8582C26.4811 30.7229 28.8238 28.8003 30.472 26.3336C32.1203 23.8668 33 20.9667 33 18C33.0018 16.0297 32.6151 14.0783 31.8619 12.2576C31.1088 10.4369 30.004 8.78254 28.6107 7.3893C27.2175 5.99605 25.5632 4.89123 23.7424 4.13806C21.9217 3.38489 19.9704 2.99816 18 3.00001ZM18 30C15.6266 30 13.3066 29.2962 11.3332 27.9776C9.35977 26.6591 7.8217 24.7849 6.91345 22.5922C6.0052 20.3995 5.76756 17.9867 6.23058 15.6589C6.69361 13.3312 7.8365 11.193 9.51473 9.51473C11.193 7.8365 13.3312 6.69361 15.6589 6.23058C17.9867 5.76756 20.3995 6.0052 22.5922 6.91345C24.7849 7.8217 26.6591 9.35977 27.9776 11.3332C29.2962 13.3066 30 15.6266 30 18C29.9958 21.1813 28.7301 24.2311 26.4806 26.4806C24.2311 28.7301 21.1813 29.9958 18 30ZM23.385 10.5L18 15.885L12.615 10.5L10.5 12.615L15.885 18L10.5 23.385L12.615 25.5L18 20.115L23.385 25.5L25.5 23.385L20.115 18L25.5 12.615L23.385 10.5Z" fill="black"/>
</svg>
</button>
<div class="Modal1_svgDiv__2yXVA">
<svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z" fill="#7D4AEA"></path>
<path d="M50 46.18L51.8 53.94L45 49.84L38.2 53.94L40 46.2L34 41.02L41.92 40.34L45 33.04L48.08 40.32L56 41L50 46.18ZM45 27.38L59 33.6V43C59 52.04 53.04 60.38 45 62.86C36.96 60.38 31 52.04 31 43V33.6L45 27.38ZM45 23L27 31V43C27 54.1 34.68 64.48 45 67C55.32 64.48 63 54.1 63 43V31L45 23Z" fill="white"></path>
</svg>
</div>
<div class="Modal1_textDiv__N3lxp">
<p>${window.userData.content[0]}</p>
<p>${window.userData.content[1]}</p>
</div>
<div class="Modal1_inputDiv__F9qIc">
<input type="text" placeholder=${window.userData.content[2]}>
</div>
<div class="Modal1_btnDiv__vlUe4">
<button type="button">${window.userData.content[3]}</button>
<button type="button">${window.userData.content[4]}</button>
</div>
</div>
`;

  const style = `
  * {
font-family: 'Inter', sans-serif;
}

button {
cursor: pointer;
border: 1px solid;
background: transparent;
font-size: 16px;
}

textarea, input {
outline: none;
border: 1px solid;
font-size: 16px;
}

.Modal1_body__zt6uP {
position: fixed;
${fixedPosition()}
margin: 2.5rem;
display: flex;
height: 446px;
width: 480px;
transform-origin: bottom left;
--tw-scale-x: 1.1;
--tw-scale-y: 1.1;
transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
flex-direction: column;
align-items: center;
border-radius: .75rem;
padding: 2.5rem;
font-family: Inter;
--tw-shadow: 0 25px 50px -12px rgba(0,0,0,.25);
--tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);
box-shadow: var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);
transition-property: all;
transition-timing-function: cubic-bezier(.4,0,.2,1);
transition-duration: .15s;
background-color: var(--bgColor);
}

.Modal1_svgDiv__2yXVA :first-child {
fill: var(--svgColor);
}

.Modal1_textDiv__N3lxp {
margin-top: 1.25rem;
color: var(--textColor);
}

.Modal1_textDiv__N3lxp :first-child {
text-align: center;
font-size: 1.875rem;
line-height: 2.25rem;
font-weight: 600;
}

.Modal1_textDiv__N3lxp :nth-child(2) {
margin-top: 1.25rem;
text-align: center;
font-size: 1.25rem;
line-height: 1.75rem;
}

.Modal1_inputDiv__F9qIc {
margin-top: 2rem;
display: flex;
width: 100%;
align-items: center;
}

.Modal1_inputDiv__F9qIc :first-child {
height: 3rem;
width: 100%;
border-radius: .5rem;
border-width: 1px;
padding-left: 1.5rem;
}

.Modal1_inputDiv__F9qIc :first-child::-moz-placeholder {
--tw-placeholder-opacity: 1;
color: rgb(75 85 99/var(--tw-placeholder-opacity));
}

.Modal1_inputDiv__F9qIc :first-child::placeholder {
--tw-placeholder-opacity: 1;
color: rgb(75 85 99/var(--tw-placeholder-opacity));
}

.Modal1_inputDiv__F9qIc :first-child {
border-color: var(--borderColor);
}

.Modal1_btnDiv__vlUe4 {
margin-top: 1.25rem;
display: flex;
width: 100%;
gap: 1.25rem;
}

.Modal1_btnDiv__vlUe4 :first-child {
height: 3rem;
width: 100%;
border-radius: .5rem;
border-width: 1px;
border-color: var(--borderColor);
}

.Modal1_btnDiv__vlUe4 :last-child {
height: 3rem;
width: 100%;
border-radius: .5rem;
border-width: 0;
--tw-text-opacity: 1;
color: rgb(255 255 255/var(--tw-text-opacity));
background-color: var(--svgColor);
}

.Modal1_cancel__XIL9t {
position: absolute;
right: .75rem;
top: .75rem;
border-width: 0;
outline: 2px solid transparent;
outline-offset: 2px;
}
  `;

  const styleSheet = document.createElement('style');
  styleSheet.innerText = style;
  const font = document.createElement('link');
  font.rel = 'stylesheet';
  font.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@500&family=Poppins:wght@500;600&display=swap';
  document.head.appendChild(font);
  document.head.appendChild(styleSheet);

  const options = {
    root: document.getElementsByTagName('body'),
    rootMargin: '400px',
    threshold: 1.0,
  };

  if (window.userData.seconds !== 0) {
    setTimeout(() => {
      document.getElementsByTagName('BODY')[0].innerHTML += raw;
      listenUserEvents(document.getElementById('Modal1'));
    }, window.userData.seconds * 1000);
  }

  if (window.userData.seconds === 0 && window.userData.scroll === 0) {
    document.getElementsByTagName('BODY')[0].innerHTML += raw;
  } else if (window.userData.seconds !== 0) {
    document.getElementsByTagName('BODY')[0].innerHTML += raw;
  } else if (window.userData.scroll !== 0) {

  }
};
