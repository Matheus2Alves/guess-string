window.onload = function() {
    const listOfWords = `sagaz âmago negro êxito termo mexer nobre senso afeto algoz ética plena mútua tênue fazer assim sutil vigor aquém porém seção sanar fosse audaz ideia poder cerne inato moral desde sobre justo muito honra torpe quiçá sonho fútil razão ícone etnia anexo amigo égide tange lapso expor haver mútuo dengo tempo casal hábil então seara boçal ávido pesar ardil genro causa saber dizer graça posse coser pária óbice dever prole tenaz corja brado crivo detém comum sendo ânimo ápice temor ânsia ceder ainda digno pauta culto assaz estar atroz mundo censo fugaz gleba forte xibiu vício vulgo valha cozer denso neném revés pudor regra dogma criar louco saúde jeito atrás round banal ordem mesmo impor mercê clava pedir homem feliz apraz tenro desse usura pífio coisa sábio servo juízo prosa todos limbo forma presa reaça viril ontem falar cunho manso devir meiga posso vendo fluir ébrio certo afago mágoa herói sério platô puder valor guisa visar acaso lugar temer ímpio falso abrir afins cisma pleno fácil bruma óbvio obter gerar legal crise êxodo matiz praxe garbo senil burro fluxo vênia havia união tédio enfim ritmo linda tomar visão álibi parvo olhar morte gênio levar bravo brega pulha favor vital casta prumo reter valia parco reles grato ajuda vivaz laico possa tecer falta ameno sábia noção cabal ranço ouvir óbito prime carma viver nicho noite achar força calma selar fator façam outro passo rogar anelo coeso farsa fardo épico citar ativo pobre único sinto cisão tendo adiar dúbio rever sonso leigo ciúme gente haste terra sesta humor cesta sulco deter tende exato revel amplo velho claro vemos lavra atuar labor árduo imune feixe ponto igual gesto ideal débil ótica hiato marco líder fonte terno ambos sonsa vácuo toada varão remir cauda capaz senão ficar jovem papel vazio inata coçar fusão tenra velar caçar relva xeque tanto leito algum horda série advém farão apoio probo doido pouco raiva entre nossa coesa sente frase vimos torço minha anuir verso feito botar rigor chuva massa cruel dorso signo blasé brisa ímpar ciclo chata moção prece fauna trama credo lazer covil preso casto maior morar carro peste ambas furor pegar dócil flora faina vírus sorte adeus vetor seita houve árido livro setor liame meses senda manha pecha beata comer peixe aceso plano ardor banzo nunca vulto visse salvo breve ocaso vasto antro saiba aliás morro birra pajem prado rezar reger saída segue mudar junto avaro ótimo motim átomo áureo sinal serão praia chulo parte campo grupo lenda acima andar fugir opção brava treta nação parar risco anais fruir fitar leite rapaz jazia ídolo agora prazo tenso gerir puxar alude anciã vilão bando norma antes áurea tosco época malta tirar psico exame índio texto reino sinhá conta arcar verbo avião praga corpo aonde venal filho preto cheio prova quase quota estão voraz traga logro certa oxalá fatal soldo festa turba acesa sumir apego fixar cópia manhã átrio pompa oásis fatos ligar coito caixa nódoa nível alado virão messe mente solto perda tocar lindo sarça magia verve fraco afora livre turva dessa apelo exijo parca tinha grave jirau lidar opaco firme parva doído sabia glosa pardo trupe longe fenda elite faixa astro navio bater nosso grata vezes alçar salve viria autor ficha supra sexta ético pique reses cioso porta irmão atual deixa retém junco macio calda bicho verba cânon douto pagão cousa besta privê abuso posto abriu curso judeu bônus molho locus supor torso caber drops light extra vídeo rádio bioma desta culpa menos asilo vosso júlia zelar combo ígneo órfão vinha turvo calão baixo ruína gosto pisar agudo advir rouca suave super ereto sítio traço facho chato estio aluno turma paira finda facto ações meigo pódio pilar amena surja lápis cútis chama louça peito feudo mosto piada tento autos rumor urgia brabo museu local cocho tetra acolá refém páreo clean geral boato lasso mesma optar ávida hobby drama poema medir passa folga coral metiê clima teste rubro pacto ateia forem poeta crime ponha golpe feroz móvel lição penta cacho busca cetro tacha vigia letal aroma açude daqui verde monte idoso aviso calmo hoste amiga pasmo carta riste swing ecoar vetar rival troça plumo fazia tribo fórum briga monge falha conto ébano lesse cover roupa plebe pedra finjo súcia artur corso tarde escol axila venha manga chefe única fruto macro plaga grama cargo civil sósia sarau casar bença vento saldo átimo mangá itens perco berro farta úteis virar ornar viram légua nuvem arado troca bruta catre beijo pinho fosso tiver seixo magna gíria jejum traje vazão deste amada estro assar surto órgão areia renda tição trato perto tutor bruto inter porte amado canso stand mídia recém guria gabar feita bazar volta silvo vedar rural arfar natal depor âmbar grota irado nesse tchau cifra jogar bucho laudo vadio fossa pomar pavor close odiar régio clero deram rocha segar vagar mamãe minar xucro bolsa aviar canto negar visto lesão molde pasma densa cenho cinto todas proto chula logos marca etapa invés nesta sótão vista troco santo horto ferpa largo morfo paiol tenha ruído nessa velha cheia varoa urdir lesto penso cerca podar pugna vasta ágape úbere burra ileso coroa ufano mocho símio salmo verão fundo esgar frota letra final cível linha bulir úmido ceita narco piche trago calor apear jazer pólis resto preço ardis manto folha misto troço peita matar álamo dança folia monta neste redor cosmo seiva lábia áudio chaga banto bolso queda mover álbum barro barão campa limpo gemer demão retro findo calvo porca macho venho axial canil punha louro logia fazes farol sabor lutar arroz justa mimar sofia calça rente salva enjoo veloz chave lousa firma nácar baixa bedel torna coevo zumbi longo sigla vazia solta míope pedro fugiu ousar forro reler gueto falsa tumba farto sexto corar lucro outra urgir subir fátuo dados louca nariz vário valer penca mania custo repor sugar cacto cardo harém obtém passe versa ultra disso sadio corte modal toque diabo puído lento sabiá quite xampu hífen staff choça pagar bruxa nesga usual ferir samba sócio garra ceifa bugre rédea viger`

    let dictionary = listOfWords.split(" ")
    let randomWord = () => {
        return dictionary[Math.floor(Math.random() * dictionary.length)];
    }
    let generatedWord = randomWord() 
    const clientSubmit = document.querySelector('input#word2')
    let wordValueClient = ''
    let divPosition = 0
    var validation = document.querySelector('section#validations')
    let isRandomWordGenerated = false
    
    clientSubmit.addEventListener('click', () => {
        validation.innerHTML = ''
        validation.style.backgroundColor = '#001021'
        let wordClient = document.querySelector('input#word1')
        wordValueClient = wordClient.value
        if(wordValueClient.length !== 5) {
            validation.innerHTML = 'invalid word'
            validation.style.backgroundColor = '#800E13'
        } else {
            const result = checkWord(wordValueClient, generatedWord) 
            const {characterCorrect, characterIncorrect, characterOutOfOrder} = result 
            let characterWord = document.querySelectorAll('div.characterWord')
            
            for (let i = 0; i < 5; i++) {
                const characterDiv = characterWord[divPosition + i];
                const characterInfo = result[i]; 
            
                characterDiv.innerHTML = characterInfo.character; 

                characterDiv.classList.remove('correct')
            
                if (characterInfo.isCorrect) {
                    characterDiv.classList.add('correct');
                  } else if (characterInfo.isInOrder) {
                    characterDiv.classList.add('in-order');
                  }
            }
            divPosition += 5

            if(divPosition >= 25) {
                divPosition = 0
                clearWords()
                //generatedWord = randomWord()
                isRandomWordGenerated = true
            }

            if(isRandomWordGenerated && wordValueClient !== generatedWord) {
                divPosition = 0
                validation.innerHTML = `Flop!(camilou)<br> a palavra era <strong>${generatedWord}<strong>`
                validation.style.backgroundColor = '#800E13'
                generatedWord = randomWord()
            } 

            if(isRandomWordGenerated) {      
                isRandomWordGenerated = false
            }

            if(wordValueClient == generatedWord) {
                validation.innerHTML = 'congratulations!'
                validation.style.backgroundColor = '#1DD3B0'
                clearWords()
                divPosition = 0
                generatedWord = randomWord()
                isRandomWordGenerated = true
            }

        }

        function clearWords() {
            let characterWord = document.querySelectorAll('div.characterWord');
            characterWord.forEach((element) => {
              element.innerHTML = '';
              element.classList.remove('correct', 'in-order')
            });
          }

        function checkWord(string1, string2) {
        const character1 = Array.from(string1);
        const character2 = Array.from(string2);
        
        const characterInfo = [];
        
        for (let i = 0; i < character1.length; i++) {
            const character = character1[i];
            const isInOrder = character2.includes(character)
            const isCorrect = isInOrder && character === character2[i]
            
            characterInfo.push({
            character,
            isCorrect,  
            isInOrder
            });
        }
        
        return characterInfo;
        }
          
        
        
    })
}
  

/*function checkWord(string1, string2) {
            const character1 = Array.from(string1);
            const character2 = Array.from(string2);
            const characterInfo = []
          
            const characterIncorrect = [];
            const characterOutOfOrder = [];
            const characterCorrect = [];
          
            for (let i = 0; i < character1.length; i++) {
              if (character1[i] !== character2[i]) {
                characterIncorrect.push(character1[i]);
              } else {
                if (i !== string2.indexOf(character1[i])) {
                  characterOutOfOrder.push(character1[i]);
                } else {
                  characterCorrect.push(character1[i]);
                }
              }
            }
            return  {characterCorrect, characterIncorrect, characterOutOfOrder}
          }*/
        
         /* let characterWord = document.querySelectorAll('div.characterWord')
            for(let i = 0; i < 5; i++) {
                characterWord[divPosition + i].innerHTML = wordValueClient[i]
            }*/