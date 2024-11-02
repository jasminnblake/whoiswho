window.onload = function() {
    alert("¡Bienvenido al juego '¿Quién es Quién?'!");
}

function selectCharacter(character, id) {
    let hints = {
        'Mabel Pines': "¡Ella es divertida y le encanta la moda!",
        'Dipper Pines': "Él es el hermano inteligente que siempre investiga.",
        'Wendy Corduroy': "Es una chica genial y aventurera.",
        'Bill Cipher': "Un extraño y poderoso ser del otro lado.",
        'Soos Ramirez': "Es un gran amigo y trabaja en el Mystery Shack.",
        'Pacifica Northwest': "Una chica rica que solía ser la enemiga.",
        'Gideon Gleeful': "Un niño con grandes ambiciones y un pequeño corazón.",
        'Waddles': "El cerdito que adora a Mabel."
    };

    alert(hints[character]); // Show hint for the character
    document.getElementById('tetoca').src = document.getElementById(id).src; // Show the character's image
    document.getElementById(id).style.display = 'none'; // Hide the clicked image
    document.getElementById('name-' + id).style.display = 'none'; // Hide the name
}

