
let listaServicios = document.getElementById('listaserv');
let desplegar = document.getElementById('despliegamenu');
let abierto = document.getElementsByClassName('abierto');

listaServicios.addEventListener('mouseover',()=>{
    desplegar.style.display='block';
});

listaServicios.addEventListener('click',()=>{
    desplegar.style.display='block';
});

listaServicios.addEventListener('mouseleave',()=>{
    desplegar.style.display='none';
});

//definicion de cada servicio
const vermas = document.getElementById('2');
const contenido = document.getElementById('3');
const hover = document.getElementById('1');

hover.addEventListener('mouseover',()=>{
    vermas.style.display='none';
    contenido.style.display='block';
});

hover.addEventListener('mouseleave',()=>{
    vermas.style.display='block';
    vermas.style.fontFamily='Arial';
    vermas.style.fontSize='30px';
    vermas.style.padding='10px';
    vermas.style.width='25%';
    vermas.style.marginTop='1%';
    vermas.style.marginLeft='35%';
    contenido.style.display='none';
});