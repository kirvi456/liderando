export const  NumberToFixed = ( num: number, decimals: number = 2 ) : string => {
    return Number(num.toFixed(decimals)).toLocaleString("en-US", { minimumFractionDigits: 2,  maximumFractionDigits: 2 })
}