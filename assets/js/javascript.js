function like(i,j) {
  arrPerson[i].comentarios[j].likes++;
  document.getElementById('comentario-' + i + '-' + j).innerHTML = arrPerson[i].comentarios[j].likes;
  return false;
}

function comentar(i){
  var comentarioTxt = document.getElementById('comentario' + i).value;

  if (comentarioTxt != '') {
    arrPerson[i].comentarios.push({texto: comentarioTxt, likes: 0});
    var comentarios = document.getElementById('comentarios' + i);   

    comentarios.innerHTML = '';
    arrPerson[i].comentarios.forEach(function(comentario, j){
      comentarios.innerHTML += '<p>' + comentario.texto + '</p><div style="text-align: right;"><span style="color: red; font-weight: bold; font-size: 20px; cursor: pointer; cursor: hand;" onclick="like(' + i + ',' + j + '); return false;">&hearts;</span> <span id="comentario-' + i + '-' + j + '">' + comentario.likes + '</span></div>';
    });

    
    document.getElementById('comentario' + i).value = '';
  }
  
  return false;
}

function Person(nombre, edad, hobbies, url, comentarios){
  this.nombre = nombre;
  this.edad = edad;
  this.hobbies = hobbies;
  this.url= url;
  this.comentarios= comentarios;
}
var arrPerson= [
                new Person("Fernanda Zamora", "30", ["Escuchar música", "Hacer fotografías", "Pensar en el existencialismo"], "./assets/fda.jpg", []), 
                new Person("Natalia Villalobos","30", ["Tocar batería"], "./assets/naty.jpg", []),
                new Person("Diana Villasmil","29", ["Ver series Coreanas", "Cantar", "Escuchar música"], "./assets/diana.jpg", []),
                new Person("Vanessa Garcia Yara","25", ["Aprender de Agilidad", "Probar Cervezas", "Escuchar música"], "./assets/vanessa.JPG", []),
                new Person("Valentina Miranda", "26", ["Dibujar","ver anime y series", "Cocinar"], "http://lorempixel.com/100/100/people/", []), 
                new Person("Cindialy Berrios", "23", ["Trekking","Escuchar música", "Deporte"], "http://lorempixel.com/100/100/people/", []),
                new Person("Esperanza Lucero", "25", ["Fotografía", "Leer", "Dormir"], "http://lorempixel.com/100/100/people/", [])
                ];


var lista = document.getElementById('lista');

var html = ''

html += '<table><tbody>';

arrPerson.forEach(function(person, i) {
  var str = '<tr><td style="vertical-align: top; text-align: right;"> <img height="100px" src="' + person.url + '">  </td><td width="500px"><span><strong>Nombre: </strong>' + person.nombre + '<br/><strong>Edad: </strong>' + person.edad + 
            '<br/><strong>Hobbies: </strong><br/><ul style="display: inline-block;">';

  person.hobbies.forEach(function(hobby){
    str += '<li>' + hobby + '</li>';
  });

  str += '</ul><br/></span> <div style="text-align: right; width: 100%;"><textarea id="comentario' + i + '" style="width: 100%;" placeholder="Tu comentario"></textarea><br/><button onclick="comentar(' + i + '); return false;">Comentar</button></div><div id="comentarios' + i + '"></div></td></tr>';

  html += str;
});

html += '</tbody></table>';

lista.innerHTML += html;






 
 
