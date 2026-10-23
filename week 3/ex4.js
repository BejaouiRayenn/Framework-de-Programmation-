const destinationsEurope = ["Rome", "Paris", "Madrid"];
const destinationsAsie = ["Tokyo", "Bali", "Bangkok"];
const copieEuropes =[...destinationsEurope]
console.log(copieEuropes);
const fusionDestinations=[...destinationsEurope,...destinationsAsie]
console.log(fusionDestinations);
const ajoutDestination=["Lisbonne",...destinationsEurope]
console.log(ajoutDestination);
const ajoutfinDestination=[...destinationsEurope,"Londres"];
console.log(ajoutfinDestination);
const sansParis=[...destinationsEurope,...destinationsAsie].filter(d=>d!=="Paris");
console.log(sansParis);

const reservation = {
numero: 201,
client: "Nadia",
destination: "Bali",
statut: "En attente"
};
const copieReservation={...reservation};
const reservationConfirmee={...reservation,statut:"Confirmée"};
console.log(copieReservation);
console.log(reservationConfirmee);
const reservationAssurance={...reservation,assurance:true};
console.log(reservationAssurance);
const nouvelleReservation={...reservation,statut:"confirmee",destination:"Latvia"};
console.log(nouvelleReservation);
