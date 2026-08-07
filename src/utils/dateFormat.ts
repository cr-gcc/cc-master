const customFormatDate = (
    currentDate: string | null | undefined | '',
    format: null | string = null,
    fullDate: boolean = false
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
        const safeDate = currentDate.length === 10 ? `${currentDate}T12:00:00` : currentDate;
        const date = new Date(safeDate);
        const day = String(date.getDate()).padStart(2, '0');
        const month = spanishMonths[date.getMonth()];
        const monthShort = spanishShortMonths[date.getMonth()];
        const year = date.getFullYear();
        let dateFormat: string = '';
        let timeFormat: string = '';
        let finalFormat: string | null = null;

        if (format == 'of') {
            dateFormat = `${day} de ${month} de ${year}`;
        }
        else if (format == 'diag') {
            dateFormat = `${day}/${monthShort}/${year}`;
        }
        else {
            dateFormat = `${day}-${monthShort}-${year}`;
        }

        if (fullDate) {
            const hours = String(date.getHours()).padStart(2, '0');
            const minutes = String(date.getMinutes()).padStart(2, '0');
            const seconds = String(date.getSeconds()).padStart(2, '0');
            timeFormat = `${hours}:${minutes}:${seconds}`;
            finalFormat = `${dateFormat} ${timeFormat}`;
        }
        else {
            finalFormat = dateFormat;
        }

        return finalFormat;
    }
}

export {
    customFormatDate
}