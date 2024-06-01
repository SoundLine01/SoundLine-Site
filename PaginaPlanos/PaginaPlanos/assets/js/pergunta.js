// Selecionando elementos
const arrows = document.querySelectorAll('#arrow');
const arrowsUp = document.querySelectorAll('.arrow_cima');
const perguntas = document.querySelectorAll('.ask');
const respostas = document.querySelectorAll('.resposta');
const respostasDois = document.querySelectorAll('.resposta_item');

// Adicionando ouvintes de evento
arrows.forEach((arrow, index) => {
    arrow.addEventListener('click', () => apresentaResposta(index));
});

arrowsUp.forEach((arrowUp, index) => {
    arrowUp.addEventListener('click', () => reverteResposta(index));
});

// Função para apresentar a resposta
function apresentaResposta(index) {
    setStyles(index, {
        pergunta: { height: 'auto', flexDirection: 'column', alignItems: 'flex-start' },
        respostaDois: { width: '100%', display: 'flex', justifyContent: 'space-between' },
        arrowUp: { display: 'block' },
        arrow: { display: 'none' },
        resposta: { display: 'flex' }
    });
}

// Função para reverter a apresentação da resposta
function reverteResposta(index) {
    setStyles(index, {
        pergunta: { height: '', flexDirection: '', alignItems: '' },
        respostaDois: { width: '', display: '', justifyContent: '' },
        arrowUp: { display: '' },
        arrow: { display: '' },
        resposta: { display: '' }
    });
}

// Função auxiliar para definir estilos
function setStyles(index, styles) {
    Object.assign(perguntas[index].style, styles.pergunta);
    Object.assign(respostasDois[index].style, styles.respostaDois);
    Object.assign(arrowsUp[index].style, styles.arrowUp);
    Object.assign(arrows[index].style, styles.arrow);
    Object.assign(respostas[index].style, styles.resposta);
}
