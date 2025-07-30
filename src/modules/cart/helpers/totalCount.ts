import { ProductWithCount } from "../../product";


export function totalCount(products: ProductWithCount[]) {
    const counts = products.map((p) => {
        return p.count
    })

    return counts.reduce((acc, count) => {
        return acc + count
    }, 0)
}