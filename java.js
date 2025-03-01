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

function filterMovies(genre) {
    let allMovies = document.querySelectorAll('.movie');
    let extraMovies = document.getElementById('extraMovies');

    allMovies.forEach(movie => {
        if (genre === 'all') {
            movie.style.display = 'inline-block';
        } else {
            if (movie.classList.contains(genre)) {
                movie.style.display = 'inline-block';
            } else {
                movie.style.display = 'none';
            }
        }
    });

    // Cacher les films supplémentaires si on filtre
    extraMovies.classList.add('hidden');
    document.getElementById('toggleBtn').textContent = "Plus de films";
}

function toggleMovies() {
    let extraMovies = document.getElementById('extraMovies');
    let toggleBtn = document.getElementById('toggleBtn');

    if (extraMovies.classList.contains('hidden')) {
        extraMovies.classList.remove('hidden');
        toggleBtn.textContent = "Moins de films";
    } else {
        extraMovies.classList.add('hidden');
        toggleBtn.textContent = "Plus de films";
    }
}