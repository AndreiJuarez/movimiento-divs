const imagen1 = document.getElementById("canvas-1");
const imagen2 = document.getElementById("canvas-2");
const imagen3 = document.getElementById("canvas-3");
const imagen4 = document.getElementById("canvas-4");
const imagen5 = document.getElementById("canvas-5");
const imagen6 = document.getElementById("canvas-6");

//imagen1.style.background='blue';
var puntero=1;

if(puntero===1){
    imagen1.style.background='blue';
}

let movdown=document.addEventListener('keydown', (event)=>{
    
    if(puntero===1){
        imagen1.style.background='blue';
        switch(event.keyCode){
            case 39:
                imagen1.style.background='red';
                imagen2.style.background='blue';
                console.log("Derecha")
                puntero=2;
                console.log(puntero)
            break;

            case 40:
                imagen1.style.background='red';
                imagen4.style.background='blue';
                console.log("Abajo")
                puntero=4;
                console.log(puntero)
            break;
        } 
    }else{
        if(puntero===2){
            switch(event.keyCode){
                case 37:
                    imagen2.style.background='red';
                    imagen1.style.background='blue';
                    console.log("Izquierda")
                    puntero=1;
                    console.log(puntero)
                break;
    
                case 39:
                    imagen2.style.background='red';
                    imagen3.style.background='blue';
                    console.log("Derecha")
                    puntero=3;
                    console.log(puntero)
                break;
    
                case 40:
                    imagen2.style.background='red';
                    imagen5.style.background='blue';
                    console.log("Abajo")
                    puntero=5;
                    console.log(puntero)
                break;
            } 
        }else{
            if(puntero===3){
                switch(event.keyCode){
                    case 37:
                        imagen3.style.background='red';
                        imagen2.style.background='blue';
                        console.log("Izquierda")
                        puntero=2;
                        console.log(puntero)
                    break;
        
                    case 40:
                        imagen3.style.background='red';
                        imagen6.style.background='blue';
                        console.log("Abajo")
                        puntero=6;
                        console.log(puntero)
                    break;
                } 
            }else{
                if(puntero===4){
                    switch(event.keyCode){
                        case 38:
                            imagen4.style.background='red';
                            imagen1.style.background='blue';
                            console.log("Arriba")
                            puntero=1;
                            console.log(puntero)
                        break;
            
                        case 39:
                            imagen4.style.background='red';
                            imagen5.style.background='blue';
                            console.log("Derecha")
                            puntero=5;
                            console.log(puntero)
                        break;
                    } 
                }else{
                    if(puntero===5){
                        switch(event.keyCode){
                            case 37:
                                imagen5.style.background='red';
                                imagen4.style.background='blue';
                                console.log("Izquierda")
                                puntero=4;
                                console.log(puntero)
                            break;
                            case 38:
                                imagen5.style.background='red';
                                imagen2.style.background='blue';
                                console.log("Arriba")
                                puntero=2;
                                console.log(puntero)
                            break;
                
                            case 39:
                                imagen5.style.background='red';
                                imagen6.style.background='blue';
                                console.log("Derecha")
                                puntero=6;
                                console.log(puntero)
                            break;
                        } 
                    }else{
                        if(puntero===6){
                            switch(event.keyCode){
                                case 37:
                                    imagen6.style.background='red';
                                    imagen5.style.background='blue';
                                    console.log("Izquierda")
                                    puntero=5;
                                    console.log(puntero)
                                break;
                                case 38:
                                    imagen6.style.background='red';
                                    imagen3.style.background='blue';
                                    console.log("Arriba")
                                    puntero=3;
                                    console.log(puntero)
                                break;
                            } 
                        }
                    }
                }
            }
        }
    
    }
})


