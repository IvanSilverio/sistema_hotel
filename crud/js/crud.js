// Função para mostrar a seção do CRUD correspondente
function mostrarCRUD(crudId) {
    const sections = document.querySelectorAll('.crud-section');
    sections.forEach(section => section.classList.remove('active'));

    const sectionToShow = document.getElementById(crudId);
    sectionToShow.classList.add('active');
}

// Função para adicionar um novo item a qualquer tabela
function adicionarItem(formId, tableId, campos) {
    const form = document.getElementById(formId);
    form.addEventListener("submit", function(event) {
        event.preventDefault();  // Impede o envio do formulário, para não recarregar a página

        // Obter os dados do formulário
        let valores = {};
        for (let campo in campos) {
            valores[campo] = document.getElementById(campo).value;
        }

        // Criar uma nova linha para a tabela
        const novaLinha = document.createElement("tr");

        // Criar as células da linha com os dados do item
        for (let campo in campos) {
            const celula = document.createElement("td");
            celula.textContent = valores[campo];
            novaLinha.appendChild(celula);
        }

        // Criar a célula de Ações com botões Editar e Excluir
        const celulaAcoes = document.createElement("td");
        const btnEditar = document.createElement("button");
        btnEditar.textContent = "Editar";
        btnEditar.onclick = function() {
            for (let campo in campos) {
                document.getElementById(campo).value = valores[campo];
            }
            novaLinha.remove();
        };

        const btnExcluir = document.createElement("button");
        btnExcluir.textContent = "Excluir";
        btnExcluir.onclick = function() {
            novaLinha.remove();
        };

        // Adicionar os botões de ação na célula
        celulaAcoes.appendChild(btnEditar);
        celulaAcoes.appendChild(btnExcluir);

        // Adicionar a célula de ações à nova linha
        novaLinha.appendChild(celulaAcoes);

        // Adicionar a nova linha à tabela
        document.getElementById(tableId).appendChild(novaLinha);

        // Limpar os campos do formulário
        form.reset();
    });
}

// Adicionar CRUD Funcionários
adicionarItem("funcionarioForm", "funcionarioTable", {
    "nomeFuncionario": "Nome",
    "cpfFuncionario": "CPF",
    "cargoFuncionario": "Cargo",
    "telefoneFuncionario": "Telefone"
});

// Adicionar CRUD Pagamentos
adicionarItem("pagamentoForm", "pagamentoTable", {
    "hospedePagamento": "Nome do Hóspede",
    "dataPagamento": "Data",
    "valorPagamento": "Valor Pago",
    "metodoPagamento": "Método"
});

// Adicionar CRUD Hóspedes
adicionarItem("hospedesForm", "hospedesTable", {
    "nomeHospede": "Nome",
    "nascimentoHospede": "Nascimento",
    "contatoHospede": "Contato",
    "preferenciasHospede": "Preferências"
});

// Adicionar CRUD Quartos
adicionarItem("quartosForm", "quartosTable", {
    "numeroQuarto": "Número",
    "tipoQuarto": "Tipo",
    "capacidadeQuarto": "Capacidade",
    "precoQuarto": "Preço",
    "statusQuarto": "Status"
});
