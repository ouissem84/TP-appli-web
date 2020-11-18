function validation(){
  document.getElementById("error").innerHTML = "";

  for(let item of document.querySelectorAll('.inputAW')){
    if(item.value.length < 5){
      // recuperation du label
      var label =   document.querySelector("label[for="+item.id+"]").textContent;
      // ajout du message d'erreur
      document.getElementById("error").innerHTML += `Minimum 5 caractères pour : ${label} <br/>`;
      
      // ajout de la classe CSS "display"
      document.getElementById("error").classList.add("display");
      document.getElementById("resultat").classList.remove("display");
  
    }
      
  
    if(document.getElementById("error").innerHTML == ""){
      var nom = document.getElementById("nom").value;
      document.getElementById("resultat").innerHTML = `Bienvenue ${nom}`;
      document.getElementById("error").classList.remove("display");
      document.getElementById("resultat").classList.add("display");
    }
     
  
    
  }