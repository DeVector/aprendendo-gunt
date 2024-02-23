document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sortear').addEventListener('submit', function(evento) {
        evento.preventDefault();
        let numMax = document.getElementById('numero-max').value;
        numMax = parseInt(numMax);

        let numSort = Math.random() * numMax;

        numSort = Math.floor(numSort + 1);

        document.getElementById('numero-sorteado').style.display = 'block';

        document.getElementById('num-sort').innerText = numSort;
    })
})