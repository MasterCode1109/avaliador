const formulario = document.querySelector("#formJogo")
const mensagem = document.querySelector("#mensagem")

formulario.addEventListener("submit" , function(event) {
    event.preventDefault();

    const nome = document.querySelector("#nome").value.trim();
    const nota = document.querySelector("#nota").value.trim();
    const categoria = document.querySelector("#categoria").value.trim();
    const categoria2 = document.querySelector("#categoria2").value.trim();
    const feedback = document.querySelector("#feedback").value.trim();
    const experiencia = document.querySelector("#experiencia").value.trim();

    console.log (nome + " " + nota + " " + categoria + " " + categoria2 + " " + feedback + " " + experiencia)

    mensagem.classList.remove("erro", "sucesso");

    if(nome === "" || nota === "" || categoria === ""){
        mensagem.textContent = "Erro: preencha todos os campos"
        mensagem.classList.add("erro");
        return;
    }

    const avaliacoesSalvas = JSON.parse(localStorage.getItem("avaliacoes")) || []
    const proximoId = Number(localStorage.getItem("proximoId")) || 1

    const novaAvalicao = {
        id: proximoId,
        nome: nome,
        nota: Number(nota),
        categoria: categoria,
        categoria2: categoria2,
        feedback: feedback,
        experiencia: experiencia,
    }

    avaliacoesSalvas.push(novaAvalicao);
    localStorage.setItem("avaliacoes", JSON.stringify(avaliacoesSalvas));
    localStorage.setItem("proximoId", proximoId + 1)

    mensagem.textContent = nome + " Listado e avaliado com sucesso" 
    mensagem.classList.add("sucesso");

    formulario.reset();
})