function arttır() {
     let num1 = document.getElementById('num1').value;
     num1++;
     document.getElementById('display').innerHTML = num1;
     document.getElementById('num1').value = num1;
     alert("Arttırıyorum!");
     console.log ("Number increased")
     console.warn ("The main number of increases occurred !")
    
}

function azalt () {
    let num1 = document.getElementById('num1').value;
     num1--;
     document.getElementById('display').innerHTML = num1;
     document.getElementById('num1').value = num1;
    alert("I reduce!");
    console.log ("Number reduced!")
    console.warn ("Major reductions occurred!")
}