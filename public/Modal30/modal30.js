window.userData = undefined;

const getDeviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return 'tablet';
  }
  if (
    /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua,
    )
  ) {
    return 'mobile';
  }
  return 'desktop';
};
const userData = {
  clicks: [],
  keys: [],
  browserLanguage: navigator.language,
  browser: navigator.appCodeName,
  device: getDeviceType(),

};
const userActivities = (id) => {
  const element = document.getElementById(`MODAL${id}`);
  const events = ['click', 'keyup'];
  events.forEach((event) => {
    element.addEventListener(event, (e) => {
      if (event === 'click') {
        userData.clicks.push(e.target.tagName);
      } else {
        userData.keys.push(e.target.value);
      }
    });
  });
};
const post = () => {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://hook.eu1.make.com/gjdah2valw4zzju6sh892l05pbaricn7');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({
    userData,
  }));
};

const createAndStart = (htmlCode) => {
  const desktop = window.userData.target[0];
  const mobile = window.userData.target[1];

  const fn = () => {
    document.getElementsByTagName('BODY')[0].innerHTML += htmlCode;
    userActivities(window.userData.id);
    document.getElementById('cancelButton').addEventListener('click', () => {
      document.getElementById('cancelButton').parentElement.parentElement.remove();
      post();
    });
  };

  if (!desktop && !mobile) {
    fn();
  } else if (getDeviceType() === 'desktop') {
    if (desktop) {
      fn();
    }
  } else if (getDeviceType() === 'mobile') {
    if (mobile) {
      fn();
    }
  }
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
  const origin = () => x[window.userData.pos];
  const fixedPosition = () => y[window.userData.pos];
  const raw = `


<div id="MODAL${window.userData.id}" class="Modal30_body__EffO_" style="--bgColor:${window.userData.color.background};
--svgColor:${window.userData.color.theme};
--textColor:${window.userData.color.text};
--borderColor:${window.userData.color.border};
--themeColor:${window.userData.color.theme};
transform:scale(${scale()});transform-origin:${origin()}">
	<div class="Modal30_body1__AjwtO" style="--bgColor:#ffffff">
		<button id="cancelButton" type="button" class="Modal1_cancel__XIL9t">
<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.4" d="M18 3.00001C15.0333 3.00001 12.1332 3.87974 9.66645 5.52796C7.19972 7.17618 5.27713 9.51886 4.14181 12.2598C3.0065 15.0006 2.70945 18.0166 3.28823 20.9264C3.86701 23.8361 5.29562 26.5088 7.3934 28.6066C9.49119 30.7044 12.1639 32.133 15.0737 32.7118C17.9834 33.2906 20.9994 32.9935 23.7403 31.8582C26.4811 30.7229 28.8238 28.8003 30.472 26.3336C32.1203 23.8668 33 20.9667 33 18C33.0018 16.0297 32.6151 14.0783 31.8619 12.2576C31.1088 10.4369 30.004 8.78254 28.6107 7.3893C27.2175 5.99605 25.5632 4.89123 23.7424 4.13806C21.9217 3.38489 19.9704 2.99816 18 3.00001ZM18 30C15.6266 30 13.3066 29.2962 11.3332 27.9776C9.35977 26.6591 7.8217 24.7849 6.91345 22.5922C6.0052 20.3995 5.76756 17.9867 6.23058 15.6589C6.69361 13.3312 7.8365 11.193 9.51473 9.51473C11.193 7.8365 13.3312 6.69361 15.6589 6.23058C17.9867 5.76756 20.3995 6.0052 22.5922 6.91345C24.7849 7.8217 26.6591 9.35977 27.9776 11.3332C29.2962 13.3066 30 15.6266 30 18C29.9958 21.1813 28.7301 24.2311 26.4806 26.4806C24.2311 28.7301 21.1813 29.9958 18 30ZM23.385 10.5L18 15.885L12.615 10.5L10.5 12.615L15.885 18L10.5 23.385L12.615 25.5L18 20.115L23.385 25.5L25.5 23.385L20.115 18L25.5 12.615L23.385 10.5Z" fill="black"/>
</svg>
</button>
		<div class="Modal30_body1body__RUMuu" style="--textColor:#000000">
			<p style="margin:0">${window.userData.content[0]}</p>
			<p>${window.userData.content[1]}</p>
			<div class="Modal30_foot__UF1GM" style="--borderColor:#DDDDDD;--bgColor:#7D4AEA">
				<input type="text" placeholder="${window.userData.content[2]}" />
				<button type="button">${window.userData.content[3]}</button>
			</div>
		</div>
	</div>
	<div class="Modal30_body2__zxo7o"><img width="400" height="450" src="http://localhost:3000/Modal30/img.png" alt="" />
		<svg width="172" height="93" viewBox="0 0 172 93" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M72.073 92.0162C70.5383 92.1992 68.9821 92.0441 67.5137 91.5618C65.9119 90.8921 64.4769 89.8783 63.3106 88.5921L62.4528 87.5947L54.3622 67.8773L46.2494 48.1369L46.1586 46.8294C46.0404 45.1866 46.3376 43.5405 47.0228 42.0428C47.708 40.5451 48.7592 39.244 50.0795 38.2594C51.1153 37.4943 51.6689 37.2728 82.3342 24.8734C113 12.474 113.553 12.2538 114.861 12.0867C116.497 11.8784 118.16 12.0825 119.698 12.6804C121.235 13.2783 122.599 14.2509 123.666 15.51L124.523 16.5075L132.634 36.2444L140.726 55.9632L140.817 57.2707C140.949 58.9156 140.661 60.5673 139.979 62.07C139.297 63.5728 138.243 64.8773 136.918 65.8607C135.882 66.6266 135.35 66.8273 104.579 79.2461C74.1921 91.5347 73.3007 91.8928 72.0743 92.0105L72.073 92.0162ZM133.75 59.9804C134.214 59.2593 134.416 58.4002 134.321 57.5478C134.262 56.7773 120.338 22.8917 120.152 23.0413C120.089 23.1067 117.126 28.2305 113.566 34.4591C110.025 40.6627 107.022 45.8749 106.939 46.0043C106.773 46.3069 109.373 47.4728 129.597 56.261C130.853 56.7355 132.071 57.3076 133.238 57.9721C132.937 57.9334 126.294 56.3467 118.466 54.4556C110.638 52.5644 104.145 50.9979 103.993 50.9778C102.671 52.4842 101.471 54.0932 100.403 55.7897L97.0489 60.6613L91.2099 59.515C89.2391 59.0613 87.2394 58.7436 85.225 58.5643C85.1632 58.6728 81.6098 64.2769 77.35 71.0061C73.1117 77.7576 69.4556 83.5544 69.2472 83.8578C69.0179 84.1827 69.6071 82.566 70.5478 80.2792C78.6769 60.4321 79.9589 57.1318 79.6347 57.0743C79.483 57.0126 73.6776 55.3495 66.7257 53.3833C59.8175 51.415 54.0763 49.7791 53.9899 49.7749C53.7549 49.7994 67.6757 83.6878 68.1805 84.3023C68.4639 84.6754 68.8233 84.984 69.2349 85.2078C69.6465 85.4316 70.1009 85.5654 70.5681 85.6005L71.4884 85.6556L102.408 73.1239L133.329 60.5929L133.745 59.9868L133.75 59.9804ZM107 37.6547L119.894 21.9934L119.554 21.1179C118.875 19.4527 117.893 18.6292 116.432 18.5182L115.529 18.4451L84.8001 30.8661L54.0666 43.2914L53.4585 43.9651C52.4523 45.0939 52.3756 46.5761 53.2234 48.237L53.5376 48.876L73.7554 51.141C84.8532 52.4109 94.0171 53.4052 94.0379 53.3837C94.0803 53.3398 99.921 46.2903 106.995 37.6569L107 37.6547Z" fill="#7D4AEA"></path>
			<path d="M118.937 42.1331C119.039 41.8965 119.642 42.0164 119.69 42.2738C119.694 42.4448 119.544 42.5117 119.327 42.3867C119.089 42.2818 118.937 42.1776 118.936 42.1338L118.937 42.1331ZM123.825 44.043C123.946 43.7425 124.074 43.6102 124.14 43.7597C124.148 43.8607 124.131 43.962 124.092 44.0555C124.053 44.149 123.993 44.2321 123.916 44.2982C123.748 44.4722 123.703 44.3874 123.825 44.043ZM143.732 52.944C143.852 52.6428 144.001 52.489 144.069 52.6392C144.076 52.7403 144.059 52.8417 144.02 52.9353C143.981 53.0288 143.921 53.112 143.844 53.1783C143.655 53.3739 143.63 53.2668 143.732 52.944ZM135.604 32.5172L134.814 31.6268L136.67 32.0295C139.144 32.4538 141.677 32.4056 144.134 31.8873C146.037 31.5014 150.874 29.8684 150.997 29.5657C151.037 29.4363 150.388 29.2302 149.524 29.1162C148.592 28.9722 147.683 28.7021 146.823 28.3134L145.716 27.7056L147.917 27.2687C151.336 26.623 156.102 23.6637 159.782 19.9451L161.316 18.3582L159.503 18.9194C157.159 19.7431 154.608 19.7618 152.252 18.9725C150.738 18.4338 150.539 18.2901 151.121 18.2144C154.011 17.8981 158.826 15.1947 162.256 11.952C165.296 8.88133 168.016 5.50952 170.373 1.88858C171.159 0.462242 171.18 0.397552 170.49 1.28621C168.489 3.38628 166.145 5.13004 163.558 6.44266C159.394 8.42704 154.228 9.74101 147.655 10.4933C144.023 10.9093 140.417 11.537 136.858 12.3731C135.615 12.7982 134.464 13.4528 133.463 14.3027C131.881 15.633 131.609 16.0018 130.294 18.8084C129.359 20.7895 128.591 22.8449 127.997 24.9534C127.744 26.0313 127.415 27.0898 127.011 28.1207C126.564 28.2775 125.052 22.6102 124.895 20.2741C124.393 12.5996 127.818 6.95313 134.647 4.09539C138.987 2.32161 142.925 1.84034 155.412 1.67578C161.803 1.59419 165.706 1.2422 169.355 0.396687C171.939 -0.216476 171.961 -0.195617 171.69 3.32731C171.556 5.08842 171.274 5.99276 170.022 8.77847C168.751 11.6274 168.296 12.406 166.909 13.8836C165.63 15.2518 165.255 15.8586 165.08 16.7399C164.532 18.8585 163.623 20.8666 162.392 22.6758C161.476 23.8049 160.456 24.8456 159.345 25.7841C158.271 26.7174 157.266 27.7277 156.338 28.8068C154.804 30.6821 152.905 32.2252 150.755 33.3417C148.605 34.4583 146.25 35.125 143.834 35.3011C142.124 35.4792 140.4 35.1678 138.86 34.4032C136.999 33.6555 136.173 33.1964 135.601 32.5158L135.604 32.5172Z" fill="#7D4AEA"></path>
			<path d="M67.9364 66.3235C67.7185 66.1977 67.3211 66.6536 67.4541 66.867C67.5217 67.0158 67.6928 66.9711 67.8171 66.7548C67.9414 66.5384 68.0018 66.345 67.9371 66.3242L67.9364 66.3235ZM65.1521 70.7377C64.8904 70.5696 64.6754 70.5287 64.7207 70.6573C64.7652 70.7523 64.836 70.8324 64.9247 70.8884C65.0134 70.9443 65.1163 70.9735 65.2211 70.9727C65.4792 71.0122 65.4777 70.9259 65.1521 70.7377ZM54.4471 89.5677C54.1652 89.3787 53.9719 89.36 53.9956 89.5096C54.0523 89.5941 54.1261 89.6657 54.2124 89.7198C54.2986 89.7739 54.3952 89.8093 54.496 89.8235C54.7749 89.8414 54.7303 89.7566 54.4471 89.5677ZM48.7724 68.358L48.8758 67.1547L47.6214 68.5848C45.8815 70.372 43.8229 71.8185 41.5518 72.8497C39.3103 73.7902 36.9831 74.5114 34.6026 75.003C34.494 74.9398 34.9123 74.3761 35.5218 73.7887C36.1899 73.1295 36.7597 72.3777 37.2137 71.5563L37.7484 70.3903L35.7299 71.3389C32.5634 72.8191 26.9496 73.2355 21.7821 72.4031L19.5851 72.0458L21.375 71.4213C23.7473 70.6934 25.813 69.2031 27.2521 67.1816C28.1476 65.8609 28.2295 65.6452 27.7206 65.953C25.1745 67.3597 19.6736 68.0118 14.9835 67.4295C10.6875 66.7282 6.47269 65.5978 2.40232 64.0553C0.929921 63.3887 0.885358 63.3456 1.96446 63.6321C4.83448 64.1653 7.77429 64.2063 10.658 63.7533C15.1905 62.9203 20.1492 60.9458 25.8969 57.6729C29.0592 55.8644 32.3296 54.2518 35.6896 52.8441C36.9509 52.4617 38.2743 52.3273 39.5867 52.4484C41.6708 52.5714 42.1237 52.7158 44.8622 54.1849C46.7985 55.2397 48.6463 56.4496 50.3875 57.8025C51.2392 58.5107 52.1342 59.1654 53.0671 59.7626C53.5157 59.6496 51.3423 54.1845 50.0581 52.2283C45.8674 45.7394 39.7636 43.2023 32.5239 44.9079C27.954 45.9981 24.4979 47.9535 14.3676 55.1459C10.6326 57.9536 6.60221 60.3453 2.34813 62.2784C-0.119688 63.2976 -0.118254 63.3407 2.23368 65.9938C3.3992 67.3305 4.18432 67.9211 6.83654 69.4333C9.57289 70.9852 10.3947 71.3178 12.3983 71.6982C14.2523 72.0606 14.9432 72.3084 15.6004 72.9437C17.3164 74.3226 19.2543 75.4 21.3312 76.1299C22.7485 76.5085 24.1978 76.7552 25.6605 76.8669C27.0749 76.9719 28.4787 77.1902 29.8582 77.5198C32.2022 78.138 34.6474 78.2731 37.0453 77.9169C39.4431 77.5608 41.7435 76.7207 43.8066 75.4479C45.2943 74.5731 46.5089 73.3011 47.3142 71.7745C48.0708 70.7722 48.5764 69.6033 48.7888 68.3656L48.7724 68.358Z" fill="#7D4AEA"></path>
		</svg>
	</div>
</div>




`;

  const style = `
  
  
.Modal1_cancel__XIL9t {
position: absolute;
right: .75rem;
top: .75rem;
border-width: 0;
outline: 2px solid transparent;
outline-offset: 2px;
}

  
  
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


.Modal30_body__EffO_ {
position: fixed;
${fixedPosition()};
margin: 2.5rem;

	height: 526px;
	width: 870px;
	border-radius: .75rem;
	font-family: Inter;
}

.Modal30_body1__AjwtO {
	background-color: var(--bgColor);
	position: absolute;
	top: 0;
	left: 0;
	height: 441px;
	width: 740px;
	border-radius: .75rem;
	--tw-shadow: 0 25px 50px -12px rgba(0,0,0,.25);
	--tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);
	box-shadow: var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);
}

.Modal30_body1body__RUMuu {
	color: var(--textColor);
	margin-left: 1.25rem;
	height: 100%;
	width: 350px;
	padding-top: 76px;
	padding-bottom: 76px;
	padding-left: 60px;
}

.Modal30_body1body__RUMuu :first-child {
	font-size: 2.25rem;
	line-height: 2.5rem;
	font-weight: 700;
}

.Modal30_body1body__RUMuu :nth-child(2) {
	margin-top: 1.25rem;
	font-size: 1.25rem;
	line-height: 1.75rem;
}

.Modal30_body2__zxo7o {
	position: absolute;
	right: 0;
	bottom: 0;
	height: 450px;
	width: 400px;
	border-radius: .75rem;
	--tw-shadow: 0 25px 50px -12px rgba(0,0,0,.25);
	--tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);
	box-shadow: var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);
}

.Modal30_body2__zxo7o :nth-child(2) {
	position: absolute;
	left: -86px;
	top: -46.5px;
}

.Modal30_foot__UF1GM {
	margin-top: 2.5rem;
	display: flex;
	width: 100%;
	flex-direction: column;
}

.Modal30_foot__UF1GM :first-child {
	height: 3rem;
	width: -webkit-fit-content;
	width: -moz-fit-content;
	width: fit-content;
	width: 98%;
	border-radius: .5rem;
	border-width: 1px;
	// padding-left: 1.25rem;
	font-size: .875rem;
	line-height: 1.25rem;
	font-weight: 400;
}

.Modal30_foot__UF1GM :first-child::-moz-placeholder {
	--tw-placeholder-opacity: 1;
	color: rgb(75 85 99/var(--tw-placeholder-opacity));
}

.Modal30_foot__UF1GM :first-child::placeholder {
	--tw-placeholder-opacity: 1;
	color: rgb(75 85 99/var(--tw-placeholder-opacity));
}

.Modal30_foot__UF1GM :first-child {
	border-color: var(--borderColor);
}

.Modal30_foot__UF1GM :nth-child(2) {
	height: 3rem;
	width: 100%;
	border-radius: .5rem;
	border-width: 0;
	--tw-text-opacity: 1;
	color: rgb(255 255 255/var(--tw-text-opacity));
	background-color: var(--bgColor);
}

.Modal30_cancelDiv__HrGv6 {
	position: absolute;
	top: .75rem;
	right: .75rem;
}



  `;

  const styleSheet = document.createElement('style');
  styleSheet.innerText = style;
  const font = document.createElement('link');
  font.rel = 'stylesheet';
  font.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@500&family=Poppins:wght@500;600&display=swap';
  document.head.appendChild(font);
  document.head.appendChild(styleSheet);

  let flag = 0;
  if (window.userData.seconds > 0) {
    setTimeout(() => {
      createAndStart(raw);
    }, window.userData.seconds * 1000);
  } else if (window.userData.scroll > 0) {
    window.addEventListener('scroll', () => {
      const maxHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercentage = Math.round((window.pageYOffset * 100) / maxHeight);
      if (scrollPercentage >= window.userData.scroll) {
        flag += 1;
        if (flag === 1) {
          createAndStart(raw);
        }
      }
    });
  } else if (window.userData.seconds === 0 || window.userData.scroll === 0) {
    createAndStart(raw);
  }
};
