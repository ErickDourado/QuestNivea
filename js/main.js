let timeout = 0;
let currentImageIndex = -1;
let produtoResposta1;
let produtoResposta2;
let produtoResposta3;
let labelproduto1;  
let labelproduto2;  
let labelproduto3;

let caminhoImagem1 = document.querySelector("#combina1");
let caminhoImagem2 = document.querySelector("#combina2");
let caminhoImagem3 = document.querySelector("#combina3");

const time = 5000;

var botao1 = document.getElementById("inicial");
var botao2 = document.getElementById("pergunta1");
var botao3 = document.getElementById("pergunta2");
var botao4 = document.getElementById("pergunta3");
var botao5 = document.getElementById("combina");

var primeiraPag;

function startTimer() {
  primeiraPag = setTimeout(function (){
    document.getElementById("inicial").style.display = "block";
    document.getElementById("pergunta1").style.display = "none";
    document.getElementById("pergunta2").style.display = "none";
    document.getElementById("pergunta3").style.display = "none";
    document.getElementById("combina").style.display = "none";
  }, 30000);
}

botao1.addEventListener('click', function(){
  clearTimeout(primeiraPag);
  startTimer();
})

botao2.addEventListener('click', function() { 
  clearTimeout(primeiraPag);
  startTimer();
})

botao3.addEventListener('click', function() {
  clearTimeout(primeiraPag);
  startTimer();
})

botao4.addEventListener('click', function() {
  clearTimeout(primeiraPag);
  startTimer();
})

botao5.addEventListener('click', function() {
  clearTimeout(primeiraPag);
  startTimer();
});

function back()
{
  document.getElementById("inicial").style.display = "block";
}

function goQuiz()
{
  document.getElementById("inicial").style.display = "none";
  document.getElementById("pergunta1").style.display = "block";
}

function questionario(pergunta, opcao)
{

  if (pergunta == 1)
  {
      if (opcao == 1)
      {
      //  debugger
        this.produtoResposta1 = 'img/fotos_separadas/COMBINA/MELANCIA-SHINE.png';
        this.labelproduto1 = "MELANCIA SHINE";
      }

      if (opcao == 2)
      {
        this.produtoResposta1 = 'img/fotos_separadas/COMBINA/PEROLA-SHINE.png';
        this.labelproduto1 = "PÉROLA SHINE";
      }

      if (opcao == 3)
      {
        this.produtoResposta1 = 'img/fotos_separadas/COMBINA/SUN-PROTECT.png';
        this.labelproduto1 = "SUN PROTECT";
      }

      document.getElementById("pergunta1").style.display = "none";
      document.getElementById("pergunta2").style.display = "block";

  } else if (pergunta == 2)
  {
    //debugger
      if (opcao == 1)
      {
        this.produtoResposta2 = 'img/fotos_separadas/COMBINA/MED-REPAIR.png';
        this.labelproduto2 = "MED REPAIR";
      }

      if (opcao == 2)
      {
        this.produtoResposta2 = 'img/fotos_separadas/COMBINA/CEREJA-SHINE.png';
        this.labelproduto2 = "CEREJA SHINE";
      }

      if (opcao == 3)
      {
        this.produtoResposta2 = 'img/fotos_separadas/COMBINA/MORANGO-SHINE.png';
        this.labelproduto2 = "MORANGO SHINE";
      }
      document.getElementById("pergunta2").style.display = "none";
      document.getElementById("pergunta3").style.display = "block";


  } else if (pergunta == 3)
  {
   // debugger
      if (opcao == 1)
      {
        this.produtoResposta3 = 'img/fotos_separadas/COMBINA/ORIGINAL-CARE.png';
        this.labelproduto3 = "ORIGINAL CARE";
      }
  
      if (opcao == 2)
      {
        this.produtoResposta3 = 'img/fotos_separadas/COMBINA/AMORA-SHINE.png';
        this.labelproduto3 = "AMORA SHINE";
      }
  
      if (opcao == 3)
      {
        this.produtoResposta3 = 'img/fotos_separadas/COMBINA/ROSA-MOSQUETA.png';
        this.labelproduto3 = "ROSA MOSQUETA";
      } 

      document.getElementById("pergunta3").style.display = "none";
      document.getElementById("combina").style.display = "block";

      caminhoImagem1.setAttribute('src', this.produtoResposta1);
      caminhoImagem2.setAttribute('src', this.produtoResposta2);
      caminhoImagem3.setAttribute('src', this.produtoResposta3);

      document.getElementById("labelproduto1").innerHTML = this.labelproduto1;
      document.getElementById("labelproduto2").innerHTML = this.labelproduto2;
      document.getElementById("labelproduto3").innerHTML = this.labelproduto3;

  }
}

function reinicia()
{
  document.getElementById("combina").style.display = "none";
  back();
}

const handleButton = document.querySelector("#handleButton");
const questionContainer = document.querySelector(".questionContainer");

handleButton.addEventListener("click", () => {
  if (timeout) {
    clearTimeout(timeout);
    timeout = 0;
  }

  const slideContainer = document.querySelector("#slideContainer");

  questionContainer.style.display = "block";

  if (questionContainer.style.display === "block") {
    slideContainer.style.display = "none";
  }
});
