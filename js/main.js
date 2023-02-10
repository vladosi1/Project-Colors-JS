alert('"Обновите" страницу или нажмите "Пробел"');

const cols = document.querySelectorAll('.col')

document.addEventListener('keydown' , event =>{
	event.preventDefault()
	if (event.code.toLowerCase() === 'space'){
		setRendomColors()
	} 
})

document.addEventListener('click', event => {
	const type = event.target.dataset.type

	if (type === 'lock') {
		console.log("Выполнено")
		const node = event.target.tagName.toLowerCase() === 'i'
		 ? event.target
		 : event.target.children[0]

		 node.classList.toggle('fa-lock-open')
		 node.classList.toggle('fa-lock')
	} else if (type === 'copy'){
		copyToClickBoard(event.target.textContent)
	}
})

function generationRandomColor () {
	const hexCodes = '0123456789ABCDEF'
	let color = "";
	for ( i = 0; i < 6; i++) {
		color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
	}
	return "#" + color;
}

function setRendomColors () {
	// const = []
	cols.forEach((col)  => {

		const isLocked = col.querySelector('i').classList.contains('fa-lock')
		const text = col.querySelector('h2')
		const button = col.querySelector('button')
		const color = chroma.random()

		if(isLocked){
			return
		}

		text.textContent = color
		col.style.background = color

		setTextColor(text, color)
		setTextColor(button, color)
	})
}
function setTextColor (text, color){
	const luminance = chroma(color).luminance()
	text.style.color = luminance > 0.5 ? 'black' : 'white'

}
setRendomColors();

function copyToClickBoard (text) {
	return navigator.clipboard.writeText(text)
}

function updateColorsHash (colors = []) {
	document.location.hash = colors.toString()
	
}