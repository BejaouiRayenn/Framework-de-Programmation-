const favoris = [
{ id: 1, ville: "Venise", pays: "Italie", visite: false },
{ id: 2, ville: "Marrakech", pays: "Maroc", visite: true },
{ id: 3, ville: "Maldives", pays: "Maldives", visite: false },
{ id: 4, ville: "Barcelone", pays: "Espagne", visite: true }
];
favoris.forEach((f) => {
    console.log(f)
})
const destinationsNonvisitees=favoris.filter(f=>f.visite===false)
console.log(destinationsNonvisitees)
const villes =favoris.map(f=>f.ville)
console.log(villes)
const destinationRecherche=favoris.find(f=>f.id===3)
console.log(destinationRecherche);
const nbreDestinatinsVisites=favoris.reduce((total,favoris)=>total+favoris.visite,0)
console.log(nbreDestinatinsVisites)

const nouvelleDestination=[...favoris,{id:5,ville:"Lisbonne",pays:"Portugal",visite:false}]
const destinationModifiee=[...favoris].filter(f=>f.id===1).map(f=>({...f,visite:true}))
console.log(nouvelleDestination)
console.log(destinationModifiee)
const destinationSupprimee=favoris.filter(f=>f.id!==2)
console.log(destinationSupprimee)