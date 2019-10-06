let div = document.createElement('div');
div.style['bottom'] = "0";
div.style['position'] = 'absolute';
div.style['width'] = '100%';
div.style['background'] = '#151515';
div.style['padding'] = "5px";
div.style['border-radius'] = "10px 10px 0px 0px";

let di = document.createElement('div');
di.style['display'] = "flex";


let p = document.createElement('p');
p.innerHTML = "Created by ";
p.style['padding'] = "0";
p.style['padding-left'] = '5px';

let sp = document.createElement('span');
let spa = document.createElement('a');

spa.innerHTML = "AndreyMrovol";
spa.href = "https://github.com/andreymrovol";
spa.style['color'] = '#fb8c00'

sp.appendChild(spa);
p.appendChild(sp);

di.appendChild(p);

div.appendChild(di);
$('#footer').append(div);
