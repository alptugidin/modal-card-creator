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


<div id="MODAL${window.userData.id}" class="Modal31_body__gac9z" style="--bgColor:${window.userData.color.background};
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
	<div class="Modal31_main__DvSdk">
		<div>
			<svg width="101" height="101" viewBox="0 0 101 101" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M101 15.9002L43.9501 73.0002L22.7501 51.8002L29.8001 44.7502L43.9501 58.9002L93.9501 8.90018L101 15.9002ZM89.9501 41.1002C91.7902 49.1821 91.0724 57.6361 87.8962 65.2921C84.72 72.9481 79.2424 79.4274 72.2216 83.8333C65.2009 88.2391 56.9841 90.3536 48.7088 89.884C40.4334 89.4143 32.5086 86.3839 26.0313 81.2121C19.5541 76.0402 14.8447 68.9828 12.555 61.0166C10.2653 53.0505 10.5086 44.5695 13.2511 36.7477C15.9937 28.9259 21.0998 22.15 27.8629 17.3579C34.626 12.5659 42.7114 9.99467 51.0001 10.0002C58.5848 9.99112 66.0125 12.1604 72.4001 16.2502L79.6001 9.05018C71.2323 3.14792 61.24 -0.0139771 51.0001 0.000175827C40.3356 -0.0280606 29.9399 3.34528 21.3238 9.62995C12.7078 15.9146 6.32037 24.7831 3.08984 34.9467C-0.140686 45.1102 -0.0459762 56.0391 3.36021 66.1451C6.76639 76.2511 13.3065 85.0076 22.0302 91.142C30.7539 97.2764 41.2065 100.469 51.8689 100.256C62.5314 100.043 72.8481 96.4353 81.3197 89.9573C89.7914 83.4793 95.9765 74.4685 98.9763 64.2345C101.976 54.0005 101.634 43.0765 98.0001 33.0502L89.9501 41.1002Z" fill="#7D4AEA"></path>
			</svg>
		</div>
		<div class="Modal31_textDiv__q3UKd" style="--textColor:#000000">
			<p>${window.userData.content[0]}</p>
			<p>${window.userData.content[1]}!</p>
		</div>
		<div class="Modal31_btnDiv__XxYxM" style="--bgColor:#7D4AEA">
			<button type="button">${window.userData.content[2]}</button>
			<button type="button">${window.userData.content[3]}</button>
		</div>
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


.Modal31_body__gac9z {
position: fixed;
${fixedPosition()};
margin: 2.5rem;


	display: flex;
	height: 440px;
	width: 480px;
	justify-content: center;
	border-radius: .75rem;
	// padding: 2.5rem;
	text-align: center;
	font-family: Inter;
	--tw-shadow: 0 25px 50px -12px rgba(0,0,0,.25);
	--tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);
	box-shadow: var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);
	background-color: var(--bgColor);
}

.Modal31_main__DvSdk :first-child {
	width: 100%;
	margin-top:15px;
}

.Modal31_textDiv__q3UKd {
	color: var(--textColor);
	margin-top: 2.5rem;
}

.Modal31_textDiv__q3UKd :first-child {
	font-size: 1.875rem;
	line-height: 2.25rem;
}

.Modal31_textDiv__q3UKd :nth-child(2) {
	margin-top: 1.25rem;
	font-size: 1.25rem;
	line-height: 1.75rem;
}

.Modal31_btnDiv__XxYxM {
	margin-top: 2.5rem;
	display: flex;
	width: 100%;
	flex-direction: column;
}

.Modal31_btnDiv__XxYxM :first-child {
	height: 3rem;
	border-radius: .5rem;
	border-width: 0;
	--tw-text-opacity: 1;
	color: rgb(255 255 255/var(--tw-text-opacity));
	background-color: var(--bgColor);
}

.Modal31_btnDiv__XxYxM :nth-child(2) {
	height: 3rem;
	border-width: 0;
}

.Modal31_cancelDiv__7UZ9g {
	position: absolute;
	top: .75rem;
	right: .75rem;
	border-width: 0;
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
