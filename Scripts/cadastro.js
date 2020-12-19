const cep = document.querySelector("#cep")
const cpf = document.querySelector("#cpf")
const nome = document.querySelector("#nome")
const logradouro = document.querySelector("#logradouro")
const localidade = document.querySelector("#localidade")
const bairro = document.querySelector("#bairro")
const email = document.querySelector("#email")
const senha = document.querySelector("#senha")

const showData = (result) => {
    for (const campo in result) {
        if (document.querySelector("#" + campo)) {
            document.querySelector("#" + campo).value = result[campo];

        }

    }
}

cep.addEventListener("blur", (e) => {
    let search = cep.value.replace("-", "");
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }
    fetch(`https://viacep.com.br/ws/${search}/json`, options)
        .then(response => response.json()
            .then(data => showData(data)))

})


function inciaModal(modalID) {
    if (email.value == "" || cep.value == "" || cpf.value == "" || email.value == "" || localidade.value == "" || logradouro.value == "" || senha.value == "") {
        const modal = document.getElementById(modalID);
        if (modal) {
            modal.classList.add('mostrar');
            modal.addEventListener('click', (e) => {
                if (e.target.id == modalID || e.target.className == 'fechar' || e.target.className == 'cancelar-fim-chamado') {
                    modal.classList.remove('mostrar');
                }
            })
        }
    } else {
        localStorage.setItem("Status", "Ativo")
        localStorage.setItem("CPF", cpf.value)
        localStorage.setItem("Nome", nome.value)
        localStorage.setItem("cep", cep.value)
        localStorage.setItem("logradouro", logradouro.value)
        localStorage.setItem("cidade", localidade.value)
        localStorage.setItem("bairro", bairro.value)
        localStorage.setItem("email", email.value)
        localStorage.setItem("Logado", 1)
        window.location.href = "index.html"
    }


}
const ativarModal = document.querySelector('.btnCadastrar');
console.log(ativarModal)
ativarModal.addEventListener('click', (e) => {
    inciaModal('modal-ativar');
})