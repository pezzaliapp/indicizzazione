let valori = [];

function aggiungiValore() {
    const input = document.getElementById("valoreInput");
    const valore = parseFloat(input.value.replace(',', '.'));
    if (!isNaN(valore)) {
        valori.push(valore);
        aggiornaLista();
    }
    input.value = "";
}

function aggiornaLista() {
    const lista = document.getElementById("listaValori");
    lista.innerHTML = "";
    valori.forEach((val, index) => {
        const li = document.createElement("li");
        li.textContent = `${val.toFixed(2)} €`;
        lista.appendChild(li);
    });
}

function ricalcolaValori() {
    const costoAggiuntivo = parseFloat(document.getElementById("costiInput").value.replace(',', '.'));
    if (isNaN(costoAggiuntivo) || valori.length === 0) return;
    
    const totale = valori.reduce((acc, val) => acc + val, 0);
    const fattore = (totale + costoAggiuntivo) / totale;
    
    const listaRisultati = document.getElementById("listaRisultati");
    listaRisultati.innerHTML = "";
    valori.forEach(val => {
        const nuovoValore = val * fattore;
        const li = document.createElement("li");
        li.textContent = `${nuovoValore.toFixed(2)} €`;
        listaRisultati.appendChild(li);
    });
}

