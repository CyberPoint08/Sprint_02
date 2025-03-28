// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};


let idCounter = 1;

        function toggleForm() {
            const form = document.getElementById('form-container');
            form.classList.toggle('hidden');
        }

        function addContact() {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;

            if (name === "" || email === "" || phone === "") {
                alert("Preencha todos os campos!");
                return;
            }

            const table = document.getElementById("contact-list");
            const row = table.insertRow();
            row.innerHTML = `
                <td>${idCounter}</td>
                <td>${name}</td>
                <td>${email}</td>
                <td>${phone}</td>
                <td class="actions">
                    <button onclick="viewContact(this)">👁️</button>
                    <button onclick="editContact(this)">✏️</button>
                    <button onclick="deleteContact(this)">🗑️</button>
                </td>
            `;

            idCounter++;

            document.getElementById('name').value = "";
            document.getElementById('email').value = "";
            document.getElementById('phone').value = "";
        }

        function viewContact(button) {
            const row = button.parentNode.parentNode;
            const cells = row.getElementsByTagName("td");

            alert(
                `📌 Detalhes do Contato:\n\n` +
                `🔹 ID: ${cells[0].textContent}\n` +
                `🔹 Nome: ${cells[1].textContent}\n` +
                `🔹 E-mail: ${cells[2].textContent}\n` +
                `🔹 Telefone: ${cells[3].textContent}`
            );
        }

        function editContact(button) {
            const row = button.parentNode.parentNode;
            const cells = row.getElementsByTagName("td");

            const newName = prompt("Novo nome:", cells[1].textContent);
            const newEmail = prompt("Novo e-mail:", cells[2].textContent);
            const newPhone = prompt("Novo telefone:", cells[3].textContent);

            if (newName && newEmail && newPhone) {
                cells[1].textContent = newName;
                cells[2].textContent = newEmail;
                cells[3].textContent = newPhone;
            }
        }

        function deleteContact(button) {
            if (confirm("Tem certeza que deseja excluir este contato?")) {
                const row = button.parentNode.parentNode;
                row.remove();
            }
        }

document.getElementById("Dash").addEventListener("click", function(){
window.location.href = "Dashboard.html"; 
});
          
document.getElementById("Perfil").addEventListener("click", function(){
window.location.href = "Perfil.html"; 
});
          
document.getElementById("Contatos").addEventListener("click", function(){
window.location.href = "Gerenciar_Contatos.html"; 
});