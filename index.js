var nav = document.createElement('nav');
var intro = document.createElement('h1');
var p = document.createElement('p');
var bottom = document.createElement('footer');

function navItem() {
    nav.style.fontSize = '2.8em';
    nav.style.textAlign = 'center';

    document.body.appendChild(nav);
}

function listTags() {
    var a1 = document.createElement('a');
    a1.target = '_blank';
    a1.href = 'https://www.techiedelight.com/';
    a1.innerText = 'techie';
    a1.className = "link";
    var a2 = document.createElement('a');
    a2.target = '_blank';
    a2.href = 'https://github.com/';
    a2.innerText = 'profile';
    a2.className = "link";
    var a3 = document.createElement('a');
    a3.target = '_blank';
    a3.href = 'https://portfolium.com/stephenbrooks15';
    a3.innerText = 'Portfolio';
    a3.className = "link";

    nav.appendChild(a1);
    nav.appendChild(a2);
    nav.appendChild(a3);
}

function line() {
    var line = document.createElement('hr');
    line.style.borderWidth = '2px';

    document.body.appendChild(line);
}

function headTag() {
    intro.textContent = "Stephen Brooks";
    intro.style.textAlign = "center";
    intro.style.fontSize = "4em";

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

function list() {
    var names = ['vitosh','academy','dot','com'];
		var ul = document.createElement('ul');
		document.body.appendChild(ul);
        ul.style.marginLeft = "50px";
        ul.style.fontSize = "20px";
		names.forEach(function(name){
			var li = document.createElement('li');
			ul.appendChild(li);
			li.innerHTML += name;
		});
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
list();
paragraph();

footer();
