
document.getElementById
document.getElementsByClassName
document.getElementsByName

console.log(document.getElementById('sapo').innerHTML)
console.log(document.getElementsByClassName('sapoclass')[0].innerHTML)
console.log(document.getElementsByName('saponome'));



const completeSapo = document.getElementById('sapo')

/* completeSapo.innerHTML = completeSapo.innerHTML + " pé, não lava porque não quer" */

completeSapo.innerHTML += " pé, não lava porque não quer"

/* console.log(document.getElementById("poema").innerHTML) */
const completePoema = document.getElementById("poema")

//console.log(completePoema);

completePoema.innerHTML += " evidências"


const completeSabedoria = document.getElementById('sabedoria')

completeSabedoria.innerHTML += " voando"

const completeBorboleta = document.getElementById('borboleta')

completeBorboleta.innerHTML += " pica-pau"


const completeRoberto = document.getElementById('roberto')

completeRoberto.innerHTML += " vivi."

document.getElementById('roberto').innerHTML = ""