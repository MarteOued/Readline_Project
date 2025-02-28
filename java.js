function checkAge() {
    const ageInput = document.getElementById('ageInput').value;
    const errorMsg = document.getElementById('errorMsg');
    if (ageInput < 1 || ageInput > 120) {
        errorMsg.style.display = 'block';
    } else {
        errorMsg.style.display = 'none';
        // Traitement pour un âge valide
        alert('Âge validé !');
    }
}