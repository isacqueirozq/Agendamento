export function toDay() {
    const months = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro']
    const d = new Date()
    const day = d.getDate()
    const month= months[d.getMonth()+1]
    const year= d.getFullYear()
    const diaDaSemana = d.toLocaleString('pt-BR', {weekday: 'long'})
    const myDate = diaDaSemana +' '+day+' de '+month+' de '+year

    return myDate
}

export function formatTime(time) {
    return `${time.hours.toString().padStart(2, '0')}:${time.minutes.toString().padStart(2, '0')}`;
}

let idsGerados = new Set();

export function gerarID() {
  let id;
  do {
    // Gerar um número aleatório entre 0 e 9999
    let randomNumber = Math.floor(Math.random() * 10000);
    // Preencher com zeros à esquerda, se necessário
    id = randomNumber.toString().padStart(4, '0');
  } while (idsGerados.has(id)); // Verificar se o ID já existe

  // Adicionar o novo ID ao conjunto de IDs gerados
  idsGerados.add(id);

  return id;
}

export function Agenda() {
    // Defina o horário de início e término
    const startTime = { hours: 7, minutes: 0 }; // 00:00
    const endTime = { hours: 17, minutes: 0 }; // 23:59

    // Função para formatar o horário
    function formatTime(time) {
    return `${time.hours.toString().padStart(2, '0')}:${time.minutes.toString().padStart(2, '0')}`;
    }

    // Lista para armazenar os horários
    const timeList = [];

    // Loop para gerar os horários de 30 em 30 minutos
    let currentTime = { ...startTime };
    while (currentTime.hours < endTime.hours || (currentTime.hours === endTime.hours && currentTime.minutes <= endTime.minutes)) {
        let id = gerarID()
    timeList.push({id:id,time:formatTime(currentTime)});
    // timeList.push(formatTime(currentTime));
    // Adiciona 30 minutos ao horário atual
    currentTime.minutes += 30;
    // Verifica se precisa ajustar as horas
    if (currentTime.minutes >= 60) {
        currentTime.hours++;
        currentTime.minutes -= 60;
    }
    }

    // Exibe a lista de horários
    // console.log(timeList);
    return timeList;

}