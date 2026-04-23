const pdfMap = {
    meresi: "",
    elektronika: "",
    halo: "",
    prog_alap: "",
    adatbazis: "",
    mikro: "",
    plc: "",
    szamitogep: "",
    digitalis: "",
    iot: "",
    prog: "",
    robot: ""
};

function openPDF(key){
    const file = pdfMap[key];

    if(!file){
        alert("PDF még nincs beállítva!");
        return;
    }

    document.getElementById("frame").src = "pdfs/" + file;
    document.getElementById("pdfViewer").style.display = "block";
}

function closePDF(){
    document.getElementById("pdfViewer").style.display = "none";
    document.getElementById("frame").src = "";
}

/* ESC bezárás */
document.addEventListener("keydown",(e)=>{
    if(e.key === "Escape") closePDF();
});
