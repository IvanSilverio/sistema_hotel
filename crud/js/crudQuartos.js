const quartosForm = document.getElementById("quartosForm");
const quartosTable = document.getElementById("quartosTable");

quartosForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const numero = document.getElementById("numeroQuarto").value;
    const tipo = document.getElementById("tipoQuarto").value;
    const capacidade = document.getElementById("capacidadeQuarto").value;
    const preco = document.getElementById("precoQuarto").value;
    const status = document.getElementById("statusQuarto").value;

    const row = quartosTable.insertRow();
    row.innerHTML = `
        <td>${numero}</td>
        <td>${tipo}</td>
        <td>${capacidade}</td>
        <td>${preco}</td>
        <td>${status}</td>
        <td>
            <button onclick="editarQuarto(this)">Editar</button>
            <button onclick="excluirQuarto(this)">Excluir</button>
        </td>
    `;

    quartosForm.reset();
});

function editarQuarto(button) {
    const row = button.parentNode.parentNode;
    document.getElementById("numeroQuarto").value = row.cells[0].innerText;
    document.getElementById("tipoQuarto").value = row.cells[1].innerText;
    document.getElementById("capacidadeQuarto").value = row.cells[2].innerText;
    document.getElementById("precoQuarto").value = row.cells[3].innerText;
    document.getElementById("statusQuarto").value = row.cells[4].innerText;
    row.remove();
}

function excluirQuarto(button) {
    button.parentNode.parentNode.remove();
}
