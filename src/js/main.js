
fetch('./json/exhibitor.json')
.then(response => response.json())
.then(data => insertExhibitor(data));

const insertExhibitor = (exhibitors) => {
    exhibitors.forEach(exhibitor => {
        document.getElementById(exhibitor.labo + '-labo').appendChild(createNode(exhibitor.name));
    });
}

const createNode = (_name) => {
    const name = document.createTextNode(_name);
    const span = document.createElement('span');
    span.appendChild(name);
    return span;
}