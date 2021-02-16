// form handler for deleting a skill 

async function deleteFormHandler(event) {
    event.preventDefault();
  
    const id = window.location.toString().split("/")[
      window.location.toString().split("/").length - 1
    ];
  
    const response = await fetch(`/api/skill/${id}`, {
      method: "DELETE"
    });
  
    if (response.ok) {
    window.alert("Skill deleted!")
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
  
  // event listener
  document
    .querySelector(".delete-skill-btn")
    .addEventListener("click", deleteFormHandler);
  