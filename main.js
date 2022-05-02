nomedosalunos = [];

function submit(){
    var displayStudentArray = [];
    
    for (var i=1; i<=4; i++){
    var aluno = document.getElementById("name"+i).value;
    console.log(aluno);
    nomedosalunos.push(aluno);
    }

    var comprimento = nomedosalunos.length;
    console.log(comprimento);

    for (var k=0; k<comprimento; k++)
    {
        displayStudentArray.push("<h4>Nome: "+nomedosalunos[k] +"</h4>");
        console.log(displayStudentArray);
    }

    //removeremos as vírgulas de displayStudentArraySorting
    var removervirgulas = displayStudentArray.join(" ");
    console.log(removervirgulas);
    document.getElementById("displayNameWithoutCommas").innerHTML = removervirgulas;

    document.getElementById("submitButton").style.display = "none";
    document.getElementById("sortButton").style.display = "inline-block";

}

function sorting()
{
    nomedosalunos.sort();

    var displayStudentArraySorting = [];
    var comprimento = nomedosalunos.length;

    for (var j =0; j<comprimento; j++){
        displayStudentArraySorting.push("<h4>Nome: "+ nomedosalunos[j] +"</h4>");
        console.log(displayStudentArraySorting);
    }

    var remover = displayStudentArraySorting.join(" ");
    document.getElementById("displayNameWithoutCommas").innerHTML = remover;
}

function newUpdate(){
    document.getElementById("displayNameWithoutCommas").innerHTML = "<h4>" + nomedosalunos + "</h4>";
}