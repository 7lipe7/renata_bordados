document.addEventListener('DOMContentLoaded', function () {

    // Atualiza o ano automaticamente
    const ano = document.querySelector('#ano');
    if (ano) {
        ano.textContent = new Date().getFullYear();
    }

    // Botões
    const btnProduto = document.querySelector('#produtos');
    const btnContato = document.querySelector('#contato');
    const btnOrcamento = document.querySelector('#orcamento');
    const whatsappBtn = document.querySelector('#whatsapp');
    const instagramBtn = document.querySelector('#instagram');
 

    // WhatsApp
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function (e) {
            e.preventDefault();
            window.open('https://wa.me/5519998514898?text=ola gostaria de saber mais sobre os bordados', '_blank');
        });
    }

    // Instagram
    if (instagramBtn) {
        instagramBtn.addEventListener('click', function (e) {
            e.preventDefault();
            window.open('https://www.instagram.com/renata_bordados84?igsh=ajlscnFjMjJtMnFn', '_blank');
        });
    }

    // Produtos (scroll interno)
const linkProdutos = document.querySelector('#linkProdutos');

if (linkProdutos) {
    linkProdutos.addEventListener('click', function(e) {
        e.preventDefault();

        const secao = document.querySelector('#Produtos');
        if (secao) {
            secao.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
}

    // Contato (Instagram)
    if (btnContato) {
        btnContato.addEventListener('click', function (e) {
            e.preventDefault();
            window.open('https://www.instagram.com/renata_bordados84?igsh=ajlscnFjMjJtMnFn', '_blank');
        });
    }

    // Orçamento (WhatsApp)
    if (btnOrcamento) {
        btnOrcamento.addEventListener('click', function (e) {
            e.preventDefault();
            window.open('https://wa.me/5519998514898?text=ola gostaria de fazer um bordado personalizado', '_blank');
        });
    }

});

