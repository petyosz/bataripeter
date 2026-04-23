const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.onclick = () => {
    menu.classList.toggle("active");
};

const pdfMap = {
    "Elektronika": "Batari_Peter_Elektronika.pdf",
    "Programfejlesztes": "Batari_Peter_programozasalapjai.pdf",
    "IoT": "IOT_1.pdf"
};

function openPDF(name){
    const file = pdfMap[name];

    if(!file){
        alert("Nincs PDF!");
        return;
    }

    document.getElementById("frame").src = "pdfs/" + file;
    document.getElementById("pdf").classList.add("show");
}

function closePDF(){
    document.getElementById("pdf").classList.remove("show");
    document.getElementById("frame").src = "";
}
document.addEventListener("keydown", (e)=>{
    if(e.key === "Escape") closePDF();
});
