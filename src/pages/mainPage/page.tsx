import { AboutUsBlock, AssortmentBlock, NewProductsBlock, UsBenefitsBlock } from "../../modules/mainPageBlocks";

export function MainPage() {
    return (
        <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "60px" }}>
            <NewProductsBlock />
            <UsBenefitsBlock />
            <AssortmentBlock />
            <AboutUsBlock />
        </div>
    )
}