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
      document.getElementById('cancelButton').parentElement.remove();
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


<div id="MODAL${window.userData.id}" class="Modal6_body__1ogtJ" style="--bgColor:${window.userData.color.background};
--svgColor:${window.userData.color.theme};
--textColor:${window.userData.color.text};
--borderColor:${window.userData.color.border};
--themeColor:${window.userData.color.theme};
transform:scale(${scale()});transform-origin:${origin()}">
	<button id="cancelButton" type="button" class="Modal1_cancel__XIL9t">
<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.4" d="M18 3.00001C15.0333 3.00001 12.1332 3.87974 9.66645 5.52796C7.19972 7.17618 5.27713 9.51886 4.14181 12.2598C3.0065 15.0006 2.70945 18.0166 3.28823 20.9264C3.86701 23.8361 5.29562 26.5088 7.3934 28.6066C9.49119 30.7044 12.1639 32.133 15.0737 32.7118C17.9834 33.2906 20.9994 32.9935 23.7403 31.8582C26.4811 30.7229 28.8238 28.8003 30.472 26.3336C32.1203 23.8668 33 20.9667 33 18C33.0018 16.0297 32.6151 14.0783 31.8619 12.2576C31.1088 10.4369 30.004 8.78254 28.6107 7.3893C27.2175 5.99605 25.5632 4.89123 23.7424 4.13806C21.9217 3.38489 19.9704 2.99816 18 3.00001ZM18 30C15.6266 30 13.3066 29.2962 11.3332 27.9776C9.35977 26.6591 7.8217 24.7849 6.91345 22.5922C6.0052 20.3995 5.76756 17.9867 6.23058 15.6589C6.69361 13.3312 7.8365 11.193 9.51473 9.51473C11.193 7.8365 13.3312 6.69361 15.6589 6.23058C17.9867 5.76756 20.3995 6.0052 22.5922 6.91345C24.7849 7.8217 26.6591 9.35977 27.9776 11.3332C29.2962 13.3066 30 15.6266 30 18C29.9958 21.1813 28.7301 24.2311 26.4806 26.4806C24.2311 28.7301 21.1813 29.9958 18 30ZM23.385 10.5L18 15.885L12.615 10.5L10.5 12.615L15.885 18L10.5 23.385L12.615 25.5L18 20.115L23.385 25.5L25.5 23.385L20.115 18L25.5 12.615L23.385 10.5Z" fill="black"/>
</svg>
</button>
	<div class="Modal6_topDiv__0omD5">
		<svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M57.0519 61.0569C59.356 61.0569 61.2239 59.0906 61.2239 56.6649C61.2239 54.2393 59.356 52.2729 57.0519 52.2729C54.7478 52.2729 52.8799 54.2393 52.8799 56.6649C52.8799 59.0906 54.7478 61.0569 57.0519 61.0569Z" fill="#7D4AEA"></path>
			<path d="M37.1965 33.375C37.2301 32.8025 37.1457 32.2293 36.9486 31.6908C36.7515 31.1523 36.4459 30.66 36.0507 30.2444C35.6555 29.8289 35.1792 29.499 34.6512 29.2751C34.1233 29.0512 33.555 28.9382 32.9815 28.943C32.4087 28.9398 31.8413 29.0539 31.3143 29.2784C30.7873 29.5028 30.3119 29.8329 29.9173 30.2481C29.5228 30.6634 29.2175 31.1551 29.0202 31.6929C28.823 32.2306 28.738 32.8031 28.7705 33.375C28.7355 33.9496 28.8184 34.5252 29.0141 35.0666C29.2099 35.6079 29.5144 36.1034 29.9089 36.5226C30.3034 36.9418 30.7795 37.2759 31.3079 37.5041C31.8363 37.7324 32.4059 37.8501 32.9815 37.85C33.5578 37.8517 34.1283 37.7351 34.6577 37.5074C35.187 37.2797 35.664 36.9458 36.0592 36.5263C36.4543 36.1068 36.7591 35.6107 36.9547 35.0686C37.1504 34.5266 37.2327 33.9502 37.1965 33.375Z" fill="#7D4AEA"></path>
			<path d="M80.984 32.76C79.627 28.388 83.937 20.948 81.402 17.308C78.847 13.632 70.74 15.638 67.227 12.962C63.75 10.313 63.082 1.60701 58.904 0.18801C54.874 -1.18199 49.463 5.40401 44.996 5.40401C40.529 5.40401 35.122 -1.18199 31.091 0.18801C26.914 1.60801 26.246 10.313 22.769 12.962C19.256 15.637 11.149 13.63 8.594 17.308C6.062 20.948 10.372 28.388 9.016 32.76C7.707 36.98 0 40.324 0 45C0 49.676 7.707 53.021 9.016 57.241C10.372 61.615 6.062 69.053 8.593 72.693C11.149 76.369 19.256 74.363 22.768 77.039C26.246 79.688 26.913 88.394 31.091 89.813C35.122 91.183 40.532 84.596 45 84.596C49.468 84.596 54.878 91.183 58.908 89.813C63.086 88.393 63.753 79.688 67.231 77.039C70.744 74.363 78.849 76.369 81.406 72.693C83.937 69.052 79.627 61.614 80.984 57.241C82.293 53.021 90 49.677 90 45C90 40.323 82.293 36.98 80.984 32.76ZM23.852 33.375C23.852 27.851 27.635 23.928 32.982 23.928C38.347 23.928 42.082 27.851 42.082 33.375C42.082 38.942 38.294 42.865 32.982 42.865C27.635 42.864 23.852 38.941 23.852 33.375ZM35.829 65.502H29.929L53.529 24.502H59.429L35.829 65.502ZM57.052 66.072C51.752 66.072 47.96 62.192 47.96 56.666C47.96 51.14 51.748 47.266 57.052 47.266C62.356 47.266 66.152 51.146 66.152 56.666C66.152 62.186 62.36 66.071 57.052 66.071V66.072Z" fill="#7D4AEA"></path>
		</svg>
		<div class="Modal6_textDiv__fHA0Y">
			<p>${window.userData.content[0]}</p>
			<p>${window.userData.content[1]}</p>
		</div>
	</div>
	<div class="Modal6_bottomDiv__L1IP_">
		<div class="Modal6_inputDiv__5rJw7">
			<input type="text" placeholder="${window.userData.content[2]}" />
		</div>
		<div class="Modal6_btnDiv__J8_Hu">
			<button type="button">${window.userData.content[3]}</button>
			<button type="button">${window.userData.content[4]}</button>
		</div>
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

  
  .Modal6_body__1ogtJ {
  
	position: fixed;
${fixedPosition()};
margin: 2.5rem;

	display: flex;
	height: 446px;
	width: 480px;
	flex-direction: column;
	justify-content: center;
	border-radius: .75rem;
	padding: 2.5rem;
	font-family: Inter;
	--tw-shadow: 0 25px 50px -12px rgba(0,0,0,.25);
	--tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);
	box-shadow: var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);
	background-color: var(--bgColor);
}

