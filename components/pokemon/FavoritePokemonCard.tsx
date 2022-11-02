import { Card, Grid } from '@nextui-org/react'
import { useRouter } from 'next/router'

interface Props {
    pokemonID: number
}
export const FavoritePokemonCard = ({ pokemonID }: Props) => {
    const router = useRouter()
    
    const onClcked = () => {
        router.push('/pokemon/' + pokemonID)
    }

    return (
        <Grid xs={6} sm={3} md={2} xl={1} onClick={onClcked}>
            <Card isHoverable isPressable css={{ padding: 10 }} >
                <Card.Image
                    src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" + pokemonID + ".svg"}
                    width={'100%'}
                    height={140}
                />
            </Card>
        </Grid>
    )
}
