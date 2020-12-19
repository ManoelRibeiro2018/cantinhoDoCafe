const estaLogado = localStorage.getItem("Logado")
if (estaLogado != 1) {
    console.log(estaLogado)
    window.location.href = "login.html"
}

const cep = localStorage.getItem("cep")
document.getElementById("cep").value = localStorage.getItem("cep");
const logradouro = document.querySelector("#logradouro").value = localStorage.getItem("logradouro")
const localidade = document.querySelector("#localidade").value = localStorage.getItem("cidade")
const bairro = document.querySelector("#bairro").value = localStorage.getItem("bairro")




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

const ativaModal = document.querySelector('.btnComprar');
console.log(ativaModal)
ativaModal.addEventListener('click', (e) => {
    inciaModal('modal-ativar');
})