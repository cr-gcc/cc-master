const customFormatDate = (currentDate: Date) => {
    const spanishMonths = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre'
    ];
    const date = new Date(currentDate);
    const day = String(date.getDate()).padStart(2, '0');
    const month = spanishMonths[date.getMonth()];
    const year = date.getFullYear();
    return `${day} de ${month} de ${year}`;
}

export {
    customFormatDate
}