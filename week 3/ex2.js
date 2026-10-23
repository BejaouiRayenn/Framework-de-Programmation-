const reservations = [
{ numero: 101, client: "Nadia", destination: "Bali", montant: 1800,
statut: "Confirmée" },
{ numero: 102, client: "Karim", destination: "Rome", montant: 950,
statut: "En attente" },
{ numero: 103, client: "Leila", destination: "Tokyo", montant: 2500,
statut: "Confirmée" },
{ numero: 104, client: "Sami", destination: "Santorin", montant: 1200,
statut: "Annulée" },
{ numero: 105, client: "Amira", destination: "Djerba", montant: 500,
statut: "Confirmée" }
];
const reservationsConfirmess=reservations.filter(r=>r.statut==="Confirmée");
console.log(reservationsConfirmess);
const nom =reservations.map(r=>r.client)
console.log(nom)
const reservvationRecherche=reservations.find(d=>d.numero===103)
console.log(reservvationRecherche)
const montantTotal = reservations.filter(r=>r.statut==="Confirmée").reduce((total,reservations)=>total+reservations.montant,0)
console.log(montantTotal)
const statusConirmes=reservations.every(r=>r.statut==="Confirmée")
console.log(statusConirmes)
const ClientsVoyages=reservations.map(r=>({client:r.client,destination:r.destination}))
console.log(ClientsVoyages)
