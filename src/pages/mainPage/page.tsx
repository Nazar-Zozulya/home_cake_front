import { NewProductsBlock } from "../../modules/mainPageBlocks";

export function MainPage() {
    return (
        <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <NewProductsBlock />
        </div>
    )
}