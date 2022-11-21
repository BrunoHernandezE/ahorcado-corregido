const words = [
  "PASTILLA",
  "CELULAR",
  "CARRO",
  "CASA",
  "CUBO",
  "PERSONA",
  "PERRO",
  "TERMO",
  "AGUA",
  "RADIO"
];
const startGame = document.querySelector(".buttons--start");
const goBack = document.querySelector(".buttons--return");

let canvas = document.getElementById("game--board");
let drawer = canvas.getContext("2d");


const pickWord = () => {
  return words[Math.floor(Math.random() * words.length)]
}

const drawGallow = () => {
  drawer.moveTo(0, 0)
  drawer.lineWidth = 5;
  drawer.lineCap = "round";
  drawer.lineJoin = "round"
  drawer.fillStyle = "#FFF";
  drawer.strokeStyle = "#FFF"

  drawer.beginPath() // Draw Gallow Base
  drawer.moveTo(30 , canvas.clientHeight - canvas.clientHeight / 3)
  drawer.lineTo(canvas.clientWidth - canvas.clientWidth / 4, canvas.clientHeight - canvas.clientHeight / 3)
  drawer.stroke();
  drawer.closePath();

  drawer.beginPath() // Draw Gallow Pole 
  drawer.moveTo(canvas.clientWidth * .2, canvas.clientHeight - canvas.clientHeight / 3)
  drawer.lineTo(canvas.clientWidth * .2, canvas.clientHeight * .1)
  drawer.stroke()
  drawer.closePath()

  drawer.beginPath() // Draw Gallow Hook
  drawer.moveTo(canvas.clientWidth * .2, canvas.clientHeight * .1)
  drawer.lineTo(canvas.clientWidth * .55, canvas.clientHeight * .1)
  drawer.stroke()
  drawer.closePath()

  drawer.beginPath() // Draw Gallow Rope
  drawer.moveTo(canvas.clientWidth * .55, canvas.clientHeight * .1)
  drawer.lineTo(canvas.clientWidth * .55, canvas.clientHeight * .2)
  drawer.stroke()
  drawer.closePath()

}


const drawHangman = {
  createHead: () => {
    drawer.beginPath() // Draw Head
    drawer.arc(canvas.clientWidth * .55, canvas.clientHeight * .25, 15, 0, 2*Math.PI)
    drawer.stroke()
    drawer.closePath()
  },
  createBody: () => {
    drawer.beginPath() // Draw Body
    drawer.moveTo(canvas.clientWidth * .55, canvas.clientHeight * .30)
    drawer.lineTo(canvas.clientWidth * .55, canvas.clientHeight * .45)
    drawer.stroke()
    drawer.closePath()
  },
  createLeftLeg: () => {
    drawer.beginPath() // Draw Left Leg
    drawer.moveTo(canvas.clientWidth * .55, canvas.clientHeight * .45)
    drawer.lineTo(canvas.clientWidth * .50, canvas.clientHeight * .52)
    drawer.stroke()
    drawer.closePath()
  },
  createRigthLeg: () => {
    drawer.beginPath() // Draw Rigth Leg
    drawer.moveTo(canvas.clientWidth * .55, canvas.clientHeight * .45)
    drawer.lineTo(canvas.clientWidth * .60, canvas.clientHeight * .52)
    drawer.stroke()
    drawer.closePath()
  },
  createLeftArm: () => {
    drawer.beginPath() // Draw Left Arm
    drawer.moveTo(canvas.clientWidth * .55, canvas.clientHeight * .30)
    drawer.lineTo(canvas.clientWidth * .50, canvas.clientHeight * .37)
    drawer.stroke()
    drawer.closePath()
  },
  createRigthArm: () => {
    drawer.beginPath() // Draw Rigth Arm
    drawer.moveTo(canvas.clientWidth * .55, canvas.clientHeight * .30)
    drawer.lineTo(canvas.clientWidth * .60, canvas.clientHeight * .37)
    drawer.stroke()
    drawer.closePath()
  }
}
const drawLines = () => {
  drawer.moveTo(0, 0)
  drawer.lineCap = "round";
  drawer.lineJoin = "round"
  drawer.fillStyle = "#FFF";
  drawer.strokeStyle = "#FFF"

  drawer.beginPath()
  drawer.moveTo(canvas.clientWidth)

}

const startBoard = () => {
  let word = pickWord()
  drawer.fillStyle = "#232323";
  drawer.fillRect(0, 0, canvas.clientHeight, canvas.clientWidth)
  drawGallow()
  // drawHangman.createHead()
  // drawHangman.createBody()
  // drawHangman.createLeftLeg()
  // drawHangman.createRigthLeg()
  // drawHangman.createLeftArm()
  // drawHangman.createRigthArm ()
  // console.log("drawHangman")

};

let fails = 0


const boton = document.querySelector(".boton--pitudo");
boton.addEventListener("click", () => {
  console.log(fails);
  fails++
  switch(fails) {
    case 1:
      drawHangman.createHead();
      break;
    case 2:
      drawHangman.createBody();
      break;
    case 3:
      drawHangman.createRigthArm();
      break;
    case 4:
      drawHangman.createLeftArm()
      break;
    case 5:
      drawHangman.createLeftLeg();
      break;
    case 6:
      drawHangman.createRigthLeg();
      break;
  }
  console.log(fails);
})

startGame.addEventListener("click", startBoard);

goBack.addEventListener("click", () => {
  location.href = "../index.html";
});


