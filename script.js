const pdfMap = {
    cv: "BP_cv.pdf",
    meresi: "BP_jegyzokonyv.pdf",
    elektronika: "BP_elektronika.pdf",
    halo: "BP_halozatkezeles.pdf",
    prog_alap: "BP_program_alapjai.pdf",
    adatbazis: "BP_adatbazis.pdf",
    mikro: "BP_mikrovezerlo.pdf",
    plc: "BP_plc.pdf",
    szamitogep: "BP_szimulacio.pdf",
    digitalis: "BP_digitalis.pdf",
    iot: "BP_iot.pdf",
    prog: "BP_programfejlesztes.pdf",
    robot: "BP_robot.pdf"
};

function openPDF(key) {
    const fileName = pdfMap[key];
    const viewer = document.getElementById("viewer");
    const frame = document.getElementById("pdf-frame");
    const title = document.getElementById("pdf-name");

    if (!fileName) {
        alert("A kért fájl jelenleg nem elérhető.");
        return;
    }

    const filePath = "pdfs/" + fileName;

    title.innerText = "Nézet: " + fileName;
    frame.src = filePath;
    viewer.style.display = "block";
    
    document.body.style.overflow = "hidden";
}

function closePDF() {
    const viewer = document.getElementById("viewer");
    const frame = document.getElementById("pdf-frame");

    viewer.style.display = "none";
    frame.src = "";
    document.body.style.overflow = "auto";
}

// ESC gombra záródjon be
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closePDF();
    }
});

// Háttérre kattintva is záródjon be
window.onclick = function(event) {
    const viewer = document.getElementById("viewer");
    if (event.target == viewer) {
        closePDF();
    }
}
