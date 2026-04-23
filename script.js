const subjectsData = {
    11: [
        {name:"Mérési jegyzőkönyv", key:"meresi"},
        {name:"Elektronika", key:"elektronika"},
        {name:"Hálózatkezelés", key:"halo"},
        {name:"Programozás alapjai", key:"prog_alap"}
    ],
    12: [
        {name:"Adatbázis kezelés", key:"adatbazis"},
        {name:"Mikrovezérlő programozás", key:"mikro"},
        {name:"PLC programozás", key:"plc"},
        {name:"Számítógépes szimuláció", key:"szamitogep"}
    ],
    13: [
        {name:"Digitális áramkörök", key:"digitalis"},
        {name:"IoT rendszerek", key:"iot"},
        {name:"Programfejlesztés", key:"prog"},
        {name:"Robottechnika", key:"robot"}
    ]
};

const pdfMap = {
    meresi:"",
    elektronika:"",
    halo:"",
    prog_alap:"",
    adatbazis:"",
    mikro:"",
    plc:"",
    szamitogep:"",
    digitalis:"",
    iot:"",
    prog:"",
    robot:""
};

document.getElementById("yearSelect").addEventListener("change", function(){
    const year = this.value;
    const container = document.getElementById("subjects");

    container.innerHTML = "";

    if(!subjectsData[year]) return;

    subjectsData[year].forEach(sub=>{
        const div = document.createElement("div");
        div.className = "item";
        div.textContent = sub.name;

        div.onclick = () => openPDF(sub.key);

        container.appendChild(div);
    });
});

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
