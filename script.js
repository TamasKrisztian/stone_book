//1. Tervezzük meg lépésenként a feladatot mielőtt nekiugrunk megcsinálni
//2. Legyen meg rendesen a szintaktika utána töltsük fel a kódot tartalommal
//3. A kód helyes elrendezése (tabolás, üres sorok kihagyása)

/* HTML 
	1: 	<div id="imgContainer">
				<div id="imgDiv">
					<img src="img/10.jpg" alt="img" />
					<div id="imgCover"></div>
				</div>
				<p id="imgDesc">I am also a passionate photographer.</p>
			</div>

			Ne féljünk diveket használni mint containerek.

	2: 	<body>
				<div id="root"></div>
			</body>

			Néha elég egy div is az oldalunkon.

	3: 	<link rel="stylesheet" href="./style.scss">
			<script src="./script.js"></script>

			Soha ne felejtsük el a css-t és a scriptjeinket beágyazni.
*/

/* CSS 
	1: 	h1 {
				height: 100%;
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				justify-content: center;
				font-size: calc(3.5vw + 3.5vh);
				font-family: "Playfair Display", serif;
				font-weight: 400;
			}

			display flex-el könnyen oszlopba rendezhetjük az elemeinket.

	2:	.white {
				position: absolute;
				top: 0;
				right: 0;
				height: 100%;
				width: 100%;
				transform-origin: top right;
				transform: scaleX(0);
			}

			Ha el akarunk helyezni vmit az oldalon a positiont meg kell adni

	3: 	@keyframes skewer {
				from {
					transform: scaleX(0) skewX(20deg);
				}
				to {
					transform: scaleX(1) skewX(0);
				}
  		}
			Animációknál fontos mit transzformálunk elször.
*/

/* JS 
	1: 	const root = document.getElementById("root"); még a kód elején tároljunk el fontosabb változókat

	2:	function gameOverText() {		
			let gameOverText = document.getElementById("game-over-text");
			gameOverText.classList.remove("dissapear");
			gameOverText.classList.add("activeHs");
			}

			Class hozzáadásának és elvételének az ereje.

	3: 	function roundToTwo(floatNum) {
  			return Math.round((floatNum + Number.EPSILON) * 100) / 100;
			}

			Ha valamit többször fel akarunk használni azt szervezzük ki külön függvénybe.
*/

function pageLoad() {

	let root = document.getElementById("root");
	let notes = [];

	notes.push({
		tag: "div",
		content: `
		HTML 1: Ne féljünk diveket használni mint containerek.
		`
	});

	notes.push({
		tag:"code",
		content: `
		&#60;div id="imgContainer"&#62;
			&#60;div id="imgDiv"&#62;
				&#60;img src="img/10.jpg" alt="img" /&#62; &#60;div id="imgCover"&#62;&#60;/div&#62;
			&#60;/div&#62;
			&#60;p id="imgDesc"&#62;I am also a passionate photographer.&#60;/p&#62;
		&#60;/div&#62;
		`
	});
	
	
	notes.push({
		tag: "div",
		content: `
		HTML 2:	Néha elég egy div is az oldalunkon.
		`
	});
	
	notes.push({
		tag:"code",
		content: `
		&#60;body&#62;
			&#60;div id="root"&#62;&#60;/div&#62;
		&#60;/body&#62;
		`
	});
	notes.push({
		tag: "div",
		content: `
		HTML 3:	Soha ne felejtsük el a css-t és a scriptjeinket beágyazni.
		`
	});
	
	notes.push({
		tag:"code",
		content: `
		&#60;link rel="stylesheet" href="./style.scss"&#62;
		&#60;script src="./script.js"&#62;&#60;/script&#62;
		`
	});
	notes.push({
		tag: "div",
		content: `
		CSS 1:	display flex-el könnyen oszlopba rendezhetjük az elemeinket.
		`
	});
	
	notes.push({
		tag:"code",
		content: `
		h1 {
			height: 100%;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;
			font-size: calc(3.5vw + 3.5vh);
			font-family: "Playfair Display", serif;
			font-weight: 400;
		}
		`
	});

	notes.push({
		tag: "div",
		content: `
		CSS 2:	Ha el akarunk helyezni vmit az oldalon a positiont meg kell adni.
		`
	});
	
	notes.push({
		tag:"code",
		content: `
		.white {
				position: absolute;
				top: 0;
				right: 0;
				height: 100%;
				width: 100%;
				transform-origin: top right;
				transform: scaleX(0);
			}
		`
	});

	notes.push({
		tag: "div",
		content: `
		CSS 3:	Animációknál fontos mit transzformálunk elször..
		`
	});
	
	notes.push({
		tag:"code",
		content: `
		@keyframes skewer {
			from {
				transform: scaleX(0) skewX(20deg);
			}
			to {
				transform: scaleX(1) skewX(0);
			}
		}
		`
	});

	notes.push({
		tag: "div",
		content: `
		JS 1: Még a kód elején tároljunk el fontosabb változókat
		`
	});
	
	notes.push({
		tag:"code",
		content: `
		const root = document.getElementById("root"); 
		`
	});

	notes.push({
		tag: "div",
		content: `
		JS 2: Class hozzáadásának és elvételének az ereje.
		`
	});
	
	notes.push({
		tag:"code",
		content: `
		function gameOverText() {		
			let gameOverText = document.getElementById("game-over-text");
			gameOverText.classList.remove("dissapear");
			gameOverText.classList.add("activeHs");
			}
		`
	});

	notes.push({
		tag: "div",
		content: `
		JS 3: Ha valamit többször fel akarunk használni azt szervezzük ki külön függvénybe.
		`
	});
	
	notes.push({
		tag:"code",
		content: `
		function roundToTwo(floatNum) {
			return Math.round((floatNum + Number.EPSILON) * 100) / 100;
		}
		`
	});

	for (const [i, note] of notes.entries()) {
		if (i % 2 === 0) {
			root.insertAdjacentHTML("beforeend", `
			<${note.tag}>${note.content}</${note.tag}>
			`);

		}
		else {
			root.insertAdjacentHTML("beforeend", `
			<pre><${note.tag}>${note.content}</${note.tag}></pre>
			`);
		}
	}

	document.querySelectorAll('code').forEach((block) => {
    hljs.highlightBlock(block);
	}); 

}

window.addEventListener("load", pageLoad);