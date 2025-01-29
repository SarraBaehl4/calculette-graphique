//creation de fonction qui récupère la valeur de l'input d'affichage
// cet input va récupérer la valeur de chaque bouton de la calculette
function getValue(input){
    document.getElementById("result").value += input
}

//creation de fonction qui va calculer la somme de 2 inputs
function SumInputs(){
   let result = document.getElementById("result").value
   document.getElementById("result").value = eval(result)
}