const pdfMap = {
    cv: "BP_cv.pdf",
    meresi: "BP_jegyzokonyv.pdf",
    elektronika: "BP_elektronika.pdf",
    halo: "BP_halozatkezeles.pdf",
    prog_alap: "BP_program_alapjai.pdf",
    adatbazis: "BP_adatbazis.pdf",
    mikro: "BP_mikrovezérlo.pdf",
    plc: "BP_plc.pdf",
    szamitogep: "BP_szimulacio.pdf",
    digitalis: "BP_digitalis.pdf",
    iot: "BP_iot.pdf",
    prog: "BP_programfejlesztes.pdf",
    robot: "BP_robot.pdf"
};

function openPDF(key) {
    const file = pdfMap[key];
    if (!file) {
        alert("A dokumentum hamarosan elérhető lesz.");
        return;
    }
    document.getElementById("pdf-name").innerText = "FÁJL: " + file;
    document.getElementById("pdf-frame").src = "pdfs/" + file;
    document.getElementById("viewer").style.display = "block";
}

function closePDF() {
    document.getElementById("viewer").style.display = "none";
    document.getElementById("pdf-frame").src = "";
}

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closePDF();
});
