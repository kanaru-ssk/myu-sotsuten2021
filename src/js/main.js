
// 学生データ挿入
fetch('./json/exhibitor.json')
.then(response => response.json())
.then(data => insertExhibitor(data));

// 講師データ挿入
fetch('./json/lecturer.json')
.then(response => response.json())
.then(data => insertLecturer(data));

window.onload = () => {
    let isModalShow = false;
    const modal = document.getElementById('modal');
    const menu = document.getElementById('header-ul');
    const menuCheck = document.getElementById('menu-check');
    
    // モーダルウィンドウの表示
    document.getElementById('top-info-inner-div').onclick = () => {
        modal.style.display = 'block';
        isModalShow = true;
    }
    // モーダルウィンドウの非表示
    document.getElementById('modal-close-button').onclick = () => {
        modal.style.display = 'none';
        isModalShow = false;
    }
    
    document.addEventListener('click', (e) => {
        // モーダルウィンドウの非表示
        if (e.target === modal && isModalShow) {
            modal.style.display = 'none';
            isModalShow = false;
        }

        // ハンバーガーメニュー非表示
        if (e.target !== menu && e.target !== menuCheck) {
            menuCheck.checked = false;
        }
    });
}

const insertExhibitor = (exhibitors) => {
    exhibitors.forEach(exhibitor => {
        document.getElementById(exhibitor.labo + '-labo').appendChild(createExhibitorNode(exhibitor))
    });
}

const createExhibitorNode = (exhibitor) => {
    const span = document.createElement('span');
    const name = document.createTextNode(exhibitor.name);
    span.appendChild(name);
    return span;
}

const insertLecturer = (lecturers) => {
    lecturers.forEach(lecturer => {
        document.getElementById('lecturer-profile-ul').appendChild(createLecturerNode(lecturer));
    });
}

const createLecturerNode = (lecturer) => {
    
    const img = document.createElement('img');
    img.setAttribute('class', 'lecturer-profile-img');
    img.setAttribute('src', './img/lecturers/' + lecturer.img_name);

    const roman = document.createTextNode(lecturer.roman);
    const romanSpan = document.createElement('span');
    romanSpan.setAttribute('class', 'lecturer-profile-text');
    romanSpan.appendChild(roman);

    const name = document.createTextNode(lecturer.name);
    const nameSpan = document.createElement('span');
    nameSpan.setAttribute('class', 'lecturer-profile-name');
    nameSpan.appendChild(name);

    const belongs = document.createTextNode(lecturer.belongs);
    const belongsSpan = document.createElement('span');
    belongsSpan.setAttribute('class', 'lecturer-profile-text');
    belongsSpan.appendChild(belongs);
    
    const div = document.createElement('div');
    div.appendChild(img);
    div.appendChild(romanSpan);
    div.appendChild(nameSpan);
    div.appendChild(belongsSpan);

    const career = document.createTextNode(lecturer.position + '  ' + lecturer.career);
    const p = document.createElement('p');
    p.appendChild(career);

    const li = document.createElement('li');
    li.setAttribute('class', 'lecturer-profile-li');
    li.appendChild(div);
    li.appendChild(p);    
    
    return li;
}