// form handler for editing a skill

async function editFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="skill-title"]').value.trim();
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const response = await fetch(`/api/skill/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      title,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/skill/");
  } else {
    alert(response.statusText);
  }
}

// event listener
document.querySelector(".edit-skill-form").addEventListener("submit", editFormHandler);


