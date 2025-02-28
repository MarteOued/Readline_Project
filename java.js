function Verificationâge() {
    const ageInput = document.getElementById('ageInput').value;
    const erreur = document.getElementById('erreur');
    if (ageInput < 1 || ageInput > 120) {
        erreur.style.display = 'block';
    } else {
        erreur.style.display = 'none';
        alert('Âge validé !');
    }
}
// Box de mise en garde cookies 
function accepterCookies() {
    alert("Cookies acceptés !");
    document.getElementById('cookieBox').style.display = 'none';
}

function refuserCookies() {
    alert("Cookies refusés !");
    document.getElementById('cookieBox').style.display = 'none'; 
}