import moment from "moment";


export const validateDate = (date: Date) => {
    return moment(date).isValid();
}

export const getFormattedDate = (date: Date, format: string) => {
    //Format        Value           Description
    //YYYY	        2014	        4 or 2 digit year. Note: Only 4 digit can be parsed on strict mode
    // YY	        14	            2 digit year
    // Y	        -25	            Year with any number of digits and sign
    // Q	        1..4	        Quarter of year. Sets month to first month in quarter.
    // M MM	        1..12	        Month number
    // MMM MMMM	    Jan..December	Month name in locale set by moment.locale()
    // D DD	        1..31	        Day of month
    // Do	        1st..31st	    Day of month with ordinal
    // DDD DDDD	    1..365	        Day of year
    // X	        1410715640.579	Unix timestamp
    // x	        1410715640579	Unix ms timestamp
    return moment(date).format(format);
}

export const getFormattedTime = (time: Date, format: string) => {
    //Format                Value           Description
    //H HH	                0..23	        Hours (24 hour time)
    //h hh	                1..12	        Hours (12 hour time used with a A.)
    //k kk	                1..24	        Hours (24 hour time from 1 to 24)
    //a A	                am pm	        Post or ante meridiem (Note the one character a p are also considered valid)
    //m mm	                0..59	        Minutes
    //s ss	                0..59	        Seconds
    //S SS SSS..SSSSSSSSS	0..999999999	Fractional seconds
    // Z ZZ	                +12:00	        Offset from UTC as +-HH:mm, +-HHmm, or Z
    return moment(time).format(format);
}

export const getTimeAgo = (date: Date) => {
    return moment(date).fromNow();
}

export const getDate = (date: Date) => {
    return new Date(date).getDate();
}

export const getMonth = (date: Date) => {
    return (new Date(date).getMonth() + 1);
}

export const getYear = (date: Date) => {
    return new Date(date).getFullYear();
}

export const getDayOfTheWeek = (date: Date) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return days[new Date(date).getFullYear()];
}

export const dateDifferenceInDays = (date1: Date, date2: Date) => {
    return (moment(date1).diff(moment(date2), 'days'));
}

export const dateDifferenceInHours = (date1: Date, date2: Date) => {
    return (moment(date1).diff(moment(date2), 'hours'));
}

export const dateDifferenceInMinutes = (date1: Date, date2: Date) => {
    return (moment(date1).diff(moment(date2), 'minutes'));
}

export const dateDifferenceInSeconds = (date1: Date, date2: Date) => {
    return (moment(date1).diff(moment(date2), 'seconds'));
}

export const dateDifferenceInMilliSeconds = (date1: Date, date2: Date) => {
    return (moment(date1).diff(moment(date2)));
}

export const getCalendarTime = (date: Date) => {
    return (moment(date).calendar());
}

export const getUTCTime = (apiDate: string, utc: boolean) => {
    return (moment.parseZone(apiDate).utc(utc).format());
}
