const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.onclick = () => {
    menu.style.display = menu.style.display === "block" ? "none" : "block";
};

const pdfMap = {
    "Elektronika": "Batari_Peter_Elektronika.pdf",
    "Programfejlesztes": "Batari_Peter_13B_programfejlesztes.pdf",
    "IoT": "IOT_1.pdf"
};

function openPDF(name){
    const file = pdfMap[name];
    if(!file){
        alert("Nincs PDF!");
        return;
    }

    document.getElementById("frame").src = "pdfs/" + file;
    document.getElementById("pdf").style.display = "block";
}

function closePDF(){
    document.getElementById("pdf").style.display = "none";
    document.getElementById("frame").src = "";
}
