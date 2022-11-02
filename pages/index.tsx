import { GetStaticProps, NextPage } from "next"
import { Grid } from '@nextui-org/react'
import { Layout } from "../components/layouts"
import { pokeApi } from "../api"
import { PokemonListResponse, SmallPokemon } from "../interfaces"
import { PokemonCard } from "../components/pokemon"

interface Props {
  pokemon: SmallPokemon[]
}

const HomePage: NextPage<Props> = ({ pokemon }) => {
  return (
    <Layout title="Listado de Pokemon">
      <Grid.Container gap={2} justify='flex-start'>
        {
          pokemon.map(poke => (
            <PokemonCard pokemon={poke} key={poke.id}/>
          ))
        }
      </Grid.Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
  const pokemon: SmallPokemon[] = data.results.map((poke: SmallPokemon) => {
    const id = poke.url.split('https://pokeapi.co/api/v2/pokemon/')[1].split('/')[0]
    return { ...poke, id: Number(id), img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" + id + ".svg" }
  })

  return {
    props: {
      pokemon
    }
  }
}

export default HomePage