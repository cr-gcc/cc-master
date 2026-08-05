const customFormatDate = (
    currentDate: string | null | undefined | '',
    format: null | string = null
) => {
    if (!currentDate || currentDate === '' || currentDate == undefined || currentDate == null) {
        return ' - ';
    }
    else {
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
        const spanishShortMonths = [
            'ene',
            'feb',
            'mar',
            'abr',
            'may',
            'jun',
            'jul',
            'ago',
            'sep',
            'oct',
            'nov',
            'dic'
        ];
        // Evitar desfase de zona horaria (UTC a Local) en fechas 'YYYY-MM-DD'
        const safeDate = currentDate.length === 10 ? `${currentDate}T12:00:00` : currentDate;
        const date = new Date(safeDate);
        const day = String(date.getDate()).padStart(2, '0');
        const month = spanishMonths[date.getMonth()];
        const monthShort = spanishShortMonths[date.getMonth()];
        const year = date.getFullYear();
        let finalFormat: null | string = null;

        if (format == 'of') {
            finalFormat = `${day} de ${month} de ${year}`;
        }
        else if (format == 'diag') {
            finalFormat = `${day}/${monthShort}/${year}`;
        }
        else {
            finalFormat = `${day}-${monthShort}-${year}`;
        }
        return finalFormat;
    }
}

export {
    customFormatDate
}