const extrairInformacoesDoAlimento = () => {

    try {

        const extrairTexto = (texto) => {
            return texto ? texto.innerText : 'A informação não está disponível';
        }

        const nomeDoAlimento = extrairTexto(document.querySelector('.title-1'));

        const codigoDeBarras = extrairTexto(document.querySelector('#barcode'));

        const marca = extrairTexto(document.querySelector('#field_brands_value'));

        const quantidade = extrairTexto(document.querySelector('#field_quantity_value'));

        const embalagem = extrairTexto(document.querySelector('#field_packaging_value'));

        const ingredientes = extrairTexto(document.querySelector('.panel_text'));

        const alimento = {
            nomeDoAlimento,
            codigoDeBarras,
            marca,
            quantidade,
            embalagem,
            ingredientes,

        }

        console.log(alimento);
    } catch (error) {
        console.error('Ocorreu um erro:', error.message);
    }
}

extrairInformacoesDoAlimento();