console.log("script.js carregado com sucesso!");

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


const btnTopo = document.createElement("button");
btnTopo.innerText = "↑ Topo";
btnTopo.id = "btnTopo";
btnTopo.style.position = "fixed";
btnTopo.style.bottom = "20px";
btnTopo.style.right = "20px";
btnTopo.style.padding = "10px 15px";
btnTopo.style.backgroundColor = "#006437";
btnTopo.style.color = "white";
btnTopo.style.border = "none";
btnTopo.style.borderRadius = "8px";
btnTopo.style.cursor = "pointer";
btnTopo.style.display = "none";
btnTopo.style.zIndex = "999";
document.body.appendChild(btnTopo);

window.addEventListener("scroll", () => {
    btnTopo.style.display = window.scrollY > 250 ? "block" : "none";
});

btnTopo.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
