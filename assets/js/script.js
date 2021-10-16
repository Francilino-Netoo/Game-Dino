var jump = false

function jumpl(){
	var play = document.getElementById("play")
	var cacto = document.getElementById("cacto")
	var zumbizim = document.getElementById("zumbizim")
	var pauzim = document.getElementById("pauzim")
	if (play.className != "jump"){
		play.classList.add("jump")
		jump = true
		setTimeout(()=>{
			play.classList.remove("jump")
			jump = false
		}, 800)
		function morte(){
			var cactoL = parseInt(window.getComputedStyle(cacto).getPropertyValue("left"))
			var zumbizimL = parseInt(window.getComputedStyle(zumbizim).getPropertyValue("left"))
			var pauzimL = parseInt(window.getComputedStyle(pauzim).getPropertyValue("left"))

			if(cactoL < 20 && jump == false){
				alert("Game Over")	 
			}
			if(zumbizimL < 20 && jump == false){
				alert("Game Over")	 
			}
			if(pauzimL < 20 && jump == false){
				alert("Game Over")	 
			}
		}   
		setInterval(morte, 20)
	}
}      