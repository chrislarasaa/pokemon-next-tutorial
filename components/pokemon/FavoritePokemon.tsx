import { Grid } from '@nextui-org/react'
import { FavoritePokemonCard } from './'

interface Props {
    pokemonIds: number[]
}

export const FavoritePokemon = ({ pokemonIds }: Props) => {

   
    
    return (
        <Grid.Container gap={2} direction='row' justify="flex-start" >
            {
                pokemonIds.map(id => (
                    <FavoritePokemonCard pokemonID={id} key={id} />
                ))
            }
        </Grid.Container >
    )
}
