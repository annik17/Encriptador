const areaTexto = document.querySelector(".area_texto");
const mensaje = document.querySelector(".area_mensaje");
const cajaTexto= document.querySelector(".caja__mensaje");
const alerta = document.querySelector(".texto__informacion");


/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/




function botonEnc (){
    const textoEncriptado = encriptar(areaTexto.value);
    mensaje.value= textoEncriptado;

    areaTexto.value = "";
    mensaje.style.backgroundImage = "none";
    cajaTexto.textContent = "";
    
}


function encriptar(mensajeEncriptado){

    let texto = areaTexto.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " );

    let matrizLlave = [["e","enter"], ["i", "imes"], ["a", "ai"],["o", "ober"],["u","ufat"]];
    mensajeEncriptado = mensajeEncriptado.toLowerCase();


    if(texto == ""){
        alerta.textContent= "El campo de texto no debe estar vacio";
        alerta.style.color = "#00008b";  

    }else if( texto !== txt){
        alerta.textContent= "El texto no debe tener acentos o caracteres especiales";
        alerta.style.color = "#00008b"; 
       

    } else{
        
        for( let i =0; i<matrizLlave.length; i++){

            if(mensajeEncriptado.includes(matrizLlave[i][0])){
                mensajeEncriptado = mensajeEncriptado.replaceAll(matrizLlave[i][0], matrizLlave[i][1]);
            
            
            }
        }


    }
    
    return mensajeEncriptado;

}
   


function botonDes (){
    const textoEncriptado = desencriptar (areaTexto.value);
    mensaje.value= textoEncriptado;
    areaTexto.value = "";
    mensaje.style.backgroundImage = "none" ;
    cajaTexto.textContent = "";
}

function desencriptar(mensajeDesencriptado){

    let texto = areaTexto.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " );
    
    let matrizLlave = [["e","enter"], ["i", "imes"], ["a", "ai"],["o", "ober"],["u","ufat"]];
    mensajeDesencriptado = mensajeDesencriptado.toLowerCase()

    if(texto == ""){
        alerta.textContent= "El campo de texto no debe estar vacio";
        alerta.style.color = "#00008b";  

    }else if( texto !== txt){
        alerta.textContent= "El texto no debe tener acentos o caracteres especiales";
        alerta.style.color = "#00008b"; 
       

    } else{

        for( let i =0; i<matrizLlave.length; i++){
            if(mensajeDesencriptado.includes(matrizLlave[i][0])){
                mensajeDesencriptado = mensajeDesencriptado.replaceAll(matrizLlave[i][1], matrizLlave[i][0])
            }
        }
    }

    return mensajeDesencriptado
}


function botonCopiar(){
    mensaje.select();
    mensaje.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(mensaje.value);

}


