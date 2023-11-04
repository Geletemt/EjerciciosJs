


 function encriptarParrafo(){
    let texto = document.getElementById('parrafo');

    let textov= texto.value;

    let desplazamiento = document.getElementById('numero').value;
    
    console.log(desplazamiento.length);
    if(desplazamiento.length === 0){

        alert('Debe Introducir un numero de desplazamiento mayor o igual que 0');
        return;
    }
    let txtEncriptado='';
    let caracter;    
    let codigo;

       
    for(let i=0;i< (textov.length);i++){
            
             caracter = textov.charCodeAt(i);
            
            
            if((caracter >='65') && (caracter <='90') || (caracter >='97') && (caracter <='122')){
                
                codigo = parseInt(caracter)+parseInt(desplazamiento);
                
                
                if((/[a-z]/.test(textov[i])) && (codigo>122)){
                    
                    codigo -=26;
                }else if (/[A-Z]/.test(textov[i]) && codigo>90){
                    
                    codigo -=26;
                }
            
            
            }else{
                codigo = caracter;
            }
            caracter = String.fromCharCode(codigo);
            
         txtEncriptado += caracter;  
          
         
    }
    
    document.getElementById('parrafo').value= txtEncriptado;
    return;
    

 }

 const reinicia = ()=>{
    document.getElementById('parrafo').value='';
    document.getElementById('numero').value='';
 }
    
