/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme

console.log('Bienvenue dans le gestionnaire des contacts !');
var personne = {
    // Initialise le personnage
    insert: function (nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    },
    lister: function (){
        var identite = 'Nom : '+this.nom+', Prénom: '+this.prenom;
        return identite;
    }
};
var repertoire = [];

var personneDefaut1 = Object.create(personne);
personneDefaut1.insert('Lévisse', 'Carole');

var personneDefaut2 = Object.create(personne);
personneDefaut2.insert('Nelsonne', 'Mélodie');

repertoire.push(personneDefaut1);
repertoire.push(personneDefaut2);
while(true) {
    console.log('1 : Lister les contacts');
    console.log('2 : Ajouter un contact');
    console.log('0 : Quitter');
    var saisie = prompt('Choisissez un option:');
    if (saisie == 0) {
        console.log('Au revoir!');
        break;
    }
    else if (saisie == 1) {
        repertoire.forEach(function (repertoire) {
            console.log(repertoire.lister());
        });
    }
    else if (saisie == 2){
        var nom = prompt('Entrez le nom du nouveau contact:');
        var prenom = prompt('Entrez le nom du nouveau contact:');
        var nouvellePersonne = Object.create(personne);
        nouvellePersonne.insert(nom, prenom);
        repertoire.push(nouvellePersonne);
        console.log('Le nouveau contact a bien été ajouté');
    }
    else if (saisie == 3){
        console.log('lol');
    }
}