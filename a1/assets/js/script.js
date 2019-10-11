//player object

let player = {
	character : $("#player"),
	playerPos : 0
}


//ai object
const ai = {
	character : $("#ai"),
	aiPos : 0
}

let playerPosition = 0;
let aiPosition = 0;


//move the player function

	$('#run').click(function(){
		// console.log($(this))

		$(player.character).animate({
			'left': (playerPosition+=100)+ 'px'
		}, 0)
		console.log(playerPosition)
		player.playerPos = playerPosition
		result()
	})

// Ai Move
	const aiMoveEasy = ()=>{
		if(ai.aiPos < 1000){
			ai.character.animate({
			'left':(aiPosition+=100)+'px'
			},800)} else{
				return true
			}
			console.log(aiPosition)
			ai.aiPos = aiPosition
			result()
			setTimeout(aiMoveEasy, 800)
		}

	const aiMoveMedium = ()=>{
		if(ai.aiPos < 1000){
			ai.character.animate({
			'left':(aiPosition+=100)+'px'
			}, 500)} else{
				return true
			}
			console.log(aiPosition)
			ai.aiPos = aiPosition
			setTimeout(aiMoveMedium, 500)
			result()
		}

	const aiMoveHard = ()=>{
		if(ai.aiPos < 1000){
			ai.character.animate({
			'left':(aiPosition+=100)+'px'
			},200 )} else{
				return true
			}
			console.log(aiPosition)
			ai.aiPos = aiPosition
			result()
			setTimeout(aiMoveHard, 200)
		}

	$("#easy").click(function(){
	aiMoveEasy()
	})

	$("#medium").click(function(){
		aiMoveMedium()
	})

	$("#hard").click(function(){
		aiMoveHard()
	})
// end AI move

const reset = function(){
	playerPosition = 0;
	aiPosition = 0;
}

const result =() => {
	if(player.playerPos === 1000){
		// custom_alert( "Pacman WINS!", "Congratulations")
		alert("Pacman WINS!" )
		// Must reset 
		location.reload(true)
		

	}else if(ai.aiPos === 1000){
		// custom_alert( "Pacman LOST!", "Try Again")
		alert("Pacman LOST!!")	
		location.reload(true)
	}

}


// function custom_alert(message, title ) {
//     if ( !title )
//         title = 'Alert';

//     if ( !message )
//         message = 'No Message to Display.';

//     $('#alert').html( message ).dialog({
//         title: title,
//         resizable: false,
//         modal: true,
//         buttons: {
//             'Ok': function()  {
//                 $( this ).dialog( 'close' );
//                 reset()
//             }
//         }
//     });
// }