const funcionarioForm = document.getElementById('funcionarioForm');
const funcionarioTable = document.getElementById('funcionarioTable');

funcionarioForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const cargo = document.getElementById('cargo').value;
    const telefone = document.getElementById('telefone').value;

    const row = funcionarioTable.insertRow();
    row.innerHTML = `
        <td>${nome}</td>
        <td>${cpf}</td>
        <td>${cargo}</td>
        <td>${telefone}</td>
        <td>
            <button onclick="editarFuncionario(this)">Editar</button>
            <button onclick="excluirFuncionario(this)">Excluir</button>
        </td>
    `;

    funcionarioForm.reset();
});

function editarFuncionario(button) {
    const row = button.parentNode.parentNode;
    document.getElementById('nome').value = row.cells[0].innerText;
    document.getElementById('cpf').value = row.cells[1].innerText;
    document.getElementById('cargo').value = row.cells[2].innerText;
    document.getElementById('telefone').value = row.cells[3].innerText;
    row.remove();
}

function excluirFuncionario(button) {
    button.parentNode.parentNode.remove();
}
