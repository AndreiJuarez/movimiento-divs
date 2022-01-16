const imagen1 = document.getElementById("canvas-1");
const imagen2 = document.getElementById("canvas-2");
const imagen3 = document.getElementById("canvas-3");
const imagen4 = document.getElementById("canvas-4");
const imagen5 = document.getElementById("canvas-5");
const imagen6 = document.getElementById("canvas-6");

$('#slide-1').slideDown();
$('#slide-2').slideUp();
$('#slide-3').slideUp();
$('#slide-4').slideUp();
$('#slide-5').slideUp();
$('#slide-6').slideUp();





//imagen1.style.background='blue';
var puntero=1;

if(puntero===1){
    $('#slide-1').slideDown();
}

let movdown=document.addEventListener('keydown', (event)=>{
    
    if(puntero===1){
        switch(event.keyCode){
            case 39:
                $('#slide-1').slideUp();
                $('#slide-2').slideDown();
                console.log("Derecha")
                puntero=2;
                console.log(puntero)
            break;

            case 40:
                $('#slide-1').slideUp();
                $('#slide-4').slideDown();
                console.log("Abajo")
                puntero=4;
                console.log(puntero)
            break;
        } 
    }else{
        if(puntero===2){
            switch(event.keyCode){
                case 37:
                    $('#slide-2').slideUp();
                    $('#slide-1').slideDown();
                    console.log("Izquierda")
                    puntero=1;
                    console.log(puntero)
                break;
    
                case 39:
                    $('#slide-2').slideUp();
                    $('#slide-3').slideDown();
                    console.log("Derecha")
                    puntero=3;
                    console.log(puntero)
                break;
    
                case 40:
                    $('#slide-2').slideUp();
                    $('#slide-5').slideDown();
                    console.log("Abajo")
                    puntero=5;
                    console.log(puntero)
                break;
            } 
        }else{
            if(puntero===3){
                switch(event.keyCode){
                    case 37:
                        $('#slide-3').slideUp();
                        $('#slide-2').slideDown();
                        console.log("Izquierda")
                        puntero=2;
                        console.log(puntero)
                    break;
        
                    case 40:
                        $('#slide-3').slideUp();
                        $('#slide-6').slideDown();
                        console.log("Abajo")
                        puntero=6;
                        console.log(puntero)
                    break;
                } 
            }else{
                if(puntero===4){
                    switch(event.keyCode){
                        case 38:
                            $('#slide-4').slideUp();
                            $('#slide-1').slideDown();
                            console.log("Arriba")
                            puntero=1;
                            console.log(puntero)
                        break;
            
                        case 39:
                            $('#slide-4').slideUp();
                            $('#slide-5').slideDown();
                            console.log("Derecha")
                            puntero=5;
                            console.log(puntero)
                        break;
                    } 
                }else{
                    if(puntero===5){
                        switch(event.keyCode){
                            case 37:
                                $('#slide-5').slideUp();
                                $('#slide-4').slideDown();
                                console.log("Izquierda")
                                puntero=4;
                                console.log(puntero)
                            break;
                            case 38:
                                $('#slide-5').slideUp();
                                $('#slide-2').slideDown();
                                console.log("Arriba")
                                puntero=2;
                                console.log(puntero)
                            break;
                
                            case 39:
                                $('#slide-5').slideUp();
                                $('#slide-6').slideDown();
                                console.log("Derecha")
                                puntero=6;
                                console.log(puntero)
                            break;
                        } 
                    }else{
                        if(puntero===6){
                            switch(event.keyCode){
                                case 37:
                                    $('#slide-6').slideUp();
                                    $('#slide-5').slideDown();
                                    console.log("Izquierda")
                                    puntero=5;
                                    console.log(puntero)
                                break;
                                case 38:
                                    $('#slide-6').slideUp();
                                    $('#slide-3').slideDown();
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