.Modal6_bottomDiv__L1IP_,.Modal6_topDiv__0omD5 {
	flex-basis: 50%;
	text-align: center;
}

.Modal6_topDiv__0omD5 :first-child {
	margin-left: auto;
	margin-right: auto;
}

.Modal6_topDiv__0omD5 :first-child,.Modal6_topDiv__0omD5 :nth-child(2),.Modal6_topDiv__0omD5 :nth-child(3) {
	fill: var(--themeColor);
}

.Modal6_textDiv__fHA0Y {
	text-align: center;
}

.Modal6_textDiv__fHA0Y :first-child {
	margin-top: 1.25rem;
	font-size: 1.875rem;
	line-height: 2.25rem;
	font-weight: 600;
}

.Modal6_textDiv__fHA0Y :nth-child(2) {
	margin-top: 1.25rem;
	font-size: 1.25rem;
	line-height: 1.75rem;
}

.Modal6_inputDiv__5rJw7 {
	margin-top: 1.25rem;
}

.Modal6_inputDiv__5rJw7 :first-child {
	height: 3rem;
	width: 100%;
	border-radius: .5rem;
	border-width: 1px;
	padding-left: 1.25rem;
	font-weight: 400;
}

.Modal6_inputDiv__5rJw7 :first-child::-moz-placeholder {
	--tw-placeholder-opacity: 1;
	color: rgb(75 85 99/var(--tw-placeholder-opacity));
}

.Modal6_inputDiv__5rJw7 :first-child::placeholder {
	--tw-placeholder-opacity: 1;
	color: rgb(75 85 99/var(--tw-placeholder-opacity));
}

.Modal6_inputDiv__5rJw7 :first-child {
	border-color: var(--borderColor);
}

.Modal6_btnDiv__J8_Hu {
	margin-top: 1.25rem;
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: center;
	gap: 1.25rem;
}

.Modal6_btnDiv__J8_Hu :first-child {
	height: 3rem;
	width: 100%;
	border-radius: .5rem;
	border-width: 1px;
	outline: 2px solid transparent;
	outline-offset: 2px;
	border-color: var(--borderColor);
}

.Modal6_btnDiv__J8_Hu :last-child {
	height: 3rem;
	width: 100%;
	border-radius: .5rem;
	border-width: 0;
	--tw-text-opacity: 1;
	color: rgb(255 255 255/var(--tw-text-opacity));
	background-color: var(--themeColor);
}

.Modal6_cancel__X7Qg9 {
	position: absolute;
	right: .75rem;
	top: .75rem;
	border-width: 0;
	outline: 2px solid transparent;
	outline-offset: 2px;
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
