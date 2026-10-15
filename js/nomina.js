const boton = document.getElementById("miformulario");
const resultado = document.getElementById("resultado");

boton.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre=document.getElementById("nombre").value;
    const horas=Number(document.getElementById("horas").value);
    const pago=Number(document.getElementById("pago").value);

    if (nombre==="") {
        resultado.textContent = "debes escribir el nombre";
        return;
    }

    if (horas<=0 || pago<=0) {
        resultado.textContent="horas y el pago deben ser mayores que 0";
        return;
    }

    let salario;

    if(horas<=40) {
        salario=horas*pago; /Si trabaja 40 horas o menos se paga normal/
    }else {
        let horasn=40;
        let horasextra=horas-40;
        salario=(horasn*pago)+(horasextra*pago*2);/Si pasa de 40 se pagan extras al doble/
    }

    let impuesto;

    if(salario<=4000) {
        impuesto=salario*0.05;
    }
    else if(salario<=7000) {
        impuesto=salario*0.10;
    }
      else {
       impuesto=salario*0.15;
    }

    const salariofinal=salario-impuesto;
    resultado.innerHTML = `
        <h3>resultado</h3>
        <p>empleado${nombre}</p>
        <p>horas trabajadas:${horas}</p>
        <p>salario $ ${salario.toFixed(2)}</p>
        <p>impuesto:$ ${impuesto.toFixed(2)}</p>
        <p><strong>aalario final: $ ${salariofinal.toFixed(2)}</strong></p>`; 
});