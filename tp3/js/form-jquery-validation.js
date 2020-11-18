$(document).ready(function(){
    $("#button").click(function(event){
event.preventDefault();
if($("#nom").val()&& $("#prenom").val()&& $("#date").val()&&$("#adresse").val()&&$("#email").val() !=""){
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