const showVideoButton = document.getElementById('showVideoButton');
const hideVideoButton = document.getElementById('hideVideoButton');
const videoContainer = document.getElementById('videoContainer');
const videoDescription = document.getElementById('videoDescription');

showVideoButton.addEventListener('click', function() {
    videoContainer.style.display = 'block'; // Mostra o container do vídeo
    videoDescription.style.display = 'block'; // Mostra a descrição
    showVideoButton.style.display = 'none'; // Esconde o botão de mostrar
    hideVideoButton.style.display = 'inline'; // Mostra o botão de esconder
});

hideVideoButton.addEventListener('click', function() {
    videoContainer.style.display = 'none'; // Esconde o container do vídeo
    videoDescription.style.display = 'none'; // Esconde a descrição
    showVideoButton.style.display = 'inline'; // Mostra o botão de mostrar
    hideVideoButton.style.display = 'none'; // Esconde o botão de esconder
});

document.getElementById('redirect-button').addEventListener('click', function() {
    window.location.href = 'novocadastro.html'; 
});

