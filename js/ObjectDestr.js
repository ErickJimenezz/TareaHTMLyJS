const Estudiante = {
    Curso: 'Desarrollo Web', 
    Nombre: ['Juan ', 'Maria ', 'Carlos ', ' Karla' ],
    Nota: ['10', '30', '20', '40']
}

const Estudiante2 = {
    Curso: 'Programacion2',
    Nombre: ['Lili ', 'Cleo ', 'Pedro ', ' Marco' ],
    Nota: ['30', '40', '33', '21']
}

// let {Curso, Nombre, Nota}= Estudiante;
// console.log(Curso);
// console.log(Nombre);
// console.log(Nota);


console.log(Estudiante);

console.log(Estudiante2);



// let html = `<ul>
// <il> ${Estudiante}</il>
// <il> ${Estudiante2}</il>
// </ul>`



Estudiante.forEach(prod => {
    html += `<li>${prod}</li>`
    
});
let contenedor = document.querySelector (`#principal`);

contenedor.innerHTML=html;