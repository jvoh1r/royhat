const form = document.getElementById("courseForm");
const list = document.getElementById("list");

let editMode = false;
let editCard = null;

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const gender = document.getElementById("gender").value;
    const birth = document.getElementById("birth").value;
    const subject = document.getElementById("subject").value;
    const time = document.getElementById("time").value;
    const price = document.getElementById("price").value;
    const phone = document.getElementById("phone").value;

    const text =
        "<strong>" + name + "</strong><br>" +
        gender + " / " + birth + " / " + subject + " / " +
        time + " / " + price + " so'm / " + phone;

    if (editMode) {

        editCard.querySelector(".card-info").innerHTML = text;

        editMode = false;
        editCard = null;
        form.querySelector("button").textContent = "Qo'shish";

    } else {

        const card = document.createElement("div");
        card.className = "card";

        const info = document.createElement("div");
        info.className = "card-info";
        info.innerHTML = text;

        const buttons = document.createElement("div");
        buttons.className = "card-buttons";

        const editBtn = document.createElement("button");
        editBtn.textContent = "Tahrirlash";
        editBtn.className = "edit-btn";

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "O'chirish";
        deleteBtn.className = "delete-btn";

        editBtn.addEventListener("click", function () {

            document.getElementById("name").value = name;
            document.getElementById("gender").value = gender;
            document.getElementById("birth").value = birth;
            document.getElementById("subject").value = subject;
            document.getElementById("time").value = time;
            document.getElementById("price").value = price;
            document.getElementById("phone").value = phone;

            editMode = true;
            editCard = card;
            form.querySelector("button").textContent = "Saqlash";
        });

        deleteBtn.addEventListener("click", function () {
            list.removeChild(card);
        });

        buttons.appendChild(editBtn);
        buttons.appendChild(deleteBtn);

        card.appendChild(info);
        card.appendChild(buttons);

        list.appendChild(card);
    }

    form.reset();
});