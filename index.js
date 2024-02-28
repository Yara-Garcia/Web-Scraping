const extrairInformacoesDoAlimento = () => {

    try {

        const extrairTexto = (texto) => {
            return texto ? texto.innerText.trim() : 'A informação não está disponível';
        }

        const nomeDoAlimento = extrairTexto(document.querySelector('.title-1'));

        const codigoDeBarras = extrairTexto(document.querySelector('#barcode'));

        const marca = extrairTexto(document.querySelector('#field_brands_value'));

        const quantidade = extrairTexto(document.querySelector('#field_quantity_value'));

        const embalagem = extrairTexto(document.querySelector('#field_packaging_value'));

        const ingredientes = extrairTexto(document.querySelector('.panel_text'));

        const localDeFabricacao = extrairTexto(document.querySelector('#field_manufacturing_places_value'));

        const classificacaoNova = extrairTexto(document.querySelector('#panel_nova'));

        const ecoScore = extrairTexto(document.querySelector('#panel_ecoscore'));

        const nutriScoreLetra = document.querySelector('.grade_e_title').innerText;
        const nutriScoreClassificacao = document.querySelector('.grade_e_title').nextSibling.innerText;
        const nutriScore = (nutriScoreLetra && nutriScoreClassificacao) ? `${nutriScoreLetra} (${nutriScoreClassificacao})` : 'Informação não disponível';

        const informacoesDoAlimento = {
            nomeDoAlimento,
            codigoDeBarras,
            marca,
            quantidade,
            embalagem,
            ingredientes,
            localDeFabricacao,
            nutriScore,
            classificacaoNova,
            ecoScore
        }

        console.log(JSON.stringify(informacoesDoAlimento, null, 2));

    } catch (error) {
        console.error('Ocorreu um erro:', error.message);
    }
}

extrairInformacoesDoAlimento();