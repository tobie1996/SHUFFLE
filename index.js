function valider() {
  var nombre = parseInt(document.getElementById("nombreInput").value );
  if (!isNaN(nombre) && nombre >= 0) {
      localStorage.setItem("nombre", nombre);
      window.location.href = "inputs/inputs.html";
  }else{
    alert("veillez renseigner un nombre positif");
  }
}
// pour la page inputs
var nombre = localStorage.getItem("nombre");

        for (var i = 0; i < nombre; i++) {

            var input = document.createElement("input");
            input.classList.add("createInput");
            input.type = "text";
            input.name = "input" + i;
            input.placeholder = "Entrer un nom ";
            document.getElementById("inputsContainer").appendChild(input);

        }


  function SaveName() {
    var inputs = document.querySelectorAll('input');
    var contenuInputs = [];

    if (input.value.trim() === '') {
      alert("Veillez renseigner tous les champs SVP!");
      return;
    }else{
      inputs.forEach(function(input) {
        contenuInputs.push(input.value);
    });
    
    }

    
  function shuffleArray(array) {

      var currentIndex = array.length,
      temporaryValue, randomIndex;
      
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1; 
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;

     }

      return array;
    }
    
  
  var values = shuffleArray(contenuInputs);
  localStorage.setItem('names', JSON.stringify(values));
  window.location.href = "../liste/liste.html";


}



        

