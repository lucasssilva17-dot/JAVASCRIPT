// Classe contato 
class contato {
    constructor (nome,sobrenome,email,cpf,telefone,contato){
        this.nome=nome;
        this.sobrenome=sobrenome;
        this.email=email;
        this.cpf=cpf;
        this.telefone=telefone;
        this.contato=contato;
    }
}

function Post(form) {

    let nomeValue = form.elements.namedItem("nome").value;
    
    let data = new contato(nomeValue,
        form.elements.namedItem("sobrenome").value, 
        form.elements.namedItem("email").value, 
        form.elements.namedItem("cpf").value, 
        form.elements.namedItem("telefone").value, 
        form.elements.namedItem("contato").value
    );
    
    console.log("Novo objeto de contato criado:", data);

    if (nomeValue !== "") {
       
        alert("Obrigado Sr(a) " + nomeValue + ", os seus dados foram encaminhados com sucesso.");
    }

    return false; 
}
