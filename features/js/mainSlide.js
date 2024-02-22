//This function performs the automation of the slides on the main page

let currentSlide = 0;

//condicional  para deixar o primeiro  slide abrir corretamente



document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");

  function showSlide() {
    slides.forEach((slide, index) => {
      if (index === currentSlide) {
        slide.style.display = "block";
      } else {
        slide.style.display = "none";
      }
      textMain();
    });
    currentSlide = (currentSlide + 1) % slides.length;
  }

  // Chama showSlide() uma vez para exibir o primeiro slide imediatamente
  showSlide();

  // Define o setInterval após mostrar o primeiro slide
  setInterval(showSlide, 7000); // Muda de slide a cada 7 segundos
});


let textMain = () => {
  const textSign = document.getElementById("textSign")
  let textMain = document.getElementById('textMain')
  let textInside = document.getElementById('textInside')


  switch (currentSlide) {
    case 0:
      textSign.classList.add("orange","toRight")
      textSign.classList.remove("green","toLeft")
      textInside.innerHTML=`
      <h2>Do Brasil para o Mundo:</h2>
      <p>Oferecemos gengibre de alta qualidade,
          cultivado com cuidado e dedicação
          em solo brasileiro.</p>
      `
    
      break

      case 1:
     
      textSign.classList.add("green","toLeft")
      textSign.classList.remove("orange","toRight")
      textMain.style.left = "40%"

      textInside.innerHTML=`
      <h2>Nossa empresa é sua
      conexão global com 
      gengibre Premium</h2>
      <p>Comprometida com a excelência em exportação 
      e qualidade em cada entrega.</p>
      `
      break

      case 2:
        
        textSign.classList.add("orange",)
        textSign.classList.remove("green","toLeft","toRight")
        textMain.style.left = "0px"
        textInside.innerHTML=`
        <h2>Sabor Brasileiro que 
        atravessa fronteiras</h2>
        <p>Exportamos gengibre fresco, proporcionando um 
        toque único e saudável às cozinhas internacionais.</p>
        `
      break
  }

}