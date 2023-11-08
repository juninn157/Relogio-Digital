// Função para atualizar o relógio a cada segundo
function updateTime() {
    let now = new Date();

    let time = now.toLocaleTimeString(); // Obtém o horário atual
    let date = now.toLocaleDateString(); // Obtém a data atual
    let day = now.toLocaleDateString(undefined, { weekday: 'long' }); // Obtém o dia da semana

    // Atualiza o conteúdo dos elementos HTML para exibir o horário, data e dia da semana
    document.getElementById("time").innerText = time;
    document.getElementById("date").innerText = date;
    document.getElementById("day").innerText = day;
}

// Chama a função updateTime a cada segundo
setInterval(updateTime, 1000);
updateTime();