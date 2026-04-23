/* ACCORDION */
document.querySelectorAll(".accordion-btn").forEach(btn=>{
    btn.onclick = () => {
        const content = btn.nextElementSibling;

        content.style.display =
            content.style.display === "block" ? "none" : "block";
    };
});

/* PDF MAP */
const pdfMap = {
    cv: "BP_cv.pdf",

    meresi: "BP_jegyzokonyv.pdf",
    elektronika: "BP_elektronika.pdf",
    halo: "BP_halozatkezeles.pdf",
    prog_alap: "BP_program_alapjai.pdf",

    adatbazis: "",
    mikro: "",
    plc: "BP_plc.pdf",
    szamitogep: "BP_szamitoszimulacio.pdf",

    digitalis: "",
    iot: "BP_iot.pdf",
    prog: "BP_programfejlesztes.pdf",
    robot: ""
};

function openPDF(key){
    const file = pdfMap[key];

    if(!file){
        alert("Ez a PDF még nincs feltöltve!");
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
