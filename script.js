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
        alert("RENDSZERÜZENET: A fájl nem található a szerveren.");
        return;
    }
    document.getElementById("file-name").innerText = "FILE: " + file.toUpperCase();
    document.getElementById("pdf-frame").src = "pdfs/" + file;
    document.getElementById("pdf-overlay").style.display = "block";
    document.body.style.overflow = "hidden";
}

function closePDF() {
    document.getElementById("pdf-overlay").style.display = "none";
    document.getElementById("pdf-frame").src = "";
    document.body.style.overflow = "auto";
}

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closePDF();
});
