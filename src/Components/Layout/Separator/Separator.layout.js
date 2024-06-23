import { ContainerSeparatorStyled } from "./Separator.style"

const Separator=({direction, translate})=>{
    // direction: `top` pour le séparateur qui régarde en haut et `bottom`pour le séparateur qui regarde en bas. Par défaut c'est `top`
    return <ContainerSeparatorStyled direction={direction}>
            <div></div>
        </ContainerSeparatorStyled>
}

export default Separator