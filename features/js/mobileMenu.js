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


let espera  =  1000

const botao = document.getElementById("parteInternaBotao")

let condicionalLenguage = true
let mudarLinguagem = () =>{
    if(condicionalLenguage){
        botao.classList.add("toLeftButton")
        botao.classList.remove("toRightButton")
  
        condicionalLenguage = false
        setTimeout(traducao,espera)
        
    }else{
        botao.classList.remove("toLeftButton")
        botao.classList.add("toRightButton")
      
        condicionalLenguage = true
        setTimeout(traducao,espera)
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



        setTimeout(traducao,espera)
    
        
    }else{
        botaoMobile.classList.remove("toLeftButtonMobile")
        botaoMobile.classList.add("toRightButtonMobile")

        condicionalLenguageMobile = true
        setTimeout(traducao,espera)
    }
}


let traducao = () =>{
    var url = 'eng/index.html'
 
    window.location.href = url
}