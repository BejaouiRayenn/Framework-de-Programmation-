const destinations = [
{ id: 1, ville: "Santorin", pays: "Grèce", prix: 1200, duree: 7,
disponible: true },
{ id: 2, ville: "Bali", pays: "Indonésie", prix: 1800, duree: 10,
disponible: true },
{ id: 3, ville: "Istanbul", pays: "Turquie", prix: 750, duree: 5,
disponible: false },
{ id: 4, ville: "Rome", pays: "Italie", prix: 950, duree: 4,
disponible: true },
{ id: 5, ville: "Tokyo", pays: "Japon", prix: 2500, duree: 12,
disponible: true },
{ id: 6, ville: "Djerba", pays: "Tunisie", prix: 500, duree: 6,
disponible: false }
];
destinations.forEach((destination)=>{
    console.log(destination.ville)
});
const villes  =destinations.map((d)=>{
    return d.ville
})
console.log(villes)
const destinationsDispo = destinations.filter(d=>d.prix<1500);
console.log(destinationsDispo);
destinationsDispo[0].prix+=1000;
console.log(destinations)
const destinationRecherche=destinations.find(d=>d.id===3)
console.log(destinationRecherche)
const villerecherches=destinations.findIndex(d=>d.ville==="Tokyo")
console.log(villerecherches)
const destinationsDisponibles=destinations.some(d=>d.disponible===true)
console.log(destinationsDisponibles)
const destinationsDisponibles2=destinations.every(d=>d.prix>0)
console.log(destinationsDisponibles2)
const budgetTotal = destinations.reduce(
    (total, destination) => total + destination.prix,
    0
);
console.log(budgetTotal);
