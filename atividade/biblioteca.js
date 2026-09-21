const jogosSalvos = document.querySelector('tbody')

const avaliacoesSalvas = JSON.parse(localStorage.getItem("avaliacoes")) || []

avaliacoesSalvas.forEach((avaliacoes) => {
    const linha = document.createElement("tr");

    const colunaId =document.createElement("td");
    colunaId.textContent = avaliacoes.id;

    const colunaNome = document.createElement("td");
    colunaNome.textContent= avaliacoes.nome;

    const colunaNota = document.createElement("td");
    colunaNota.textContent = avaliacoes.nota

    const colunaCategoria = document.createElement("td");
    colunaCategoria.textContent = avaliacoes.categoria

    const colunaCategoria2 = document.createElement("td");
    colunaCategoria2.textContent = avaliacoes.categoria

    const colunaFeedback = document.createElement("td");
    colunaFeedback.textContent = avaliacoes.feedback

    const colunaExperiencia = document.createElement("td");
    colunaExperiencia.textContent = avaliacoes.experiencia

    const colunaAcao = document.createElement("td");
    colunaAcao.classList.add("acao");

    const botaoEditar = document.createElement("button");
    botaoEditar.textContent = "editar";
    botaoEditar.classList.add("botaoEditar")

    const botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "Excluir";
    botaoExcluir.classList.add("botaoExcluir")

    colunaAcao.append(botaoEditar, botaoExcluir);

    linha.append(colunaId,
         colunaNome, 
         colunaNota, colunaCategoria, 
         colunaCategoria2, 
         colunaFeedback,
         colunaExperiencia, 
         colunaAcao
        )
    jogosSalvos.append(linha);
})