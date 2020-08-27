var title = document.querySelector("#titulopagina");

title.textContent = "Desafio Rafael";

var array1 = [];
var array2 = [];
var participantes = []

/*
    Função que pega da caixa de texto no evento digitada no html
    e guarda na variavel pessoa quando o evendo do botao onclick é chamado

    Depois chama a função que adiciona a 
    pessoa no array de participantes
*/


function adicionaParticipante() {
    var pessoa = document.getElementById('nome').value;
    adicionaNoArray(pessoa);
    mostraParticipantes();

    document.querySelector('#nome').value = '';
    document.querySelector('#nome').focus();
}

/*
    Adiciona no array o que estiver digitado dentro da caixa de texto no html.
*/

// B a n a n a
// 0 1 2 3 4 5 
// substring(0,2) -> Ba


function adicionaNoArray(pessoa) {
    // Pega a primeira letra, a tranforma em maiuscula, e junta com o resto da string
    pessoa = pessoa.substring(0,1).toUpperCase().concat(pessoa.substring(1));
    // Adiciona a pessoa ao array participantes
    participantes.push(pessoa);
}

/*
    Pega o que está dentro do array participantes e
    Embaralha de forma aleatória.
*/

function executaEmbaralhamento(participantes){
    participantes.sort(() => Math.random() - 0.5);
    return participantes;    
}

function mostraParticipantes(){
    var tabelaParticipantes = '';
    // Coloca o array em ordem alfabetica
    var participantesAlfabetica = participantes.sort();
    // Adiciona as pessoa gradativamente na tabela esquerda
    for(i=0;i < participantesAlfabetica.length; i++){
        tabelaParticipantes += '<tr class="participante"><td class="info-nome">'+ participantesAlfabetica[i] +'</td><td class="info-sorteada"></td></tr>';
    }
    // Insere o codigo html da tabela no arquivo html na parte da tbody
    document.getElementById('sorteio').innerHTML = tabelaParticipantes;
}

function SorteiaTabela (){

    // Limpa os arrays para receber os dados
    array1 = [];
    array2 = [];

    // Executa o embaralhamento
    var random_participantes = executaEmbaralhamento(participantes);

    for(i=0; i< random_participantes.length;i++){
        array1.push(random_participantes[i]);
        // Verifica se é a ultima posição do array
        if(i == random_participantes.length - 1 ){
            array2.push(random_participantes[0]);
        }else{
            array2.push(random_participantes[i+1]);
        }
    }
    // Variavel que vai receber o html
    var html_table = '';
    // Coloca o array em ordem alfabetica novamente
    participantes.sort();
    // Participantes a posicao do A é 0  mas no array1 a posição é 3
    // Para deixar organizado em ordem alfabetica
    // É necessario descobri em que posição está o A dentro do array1
    // Descobrindo isso, podemos pegar o sorteado dele pela mesma posição, afinal array1 e array2 estão alinhados
    
    
    // Vasculha cada indice do array
    participantes.forEach((part)=>{
        // ['x','y','z']  saber qual posição está o y
        // Ai vocÊ pode usar o metodo indexOf que vai te retornar a posição em que está o y [1]
        const posicao = array1.indexOf(part) 
        html_table =  html_table + '<tr><td>'+ part + '</td><td>' + array2[posicao] + '</td></tr>' //3
    });

    document.getElementById('sorteio').innerHTML = html_table;
    
}





// console.log('['+ array1 + '] - [' + array2 + ']');

  /*
        random_participantes.forEach((participante)=>{
            // participante == participantesSelecionados[i]
            
        });
    */


    // for(i=0; i< participantesSelecionados.length;i++){

    //     console.clear();

    //     // Pega as informações participante atual
    //     participante = participantesSelecionados[i];


    //     // Pega o nome do participante atual
    //     const tdParticipante = participante.querySelector(".info-nome");
    //     const ParticipanteNome = tdParticipante.textContent;

        
        
    //     // Copia o array com todos os participantes e tira o participante atual
    //     const arrayProvisorio = participantes;
    //     console.log(arrayProvisorio);

    //     // splice -> Retira do array
    //     // indexOf -> Procura onde está alocado o texto no array a partir do conteudo passado pra ele
    //     // Exemplo: procura em qual posição do array esta o nome do participante
    //     arrayProvisorio.splice(arrayProvisorio.indexOf(ParticipanteNome), 1);
    //     // [JOAO, PEDRO, JOSE, MARIA, THIAGO]
    //     // 3
        
    //     // Pega o tamanho do array copiado
    //     const tamanhoArray = arrayProvisorio.length;

    //     // Sorteia um numero de 0 ate a quantidade de participantes do array copiado 
    //     const numeroSorteado = Math.floor(Math.random() * [tamanhoArray]);

    //     // Pega a pessoa sorteada no array
    //     const PessoaSorteada = arrayProvisorio[numeroSorteado];

    //     arrayProvisorio.push(ParticipanteNome);

    //     // Mostra na tabela
    //     const a = participante.querySelector(".info-sorteada")
    //     a.textContent = PessoaSorteada;

    //     console.log(participante)

    // }   