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
      if (window.userData.sendForm || window.userData.sendClick) {
        post();
      }
      document.getElementById('cancelButton').parentElement.remove();
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


<div id="MODAL${window.userData.id}" class="Modal35_body__c6QR1" style="--bgColor:${window.userData.color.background};
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
	<div class="Modal35_textDiv__Pv2Gn">
		<p>${window.userData.content[0]}</p>
		<p>${window.userData.content[1]}</p>
	</div>
	<div class="Modal35_btnDiv__vJfAo">
		<button type="button" class="Modal35_fb__IP3ij"><img src="http://localhost:3000/Modal35/img.png" width="32" height="32" alt="facebook" />
			<p>Facebook</p>
		</button>
		<button type="button" class="Modal35_pt__CGDEN"><img src="http://localhost:3000/Modal35/img_1.png" width="32" height="32" alt="pinterest" />
			<p>Pinterest</p>
		</button>
		<button type="button" class="Modal35_tw___YbMc"><img src="http://localhost:3000/Modal35/img_2.png" width="32" height="32" alt="twitter" />
			<p>Twitter</p>
		</button>
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


.Modal35_body__c6QR1 {
position: fixed;
${fixedPosition()};
margin: 2.5rem;

	display: flex;
	height: 430px;
	width: 480px;
	flex-direction: column;
	border-radius: .75rem;
	padding: 2.5rem;
	text-align: center;
	font-family: Inter;
	--tw-shadow: 0 25px 50px -12px rgba(0,0,0,.25);
	--tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);
	box-shadow: var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);
	background-color: var(--bgColor);
}

.Modal35_textDiv__Pv2Gn {
	color: var(--textColor);
}

.Modal35_textDiv__Pv2Gn :first-child {
	font-size: 1.875rem;
	line-height: 2.25rem;
	font-weight: 700;
}

.Modal35_textDiv__Pv2Gn :nth-child(2) {
	margin-top: 1.25rem;
	font-size: 1.5rem;
	line-height: 2rem;
}

.Modal35_btnDiv__vJfAo {
	margin-top: 2.5rem;
	display: flex;
	flex-direction: column;
	gap: 1.25rem;
}

.Modal35_fb__IP3ij {
	position: relative;
	display: flex;
	height: 3rem;
	width: 100%;
	align-items: center;
	justify-content: center;
	border-radius: .5rem;
	border-width: 0;
	--tw-bg-opacity: 1;
	background-color: rgb(25 119 242/var(--tw-bg-opacity));
	padding-left: .5rem;
	--tw-text-opacity: 1;
	color: rgb(255 255 255/var(--tw-text-opacity));
	outline: 2px solid transparent;
	outline-offset: 2px;
}

.Modal35_fb__IP3ij :first-child {
	position: absolute;
	left: .5rem;
	top: 8px;
}

.Modal35_pt__CGDEN {
	position: relative;
	display: flex;
	height: 3rem;
	width: 100%;
	align-items: center;
	justify-content: center;
	border-radius: .5rem;
	border-width: 0;
	--tw-bg-opacity: 1;
	background-color: rgb(230 0 34/var(--tw-bg-opacity));
	padding-left: .5rem;
	--tw-text-opacity: 1;
	color: rgb(255 255 255/var(--tw-text-opacity));
	outline: 2px solid transparent;
	outline-offset: 2px;
}

.Modal35_pt__CGDEN :first-child {
	position: absolute;
	left: .5rem;
	top: 8px;
}

.Modal35_tw___YbMc {
	position: relative;
	display: flex;
	height: 3rem;
	width: 100%;
	align-items: center;
	justify-content: center;
	border-radius: .5rem;
	border-width: 0;
	--tw-bg-opacity: 1;
	background-color: rgb(30 155 240/var(--tw-bg-opacity));
	padding-left: .5rem;
	--tw-text-opacity: 1;
	color: rgb(255 255 255/var(--tw-text-opacity));
	outline: 2px solid transparent;
	outline-offset: 2px;
}

.Modal35_tw___YbMc :first-child {
	position: absolute;
	left: .5rem;
	top: 8px;
}

.Modal35_cancel__tiQAV {
	position: absolute;
	top: .75rem;
	right: .75rem;
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
