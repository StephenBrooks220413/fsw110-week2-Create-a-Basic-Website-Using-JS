var nav = document.createElement('nav');
var intro = document.createElement('h1');
var p = document.createElement('p');
var bottom = document.createElement('footer');

function navItem() {
    nav.textContent = " Welcome To JavaScript ";
    nav.style.fontSize = '2.8em';
    nav.style.textAlign = 'center';

    document.body.appendChild(nav);
}

function listTags() {
    var a = document.createElement('a');
    a.target = '_blank';
    a.href = 'https://www.techiedelight.com/';
    a.innerText = 'home ' + ' about ' + ' contact ';
    a.style.textDecoration = 'none';
    a.style.fontSize = '20px';
    a.style.display = 'flex';
    a.style.justifyContent = 'center';
    a.style.wordSpacing = '25px';

    document.body.appendChild(a);
}

function line() {
    var line = document.createElement('hr');
    line.style.borderWidth = '2px';

    document.body.appendChild(line);
}

function headTag() {
    intro.textContent = "Main Title";
    intro.style.textAlign = "center";

    document.body.appendChild(intro);
}

function image() {
    var img = document.createElement('img');
    img.alt = 'javascript';
    img.src = 'javascript.png';
    img.style.width = '300px';
    img.style.height = '200px';
    img.style.marginLeft = '60px';

    document.body.appendChild(img);
}

function paragraph() {
    p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Amet venenatis urna cursus eget nunc scelerisque viverra mauris. Purus ut faucibus pulvinar elementum integer enim neque volutpat ac. Volutpat commodo sed egestas egestas fringilla. Fames ac turpis egestas integer. Laoreet non curabitur gravida arcu ac. Quam vulputate dignissim suspendisse in est ante in nibh mauris. Elit eget gravida cum sociis natoque penatibus et magnis dis. Urna porttitor rhoncus dolor purus non. Fermentum leo vel orci porta non pulvinar neque. Eget duis at tellus at.";
    p.style.fontSize = '22px';
    p.style.width = "90%";
    p.style.marginLeft = '60px';

    document.body.appendChild(p);
}

function footer() {
    bottom.textContent = "CopyRight: 2021";
    bottom.style.color = 'white';
    bottom.style.display = 'flex';
    bottom.style.backgroundColor = "grey";
    bottom.style.width = "100%";
    bottom.style.hieght = 'auto';
    bottom.style.paddingTop = '30px';
    bottom.style.fontSize = '18px';
    bottom.style.paddingBottom = '30px';
    bottom.style.justifyContent = 'center';
    bottom.style.marginTop = '50px';

    document.body.appendChild(bottom);
}

navItem();
listTags();
line();
headTag();
image();
paragraph();
footer();