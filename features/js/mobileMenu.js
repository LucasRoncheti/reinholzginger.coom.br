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


// mudança de ingles para portugues desktop


const botao = document.getElementById("parteInternaBotao")

let condicionalLenguage = true
let mudarLinguagem = () =>{
    if(condicionalLenguage){
        botao.classList.add("toLeftButton")
        botao.classList.remove("toRightButton")
        console.log("anters do false")
        condicionalLenguage = false
        
    }else{
        botao.classList.remove("toLeftButton")
        botao.classList.add("toRightButton")
        console.log("anters do true")
        condicionalLenguage = true
    }
}

// mudança de ingles para portugues mobile


const botaoMobile = document.getElementById("parteInternaBotaoMobile")

let condicionalLenguageMobile = true
let mudarLinguagemMobile = () =>{
    if(condicionalLenguageMobile){
        botaoMobile.classList.add("toLeftButtonMobile")
        botaoMobile.classList.remove("toRightButtonMobile")

        condicionalLenguageMobile = false
        
    }else{
        botaoMobile.classList.remove("toLeftButtonMobile")
        botaoMobile.classList.add("toRightButtonMobile")

        condicionalLenguageMobile = true
    }
}