const form = document.getElementById("courseForm");
const list = document.getElementById("list");

let students = JSON.parse(localStorage.getItem("students")) || [];
let editIndex = null;

renderStudents();

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const gender = document.getElementById("gender").value;
    const birth = document.getElementById("birth").value;
    const subject = document.getElementById("subject").value;
    const time = document.getElementById("time").value;
    const days = document.getElementById("days").value;
    const phone = document.getElementById("phone").value;

    const student = {
        name: name,
        gender: gender,
        birth: birth,
        subject: subject,
        time: time,
        days: days,
        phone: phone
    };

    if (editIndex === null) {
        students.push(student);
    } else {
        students[editIndex] = student;
        editIndex = null;
        form.querySelector("button").textContent = "Qo'shish";
    }

    localStorage.setItem("students", JSON.stringify(students));
    renderStudents();
    form.reset();
});

function renderStudents() {
    list.innerHTML = "";

    for (let i = 0; i < students.length; i++) {

        const card = document.createElement("div");
        card.className = "card";

        const info = document.createElement("div");
        info.className = "card-info";

        info.innerHTML =
            "<strong>" + students[i].name + "</strong><br>" +
            students[i].gender + " / " +
            students[i].birth + " / " +
            students[i].subject + " / " +
            students[i].time + " / " +
            students[i].days + " / " +
            students[i].phone;

        const buttons = document.createElement("div");
        buttons.className = "card-buttons";

        const editBtn = document.createElement("button");
        editBtn.textContent = "Tahrirlash";
        editBtn.className = "edit-btn";

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "O'chirish";
        deleteBtn.className = "delete-btn";

        editBtn.addEventListener("click", function () {

            document.getElementById("name").value = students[i].name;
            document.getElementById("gender").value = students[i].gender;
            document.getElementById("birth").value = students[i].birth;
            document.getElementById("subject").value = students[i].subject;
            document.getElementById("time").value = students[i].time;
            document.getElementById("days").value = students[i].days;
            document.getElementById("phone").value = students[i].phone;

            editIndex = i;
            form.querySelector("button").textContent = "Saqlash";
        });

        deleteBtn.addEventListener("click", function () {
            students.splice(i, 1);
            localStorage.setItem("students", JSON.stringify(students));
            renderStudents();
        });

        buttons.appendChild(editBtn);
        buttons.appendChild(deleteBtn);

        card.appendChild(info);
        card.appendChild(buttons);

        list.appendChild(card);
    }
}       