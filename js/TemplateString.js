

let nombre1 ="Juan";
let nota1 ="10";
let nombre2 ="Maria";
let nota2 ="30";
let nombre3 ="Carlos";
let nota3 ="20";
let nombre4 ="Karla";
let nota4 ="40";

let nombre5 ="Lili";
let nota5 ="30";
let nombre6 ="Cleo";
let nota6 ="40";
let nombre7 ="Pedro";
let nota7 ="33";
let nombre8 ="Marco";
let nota8 ="21";

let contenedor = document.querySelector (`#principal`);

let html = `<ul>

<li>${nombre1}      ${nota1}</li>
<li>${nombre2}      ${nota2}</li>
<li>${nombre3}      ${nota3}</li>
<li>${nombre4}      ${nota4}</li>
<li> Curso : Porgramacion 2: </li>
<li>${nombre5}      ${nota5}</li>
<li>${nombre6}      ${nota6}</li>
<li>${nombre7}      ${nota7}</li>
<li>${nombre8}      ${nota8}</li>
</ul>`;

contenedor.innerHTML=html;
