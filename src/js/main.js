
// jsonデータ挿入
fetch('./json/exhibitor.json')
.then(response => response.json())
.then(data => insertExhibitor(data));

window.onload = () => {
    let isModalShow = false;
    const modal = document.getElementById('modal');
    document.getElementById('top-info-inner-div').onclick = () => {
        modal.style.display = 'block';
        isModalShow = true;
    }
    document.getElementById('modal-close-button').onclick = () => {
        modal.style.display = 'none';
        isModalShow = false;
    }

    document.addEventListener('click', (e) => {
        if (e.target == modal && isModalShow) {
            modal.style.display = 'none';
            isModalShow = false;
        }
    });
}


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