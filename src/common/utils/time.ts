interface IStringTime {
    hourDozens: string,
    hourUnits: string,
    minDozens: string,
    minUnits: string,
    secDozens: string,
    secUnits: string,
}


export const toSeconds = (time:string) => {
    const [hours = '0', minutes = '0',seconds = '0'] = time.split(':')

    const hoursInSeconds = Number(hours) * 3600;
    const minutesInSeconds = Number(minutes) * 60;

    return hoursInSeconds + minutesInSeconds + Number(seconds)
}

export const toString = (time: number): IStringTime => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [hourDozens, hourUnits] = String(hours).padStart(2, '0');
    const [minDozens, minUnits] = String(minutes).padStart(2, '0');
    const [secDozens, secUnits] = String(seconds).padStart(2, '0');

    return {
        hourDozens, 
        hourUnits,
        minDozens,
        minUnits,
        secDozens,
        secUnits
    }
}