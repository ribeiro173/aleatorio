// Esta função é chamada quando o botão "Entrar" é clicado
function verificarLogin() {
    // Captura o valor digitado no campo de usuário
    const usuario = document.getElementById("usuario").value;
  
    // Captura o valor digitado no campo de senha
    const senha = document.getElementById("senha").value;
  
    // Seleciona a área onde será exibida a mensagem (erro ou sucesso)
    const mensagem = document.getElementById("mensagem");
  
    // Verifica se os dados digitados são iguais ao esperado
    if (usuario === "admin" && senha === "123@456") {
      // Se estiver correto, redireciona imediatamente para o Google Classroom
      window.location.href = "https://classroom.google.com/";
    } else {
      // Se estiver incorreto, exibe uma mensagem de erro em vermelho
      mensagem.style.color = "red";
      mensagem.innerText = "Usuário ou senha incorretos.";
    }
  }
  