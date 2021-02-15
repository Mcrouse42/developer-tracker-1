
async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="skill-title"]').value;
    var skillStatus = document.querySelector('#status')
    const status = skillStatus.options[skillStatus.selectedIndex].text;
    
    const response = await fetch(`/`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            status
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        location.reload();
        console.log('ok')
        } else {
            alert(response.statusText);
        }
}

document.querySelector('.new-skill-form').addEventListener('submit', newFormHandler);