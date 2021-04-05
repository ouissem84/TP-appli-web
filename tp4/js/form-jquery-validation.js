    $(document).ready(function(){
      $("#submit").click(function(event){
  event.preventDefault();
  if($("#name").val()&& $("#firstname").val()&& $("#birth").val()&&$("#adresse").val()&&$("#email").val() !=""){
      $('#myModal').modal({ show: true })
      $(".modal-title").text("Bienvenue " + $("#nom").val() + $("#prenom").val());
      var city = $("#adresse").val();
      var date=  $("#date").val();
  
      $(".modal-body").html( `Vous êtes né le ${date} et vous habitez :
              <a class="link"  href="http://maps.google.com/maps?" ><img src="https://maps.googleapis.com/maps/api/staticmap?markers=${city}&zoom=14&size=400x300&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg"/> Lien Google Maps </a>`);
  
          } 
          else {
  
              $('#myModal').modal({ show: true })
              $(".modal-body").html('Veuillez remplire tout les champs');
  }
      });
  
  
  });
window.onload = function () {
    document.querySelector("#name").addEventListener("keyup", function (event)
    {
    document.getElementById("compteur").textContent = `${event.target.value.length} car.`;
 });
 {
    document.querySelector("#firstname").addEventListener("keyup", function (event){
    document.getElementById("compteur1").textContent = `${event.target.value.length} car.`;
 });
  
      document.querySelector("#gps").addEventListener("click", function (event) {
        event.preventDefault();
        getLocation();
      });


      document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();
        contactStore.add(
          document.querySelector("#name").value,
          document.querySelector("#firstname").value,
          document.querySelector("#birth").value,
          document.querySelector("#adresse").value,
          document.querySelector("#mail").value
        );
    
        const contactList = contactStore.getList();
    
        document.querySelector("table tbody").innerHTML = "";
    
        for (var contact of contactList) {
          document.querySelector("table tbody").innerHTML += `
            <tr>
                <td> ${contact.name}</td>
                <td> ${contact.firstname}</td>
                <td> ${contact.date}</td>
                <td> <a href="https://maps.google.com/?q=${contact.adress}">${contact.adress}</a></td>
                <td> <a href="mailto:${contact.mail}">${contact.mail}</a></td>
            <tr>`;
        }
        
});
      
} };