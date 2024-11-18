const hospedesForm = document.getElementById("hospedesForm");
const hospedesTable = document.getElementById("hospedesTable");

hospedesForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nomeHospede").value;
    const dataNascimento = document.getElementById("dataNascimento").value;
    const contato = document.getElementById("contatoHospede").value;
    const preferencias = document.getElementById("preferenciasHospede").value;

    const row = hospedesTable.insertRow();
    row.innerHTML = `
        <td>${nome}</td>
        <td>${dataNascimento}</td>
        <td>${contato}</td>
        <td>${preferencias}</td>
        <td>
            <button onclick="editarHospede(this)">Editar</button>
            <button onclick="excluirHospede(this)">Excluir</button>
        </td>
    `;

    hospedesForm.reset();
});

function editarHospede(button) {
    const row = button.parentNode.parentNode;
    document.getElementById("nomeHospede").value = row.cells[0].innerText;
    document.getElementById("dataNascimento").value = row.cells[1].innerText;
    document.getElementById("contatoHospede").value = row.cells[2].innerText;
    document.getElementById("preferenciasHospede").value = row.cells[3].innerText;
    row.remove();
}

function excluirHospede(button) {
    button.parentNode.parentNode.remove();
}
