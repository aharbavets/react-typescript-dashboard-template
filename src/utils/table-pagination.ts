export type Item = {
    id: string
    title: string
    order?: number
}

const calculateRange = (data: Item[], rowsPerPage: number): number[] => {
    const range: number[] = []
    const num = Math.ceil(data.length / rowsPerPage)
    for (let i = 1; i <= num; i++) {
        range.push(i)
    }
    return range
}

const sliceData = (data: any[], page: number, rowsPerPage: number) => {
    return data.slice((page - 1) * rowsPerPage, page * rowsPerPage)
}

export {
    calculateRange,
    sliceData
}
