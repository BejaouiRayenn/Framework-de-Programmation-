const pays = ["Italie", "Japon", "Grèce", "Espagne", "Canada"];
const [p1,p2]=pays
console.log(p1);
console.log(p2);
const[,,p3]=pays
console.log(p3);
const[destinationPrincipales , ...autresDestinations]=pays
console.log(destinationPrincipales);
console.log(autresDestinations);


const voyage = {
destination: "Bali",
prix: 1800,
duree: 10,
transport: "Avion",
hotel: "5 étoiles"
};

const {destination}=voyage
const ville = destination;
console.log(ville);

const {prix=1000,duree=7}=voyage
console.log(prix);
console.log(duree);

function afficherVoyage({ destination, prix, duree, transport, hotel }) {
    console.log("Destination :", destination);
    console.log("Prix :", prix, "DT");
    console.log("Durée :", duree, "jours");
    console.log("Transport :", transport);
    console.log("Hôtel :", hotel);
}
afficherVoyage(voyage);
