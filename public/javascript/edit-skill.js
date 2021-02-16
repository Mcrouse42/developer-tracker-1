// form handler for editing a skill
// need to work on this

async function editFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="skill-title"]').value.trim();
  var skillStatus = document.querySelector('#skill-status');
  const status = skillStatus.options[skillStatus.selectedIndex].text;

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const response = await fetch(`/api/skill/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      title,
      status
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
document.querySelector('.edit-skill-form').addEventListener('submit', editFormHandler);


