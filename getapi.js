var xhr = new XMLHttpRequest();
xhr.open("POST","http://www.codecademy.com/",false);

xhr.send();
console.log(xhr.status);
console.log(xhr.statusText);
