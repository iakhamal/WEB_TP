function Verif() {
 var nom = document.getElementById("nom").value;
 var prenom = document.getElementById("prenom").value;
 var cin = document.getElementById("cin").value;
 var email = document.getElementById("email").value;
 var niveau = document.getElementById("niveau").value;
 var modules = document.querySelectorAll('input[name="modules"]:checked');

 if (nom === "" || prenom === "" || cin === "" || email === "") {
     alert("Veuillez remplir tous les champs obligatoires.");
     return false;
 }

 if (!/^\d{8}$/.test(cin)) {
     alert("Le champ CIN doit contenir 8 chiffres.");
     return false;
 }

 if (!email.includes('@')) {
     alert("L'adresse e-mail doit comporter le caractère @.");
     return false;
 }

 if (modules.length > 2) {
     alert("Vous ne pouvez pas sélectionner plus de 2 modules.");
     return false;
 }

 document.getElementById("message").innerText = "Inscription achevée !!";
 return false;
}
