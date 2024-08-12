
const priceFormats = [
    'rupee', 'dollar', 'euro', 'yen'
]
const priceSymbols = [
    '₹', '$', '€', '¥'
]

export const priceFormatter = (price: Number, format: string) => {
    return( `${priceSymbols[priceFormats.indexOf(format)] || ''} ${price}`);
}

export const percentageFormatter = (num: number) => {
    return( `${parseFloat(num.toString()).toFixed(2)}%`);
}

export const decimalFormatter = (num: number, count: number) => {
    return(parseFloat(num.toString()).toFixed(count));
}

export const roundPercentageFormatter = (num: number) => {
    return( `${Math.round(num)}%`);
}

export const roundUpDecimal = (num: number) => {
    return(Math.round(num));
}

export const roundDownDecimal = (num: number) => {
    return(Math.floor(num));
}