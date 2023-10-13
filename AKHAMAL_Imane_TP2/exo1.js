function bouton() {
 var nom = document.getElementById('nom').value;
 if (nom.trim() === '') {
     alert('Erreur : Le champ est vide.');
 } else {
     try {
         var result = eval(nom);
         alert('Résultat : ' + result);
     } catch (error) {
         alert('Erreur : ' + error);
     }
 }
}
