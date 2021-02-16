// form handler for editing a skill
// need to work on this

// Retains status from what whichever column it was originally in on edit page
const status = document.querySelector("input").getAttribute("old-status");
switch (status) {
  case "In":
    document.getElementById("IP").setAttribute("selected", "selected");
    break;
  case "To":
    document.getElementById("TBL").setAttribute("selected", "selected");
    break;
  case "Mastered":
    document.getElementById("MA").setAttribute("selected", "selected");
    break;
}

async function editFormHandler(event) {
  event.preventDefault();

  const title = document
    .querySelector('input[name="skill-title"]')
    .value.trim();
  var skillStatus = document.querySelector("#skill-status");
  const status = skillStatus.options[skillStatus.selectedIndex].text;

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const response = await fetch(`/api/skill/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      title,
      status,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
}

// event listener
document
  .querySelector(".edit-skill-form")
  .addEventListener("submit", editFormHandler);
