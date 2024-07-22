export function initialD() {
    var pmap = L.map('imap').setView([-12.08, -77.0], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19
    }).addTo(pmap);


    console.log("Hi Godzilla");
}
