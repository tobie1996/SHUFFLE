

document.addEventListener("DOMContentLoaded", function() {
    var listName = localStorage.getItem('names');
    var listeNoms = JSON.parse(listName);
    var nombre = localStorage.getItem('nombre');
    
    for (var i = 0; i < nombre; i++) {
      var listContainer = document.getElementsByClassName("list_container")[0];
      var input = document.createElement("input");
      input.classList.add("createName");
      input.value = listeNoms[i];
      listContainer.appendChild(input);
    }
    
    //localStorage.clear();
  });
  
// pour la numerotation

  window.onload = function() {
    var form = document.getElementById("myForm");
    var inputs = form.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
      var span = document.createElement("span");
      span.innerHTML = (i + 1);
      inputs[i].parentNode.insertBefore(span, inputs[i]);
      inputs[i].setAttribute("id", (i + 1));
      span.classList.add("spanInput");
    }
  };

  btnQuiter = document.getElementById("btnRetour").addEventListener('click', ()=> {
    window.location.href = "../index.html";
  })

  
  