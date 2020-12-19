const estaLogado = localStorage.getItem("Logado")
if (estaLogado != 1) {
    console.log(estaLogado)
    window.location.href = "login.html"
}

function inciaModal(modalID) {
    const modal = document.getElementById(modalID);
    if (modal) {

        modal.classList.add('mostrar');

        modal.addEventListener('click', (e) => {

            if (e.target.id == modalID) {
                modal.classList.remove('mostrar');
            }
        })
    }
}

const ativaModal = document.querySelector('.card');
ativaModal.addEventListener('click', (e) => {
    inciaModal('modal-ativar');
})

const ativaModal2 = document.querySelector('.cardTwo');
ativaModal2.addEventListener('click', (e) => {
    inciaModal('modal-ativar');
})

const desloga = document.querySelector(".deslogar");
desloga.addEventListener('click', (e) => {
    Deslogando()
})

function Deslogando() {
    localStorage.setItem("Logado", 0);
    window.location.href = "login.html"
}