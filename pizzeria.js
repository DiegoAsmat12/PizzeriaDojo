function pizzaOven(tipoCorteza,tipoSalsa,quesos,salsas){
    let pizza={
        tipoCorteza:tipoCorteza,
        tipoSalsa:tipoSalsa,
        quesos:quesos,
        salsas:salsas
    };

    return pizza;
}

let pizza1=pizzaOven("estilo Chicago","tradicional",["mozarella"],["pepperoni","salchicha"]);
let pizza2=pizzaOven("lanzada a mano","marinara",["mozarella","feta"],["champiñones","aceitunas"]);
let pizza3=pizzaOven("estilo Chicago","tradicional",["mozarella"],["jamon"]);
let pizza4=pizzaOven("lanzada a mano","tradicional",["mozarella"],["pepperoni","Full-meat"]);

function randomPizza(){
    let tipoCorteza="";
    let tipoSalsa="";
    let quesos=[];
    let salsas=[];
    let cortezaID =Math.round(Math.random())%2;
    if(cortezaID===0){
        tipoCorteza="estilo Chicago";
    }else{
        tipoCorteza="lanzada a mano";
    }
    let salsaID=Math.round(Math.random())%2;
    if(salsaID===0){
        tipoSalsa="tradicional";
    }
    else{
        tipoSalsa="marinara";
    }
    let quesosID=Math.round(Math.random())%3;
    if(quesosID===0){
        quesos=["mozzarella","feta"];
    }
    else if(quesosID===1){
        quesos=["mozzarella"];
    }
    else{
        quesos=["feta"];
    }
    let salsasID=Math.round(Math.random())%2;
    if(salsasID===0){
        salsas=["pepperoni","salchicha"];
    }
    else{
        salsas=["champiñones","aceitunas"];
    }

    return pizzaOven(tipoCorteza,tipoSalsa,quesos,salsas);
}
