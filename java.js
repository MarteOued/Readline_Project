function Verificationâge() {
    const ageInput = document.getElementById('ageInput').value;
    const errorMsg = document.getElementById('errorMsg');
    if (ageInput < 1 || ageInput > 120) {
        erreur.style.display = 'block';
    } else {
        erreur.style.display = 'none';
        // Traitement pour un âge valide
        alert('Âge validé !');
    }
}
function accepterCookies() {
    alert("Cookies acceptés !");
    document.getElementById('cookieBox').style.display = 'none'; // Masque la boîte
}

function refuserCookies() {
    alert("Cookies refusés !");
    document.getElementById('cookieBox').style.display = 'none'; // Masque la boîte
}