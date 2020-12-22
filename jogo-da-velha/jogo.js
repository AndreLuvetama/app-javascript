//alert('Pronto para uso')

$(document).ready(function(){
   $('#staticBackdrop').modal('show');
 // $("#resultGame").modal('show');

    $('#btn_jogo').click(function() {
        capturDadosJogador();
    });

    $("td").click(function(){
        if($(this).html() == ""){
            preecheColuna(this);
        }
    });

    $("#btn_jogadorUm").click(function() {
        adicionaValorAoRank("um")
    })
    $("#btn_jogadorDois").click(function() {
        adicionaValorAoRank("dois")
    })
    $("#btn_Empate").click(function() {
        adicionaValorAoRank("empate")
    })

    // Sempre que o jogo for em pate ao clicar no modal para informar o empate
    //o número de rodada será zerada
    $('#resulGame').on('show.bs.modal', function (event) {
        numeroDeRodadas = 0
      })

 
});

function capturDadosJogador(){
    var jogadorUm = $('input[name = "input_jogadorUm"]').val();
    var jogadorDois = $('input[name = "input_jogadorDois"]').val();
     
    var iniciarJogo = true;
    if (jogadorUm == "" || jogadorDois == ""){
        alert("Preencha todos os dados do formulário")
        iniciarJogo = false
    }
   if (iniciarJogo == true){
       $('#staticBackdrop').modal('hide');
       preencherNomeJogador()
       $('#jogo').show('slow');
   }



}
function preencherNomeJogador(){
    var jogadorUm = $("input[name = 'input_jogadorUm']").val();
    var jogadorDois = $("input[name = 'input_jogadorDois']").val();
 
     // coloca o nome dos jogadores no elemento button --> span_jogadorUm, #btn_jogadorUm
    $("#span_jogadorUm, #btn_jogadorUm").html(jogadorUm);
    $("#span_jogadorDois, #btn_jogadorDois").html(jogadorDois);
}
var ultimaJogada = "";
var numeroDeRodadas = 0

function preecheColuna(coluna){
    var jogadaAtual;
    if(ultimaJogada == ""){
        jogadaAtual = "X";
    }
    if(ultimaJogada == "O"){
        jogadaAtual = "X"
    }
    if( ultimaJogada == "X"){
        jogadaAtual = "O"
    }
    ultimaJogada = jogadaAtual;

    $(coluna).html(jogadaAtual);
    numeroDeRodadas = numeroDeRodadas + 1

    if(numeroDeRodadas == 9){
        $("#resultGame").modal('show')
        numeroDeRodadas = 0
    }

}

var scoreJogadorUm = 0;
var scoreJogadorDois = 0;

function adicionaValorAoRank(vencedor){
    if(vencedor == "um"){
        scoreJogadorUm = scoreJogadorUm + 1
    }
     if(vencedor == "dois"){
        scoreJogadorDois = scoreJogadorDois + 1
       }
           
        $("#span_jogadorUm_score").html(scoreJogadorUm)
        $("#span_jogadorDois_score").html(scoreJogadorDois)

        $("#resultGame").modal('hide');
        $("td").html("")
   
}