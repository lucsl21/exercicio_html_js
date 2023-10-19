const form = document.getElementById('form-numero');



form.addEventListener('submit', function(e){
    e.preventDefault();
    const campoA = document.getElementById('numero-1').value;
    const campoB = document.getElementById('numero-2').value;
    if (campoA < campoB) {
        const valorSucesso = document.querySelector('.sucesso');
        valorSucesso.innerHTML = ('Formulário enviado com sucesso');
        valorSucesso.style.display = 'block';
    } else {
        const valorErro = document.querySelector('.erro');
        valorErro.innerHTML = ('Campo A maior que o Campo B - formulário não enviado');
        valorErro.style.display = 'block';
    }
})
