const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const instrumentos = {
    Violao: 0,
    Bateria: 0,
    Saxofone: 0,
    Piano: 0
};

const perguntas = [
    {
        enunciado: "Como você descreveria sua personalidade?",
        alternativas: [
            {
                texto: "Calma e introspectiva",
                instrumento: "Violao",
                afirmacao: "Violão: O violão tem um som relaxante e introspectivo, ideal para quem aprecia momentos de calma e reflexão."
            },
            {
                texto: "Energética e extrovertida",
                instrumento: "Bateria",
                afirmacao: "Bateria: A bateria é vibrante, cheia de energia e ideal para pessoas dinâmicas e extrovertidas."
            },
            {
                texto: "Criativa e espontânea",
                instrumento: "Saxofone",
                afirmacao: "Saxofone: O saxofone permite improvisos, ideal para quem é criativo e gosta de expressar sentimentos livremente."
            },
            {
                texto: "Organizada e meticulosa",
                instrumento: "Piano",
                afirmacao: "Piano: O piano requer precisão, disciplina e organização, combinando com pessoas meticulosas."
            } 
        ]
    },
        {
            enunciado: "Como você lida com mudanças repentinas?",
            alternativas: [
                {
                    texto: "Prefiro manter o controle e planejar antes de agir",
                    instrumento: "Piano",
                    afirmacao: "Piano: Preciso de precisão e controle, características que ressoam com pessoas organizadas e disciplinadas."
                },
                {
                    texto: "Adoro a adrenalina e adapto-me facilmente",
                    instrumento: "Bateria",
                    afirmacao: "Bateria: Assim como o ritmo dinâmico da bateria, você gosta de ação e movimento, adaptando-se rapidamente às mudanças."
                },
                {
                    texto: "Ajusto-me no meu tempo, sem pressa",
                    instrumento: "Violao",
                    afirmacao: "Violão: Você lida com mudanças de maneira tranquila e suave, preferindo ajustar-se com calma e serenidade."
                },
                {
                    texto: "Vejo as mudanças como oportunidades criativas",
                    instrumento: "Saxofone",
                    afirmacao: "Saxofone: Com sua habilidade para improvisar, você vê mudanças como uma chance de criar algo novo e emocionante."
                }
            ]
        },
        {
            enunciado: "Como você prefere expressar suas emoções?",
            alternativas: [
                {
                    texto: "Através de palavras bem pensadas e estruturadas",
                    instrumento: "Piano",
                    afirmacao: "Piano: A precisão e harmonia do piano refletem seu desejo de expressar emoções de forma clara e organizada."
                },
                {
                    texto: "Com ações e gestos rápidos",
                    instrumento: "Bateria",
                    afirmacao: "Bateria: Você prefere expressar-se através da ação, com intensidade e energia, semelhante ao ritmo pulsante da bateria."
                },
                {
                    texto: "De maneira calma e serena, sem pressa",
                    instrumento: "Violao",
                    afirmacao: "Violão: Seu estilo de expressão é tranquilo e introspectivo, como as melodias suaves que um violão pode tocar."
                },
                {
                    texto: "De forma espontânea e criativa",
                    instrumento: "Saxofone",
                    afirmacao: "Saxofone: Você gosta de expressar suas emoções livremente, com criatividade e espontaneidade, similar à improvisação do saxofone."
                }
            ]
        },
        {
            enunciado: "Qual é a sua atitude diante de desafios?",
            alternativas: [
                {
                    texto: "Gosto de planejar e encarar os desafios com calma",
                    instrumento: "Piano",
                    afirmacao: "Piano: Você enfrenta os desafios com paciência e organização, buscando sempre uma abordagem metódica."
                },
                {
                    texto: "Eu os enfrento com muita energia e entusiasmo",
                    instrumento: "Bateria",
                    afirmacao: "Bateria: Assim como o baterista dita o ritmo, você ataca os desafios com entusiasmo e uma energia contagiante."
                },
                {
                    texto: "Prefiro uma abordagem equilibrada e ponderada",
                    instrumento: "Violao",
                    afirmacao: "Violão: Sua abordagem aos desafios é equilibrada e cuidadosa, sem pressa, como a calma de uma melodia acústica."
                },
                {
                    texto: "Adoro a ideia de improvisar e encontrar soluções criativas",
                    instrumento: "Saxofone",
                    afirmacao: "Saxofone: Para você, os desafios são uma chance de improvisar e trazer à tona soluções criativas e inovadoras."
                }
            ]
        },
        {
            enunciado: "Que tipo de papel você gosta de assumir em um grupo?",
            alternativas: [
                {
                    texto: "Líder que organiza e define o caminho",
                    instrumento: "Piano",
                    afirmacao: "Piano: Assim como o piano pode ser o centro de uma composição, você assume um papel de liderança e organização em grupos."
                },
                {
                    texto: "O animador que mantém todos motivados",
                    instrumento: "Bateria",
                    afirmacao: "Bateria: Você é a alma do grupo, mantendo o ritmo e a motivação alta, como um baterista que dá vida à música."
                },
                {
                    texto: "Aquele que oferece suporte e harmonia",
                    instrumento: "Violao",
                    afirmacao: "Violão: Como o violão, você traz equilíbrio e harmonia ao grupo, proporcionando uma base tranquila e estável."
                },
                {
                    texto: "O criador de ideias que traz inovação",
                    instrumento: "Saxofone",
                    afirmacao: "Saxofone: Você é a fonte de novas ideias, criando soluções inovadoras e originais, como o improviso de um saxofonista."
                }
            ]
        },
        {
            enunciado: "O que te motiva em uma atividade?",
            alternativas: [
                {
                    texto: "Ver progresso constante e bem estruturado",
                    instrumento: "Piano",
                    afirmacao: "Piano: Você se motiva ao ver a evolução precisa e organizada, assim como a técnica e disciplina requeridas ao tocar piano."
                },
                {
                    texto: "A emoção e a adrenalina",
                    instrumento: "Bateria",
                    afirmacao: "Bateria: A emoção e a intensidade da atividade é o que mais te motiva, semelhante ao impacto e força da bateria."
                },
                {
                    texto: "O relaxamento e a paz que isso me proporciona",
                    instrumento: "Violao",
                    afirmacao: "Violão: O que te motiva é o estado de paz e tranquilidade que você encontra ao realizar uma atividade, tal como tocar uma canção no violão."
                },
                {
                    texto: "A liberdade de criar e explorar algo novo",
                    instrumento: "Saxofone",
                    afirmacao: "Saxofone: A liberdade criativa e a exploração são o que mais te motiva, assim como o improviso e originalidade no saxofone."
                }
            ]
        }
    ];
    
    // Adicione mais perguntas aqui conforme necessário

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const instrumentoEscolhido = opcaoSelecionada.instrumento;
    instrumentos[instrumentoEscolhido]++; // Aumenta a contagem para o instrumento escolhido
    historiaFinal += opcaoSelecionada.afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    let instrumentoFinal = "";
    let maiorContagem = 0;

    // Verifica qual instrumento tem a maior contagem
    for (const instrumento in instrumentos) {
        if (instrumentos[instrumento] > maiorContagem) {
            maiorContagem = instrumentos[instrumento];
            instrumentoFinal = instrumento;
        }
    }

    caixaPerguntas.textContent = "O instrumento que mais combina com você é:";
    textoResultado.textContent = instrumentoFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
