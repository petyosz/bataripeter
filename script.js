/* ACCORDION LOGIC */
function toggle(btn) {
    const content = btn.nextElementSibling;
    const icon = btn.querySelector('.icon');
    
    // Összes többi bezárása
    document.querySelectorAll(".content").forEach(c => {
        if (c !== content) {
            c.style.display = "none";
            c.previousElementSibling.querySelector('.icon').innerText = "+";
        }
    });

    // Aktuális kapcsolása
    if (content.style.display === "block") {
        content.style.display = "none";
        icon.innerText = "+";
    } else {
        content.style.display = "block";
        icon.innerText = "-";
    }
}

/* PDF DATABASE */
const pdfMap = {
    cv: "BP_cv.pdf",
    // 11. évfolyam
    meresi: "BP_jegyzokonyv_11.pdf",
    elektronika: "BP_elektronika_alapok.pdf",
    halo: "BP_halozatok_1.pdf",
    prog_alap: "BP_algoritmusok.pdf",
    // 12. évfolyam
    adatbazis: "BP_sql_adatbazis.pdf",
    mikro: "BP_arduino_beagyazott.pdf",
    plc: "BP_plc_programozas.pdf",
    szamitogep: "BP_szimulacio.pdf",
    // 13. évfolyam
    digitalis: "BP_digitalis_tervezes.pdf",
    iot: "BP_iot_rendszerek.pdf",
    prog: "BP_szoftverfejlesztes_csharp.pdf",
    robot: "BP_ipari_robotok.pdf"
};

function openPDF(key) {
    const file = pdfMap[key];
    const modal = document.getElementById("pdf-viewer");
    const frame = document.getElementById("frame");
    const title = document.getElementById("pdf-title");

    if (!file) {
        alert("A kért dokumentum jelenleg feltöltés alatt áll.");
        return;
    }

    // Cím beállítása a szebb UX érdekében
    title.innerText = "Dokumentum: " + file;
    
    frame.src = "pdfs/" + file;
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Scroll letiltása
}

function closePDF() {
    const modal = document.getElementById("pdf-viewer");
    const frame = document.getElementById("frame");
    
    modal.style.display = "none";
    frame.src = "";
    document.body.style.overflow = "auto"; // Scroll visszaállítása
}

/* ESCAPE KEY SUPPORT */
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closePDF();
});
