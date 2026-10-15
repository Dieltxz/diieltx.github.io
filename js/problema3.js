document.addEventListener("DOMContentLoaded", () => {
    const d = document.getElementById("descripcion");
    const da = document.getElementById("datos");
    const f = document.getElementById("formula");
    const p = document.getElementById("procedimiento");
    const r = document.getElementById("resultado");
    const b = document.getElementById("boton");

    d.textContent = "Encuentre las tensiones t1 y t2 de las cuerdas que sostienen un cuerpo de 5kg como se muestra";
    da.innerHTML = "masa = 5kg <br>gravedad = 9.8 m/s2 = 49";
    f.textContent = "a/senA+ b/senB+ c/senC";
    p.textContent = "calcular a=(49/sen 92 + 49/sen 131 + 49/sen 137 )";
    r.textContent = "";

    console.log("descripcion:", d.textContent);
    console.log("datos:", da.textContent);
    console.log("formula:", f.textContent);
    console.log("calculo:", p.textContent);

    function mostrar() {
        r.textContent = "resultado:T1=37.0033n T2=33.4382n";
        console.log("resultado final:", r.textContent);
    }

    b.addEventListener("click", mostrar);
});
