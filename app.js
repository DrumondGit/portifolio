function html() {
    document.querySelector('.textSkills').innerHTML = `
    <p style="font-size: 20px;">HTML é uma linguagem de marcação utilizada para estruturar e dar formato ao conteúdo de documentos da web. 
    Ela é composta por um conjunto de tags que são usadas para indicar diferentes tipos de conteúdo, como títulos, parágrafos, imagens e outros elementos.</p>
    <p style="color: #00ADB5; font-size: 20px;">Tenho 11 meses de experiência com essa linguagem.</p>
    `
}

function css() {
    document.querySelector('.textSkills').innerHTML = `
    <p style="font-size: 20px;">CSS é uma linguagem de folhas de estilo utilizada para descrever a aparência e o 
    formato de um documento HTML. 
    Ela é usada para aplicar estilos, como fontes, cores, margens e outros detalhes de layout, aos elementos de um documento HTML.</p>
    <p style="color: #00ADB5; font-size: 20px;">Tenho 11 meses de experiência com essa linguagem.</p>
    `
}

function js() {
    document.querySelector('.textSkills').innerHTML = `
    <p style="font-size: 20px;">JavaScript é uma linguagem de programação de script interpretada, ou seja, é executada diretamente pelo navegador da web, sem precisar de compilação. 
    Ela é amplamente utilizada na criação de páginas da web dinâmicas e interativas, como formulários, jogos, animações e outros recursos.</p>
    <p style="color: #00ADB5; font-size: 20px;">Tenho 9 meses de experiência com essa linguagem.</p>
    `
}

function c() {
    document.querySelector('.textSkills').innerHTML = `
    <p style="font-size: 20px;">C é uma linguagem de programação de baixo nível. 
    Ela é utilizada em muitas áreas diferentes, incluindo sistemas operacionais, aplicações empresariais, drivers de dispositivos, jogos e muito mais.</p>
    <p style="color: #00ADB5; font-size: 20px;">Tenho 6 meses de experiência com essa linguagem.</p>
    `
}

function cplus() {
    document.querySelector('.textSkills').innerHTML = `
    <p style="font-size: 20px;">C++ é uma linguagem de programação de alto nível que possui muitos recursos avançados, como classes, herança, polimorfismo e outros recursos de orientação a objetos. 
    Ela também é uma linguagem de baixo nível, o que significa que é próxima da linguagem de máquina e oferece muito controle sobre os detalhes de implementação do programa.</p>
    <p style="color: #00ADB5; font-size: 20px;">Tenho 1 meses de experiência com essa linguagem.</p>
    `
}

function java() {
    document.querySelector('.textSkills').innerHTML = `
    <p style="font-size: 20px;">Java é uma linguagem de programação orientada a objetos.
    Ela é amplamente utilizada em aplicações empresariais, aplicativos da web e sistemas embarcados, entre outros.</p>
    <p style="color: #00ADB5; font-size: 20px;">Tenho 6 meses de experiência com essa linguagem.</p>
    `
}


function irParaSecao() {
    // Obtém o elemento da seção
    var secao = document.querySelector('.vem');

    // Rola até a seção
    secao.scrollIntoView();
}

function irParaSecao1() {
    // Obtém o elemento da seção
    var secao = document.querySelector('.bg-1');

    // Rola até a seção
    secao.scrollIntoView();
}

function irParaSecao2() {
    // Obtém o elemento da seção
    var secao = document.querySelector('.bg-2');

    // Rola até a seção
    secao.scrollIntoView();
}

function irParaSecao3() {
    // Obtém o elemento da seção
    var secao = document.querySelector('.bg-3');

    // Rola até a seção
    secao.scrollIntoView();
}

function irParaSecao4() {
    // Obtém o elemento da seção
    var secao = document.querySelector('.vem4');

    // Rola até a seção
    secao.scrollIntoView();
}

function irParaSecao5() {
    // Obtém o elemento da seção
    var secao = document.querySelector('.contatos');

    // Rola até a seção
    secao.scrollIntoView();
}


// Modal contato


const openModalButton = document.querySelector("#openModal");
const closeModalButton = document.querySelector("#closeModal");

const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

toggleModal = () => {
    modal.classList.toggle("hide");
    document.getElementById('modal').innerHTML = `
    <div class="modalHeader">
                    <h3>Contatos:</h3>
                </div>
                <div id="modalBody">
                    <div id="email">
                        <p><strong>Email:</strong> drumond.work@gmail.com</p>
                        <p><strong>Número:</strong> (31) 98754-7711</p>
                        <p><strong>Linkedin: </strong>www.linkedin.com/in/DrumondDev</p>
                    </div>
                </div>
    ` 

    fade.classList.toggle("hide");
}

[openModalButton, closeModalButton, fade].forEach(element => {
    element.addEventListener("click", () => toggleModal());
});



// Modal img





toggleModal2 = () => {
    modal.classList.toggle("hide");
    document.getElementById('modal').innerHTML = `
    <div class="modalHeader">
                <h3>RevoApp:</h3>
            </div>
            <div id="modalBodyWork">
                <div id="desc">
                    <p>Site no qual é possível criar, participar e patrocinar eventos.</p> 
                </div>
                <div class="imgWork">
                    <img src="/images/telaRevoApp.jpg" alt="" class="imgsWorks">
                </div>
                <div class="botaos">
                    <a href="https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2022-2-ti2-0924100-revoapp"><img src="/images/GitHub.png" alt="" id="boto"></a>
                    <a href="https://revoapp.netlify.app/"><img src="/images/Site.png" alt="" id="boto"></a>
                </div>
                
            </div>
    `
    fade.classList.toggle("hide");
}

function modal2() {
    toggleModal2()
}




toggleModal3 = () => {
    modal.classList.toggle("hide");
    document.getElementById('modal').innerHTML = `
    <div class="modalHeader">
                <h3>DinDin:</h3>
            </div>
            <div id="modalBodyWork">
                <div id="desc">
                    <p>Site no qual é possível controlar suas finaças, gastos e investimentos.</p> 
                </div>
                <div class="imgWork">
                    <img src="/images/telaDindin.jpg" alt="" class="imgsWorks">
                </div>
                <div class="botaos">
                    <a href="https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2022-1-ti1-7924100-dindin"><img src="/images/GitHub.png" alt="" id="boto"></a>
                    <a href="https://odindin.netlify.app/"><img src="/images/Site.png" alt="" id="boto"></a>
                </div>
                
                
            </div>
    `
    fade.classList.toggle("hide");
}

function modal3() {
    toggleModal3()
}


// Botao Ver mais 


function aparece(){
    document.getElementById('escondido').style.display = 'flex';
    document.getElementById('verMais').style.display = 'none';
    document.querySelector('.botaoVermais').innerHTML = `
    <input type="button" value="Ver menos" id="verMenos" onclick="esconde()">
    `
}

function esconde() {
    document.getElementById('escondido').style.display = 'none';
    document.getElementById('verMenos').style.display = 'flex';
    document.querySelector('.botaoVermais').innerHTML = `
    <input type="button" value="Ver mais" id="verMais" onclick="aparece()">
    `
}

 


