const achat =(mnt) => {let m = mnt > 10 ? "achat autorisé" : "achat refusé"; return m;};
console.log(achat(15));
console.log(achat(5));