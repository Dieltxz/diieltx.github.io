const pista = document.getElementById("pista")
const ventana = document.getElementById("ventana")
const reproductor = document.getElementById("reproductor")

const paso = () => pista.querySelector(".item").offsetwidth + 16

document.querySelector(".prev").addEventListener(
    "click",
    () => pista.scrollBy({left: -paso()})
)

document.querySelector(".next").addEventListener(
    "click",
    () => pista.scrollBy({left: paso()})
)

pista.querySelectorAll(".item").forEach((item) => {
    item.addEventListener("click", () => {
        reproductor.src = item.dataset.src
        ventana.showModal()
        reproductor.play().catch(() => {})
    })
})

function cerrar (){
    ventana.close()
}

document.getElementById("cerrar").addEventListener(
    "click", cerrar
)

ventana.addEventListener("click", (e) => {
    if(e.target === ventana) cerrar()
})

ventana.addEventListener("close", () => {
    reproductor.pause()
    reproductor.removeAttribute("src")
    reproductor.load()
})