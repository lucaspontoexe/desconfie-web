
export function creationDate(date:Date) {
    const formattedDate = new Intl.DateTimeFormat('pt-BR').format(date);
    const dateDifference = Math.floor((new Date().getTime() - date.getTime()) / 86400_000);

    return `Criado em ${formattedDate} (${dateDifference}) dias`
}