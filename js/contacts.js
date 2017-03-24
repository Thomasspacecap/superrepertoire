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