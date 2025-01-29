//creation de fonction qui récupère la valeur de l'input d'affichage
// cet input va récupérer la valeur de chaque bouton de la calculette
function getValue(input){
    document.getElementById("result").value += input
}

//creation de fonction qui va calculer la somme, soustraction, multiplication et division de 2 inputs
function operationOfInputs(){
   let result = document.getElementById("result").value
   document.getElementById("result").value = eval(result)
}

//creation de fonction pour vider l'afficheur de la calculette:
function cleanDisplay(){
    document.getElementById("result").value= ''
}