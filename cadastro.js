(() => {
    const folhas = document.querySelectorAll(`[data-folha]`);

    esconderConteudos = () => {
        const conteudos = document.querySelectorAll(`[data-conteudo]`)

        conteudos.forEach(conteudo => conteudo.classList.add('hide'));
    }
    inativarFolhas = () => {
       folhas.forEach(folha => folha.classList.remove('ativa'));
    }

    ativarConteudo = (valor) => {
        const conteudo = document.querySelector(`[data-conteudo = "${valor}"]`)

        conteudo.classList.remove('hide');
    }
    ativarFolha = (folha) => {
        folha.classList.add('ativa');
    }
   folhas.forEach(folha => folha .addEventListener ('click' , () => {
        const valor =folha.dataset.folha

        esconderConteudos();
        inativarFolhas();
        ativarConteudo(valor);
        ativarFolha(folha);
    }))
        
    
})()
