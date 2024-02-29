// mostrar esconder menus site mobile 

const menu  =  document.getElementById("containerHeaderMobile")

let condicional  = true

let fadeAnimation = () =>{
    if(condicional) {
        menu.classList.add("fadeIn")
        menu.classList.remove("fadeOut")
        condicional = false
  
    }else{
        menu.classList.remove("fadeIn")
        menu.classList.add("fadeOut")
        condicional = true
      
    }
  
}

let espera  =  1000

const botao = document.getElementById("parteInternaBotao")

let condicionalLenguage = false
let mudarLinguagem = () =>{
    if(condicionalLenguage){
        botao.classList.add("toLeftButton")
        botao.classList.remove("toRightButton")
  
        condicionalLenguage = true
        setTimeout(traducao,espera)
        
    }else{
        botao.classList.remove("toLeftButton")
        botao.classList.add("toRightButton")
      
        condicionalLenguage = false
        setTimeout(traducao,espera)
    }
}

// mudança de ingles para portugues mobile


const botaoMobile = document.getElementById("parteInternaBotaoMobile")

let condicionalLenguageMobile = false
let mudarLinguagemMobile = () =>{
    if(condicionalLenguageMobile){
        botaoMobile.classList.add("toLeftButtonMobile")
        botaoMobile.classList.remove("toRightButtonMobile")
     
        condicionalLenguageMobile = true



        setTimeout(traducao,espera)
    
        
    }else{
        botaoMobile.classList.remove("toLeftButtonMobile")
        botaoMobile.classList.add("toRightButtonMobile")

        condicionalLenguageMobile = false
        setTimeout(traducao,espera)
    }
}


let traducao = () =>{
    var url = '../../../index.html'
 
    window.location.href = url
}