import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useEffect, useState } from "react";
import { pokeApi } from "../../api";
import { Layout } from "../../components/layouts"
import { Pokemon } from "../../interfaces";
import { favoriteUtils } from "../../utils";
import confetti from 'canvas-confetti'

interface Props {
  pokemon: Pokemon;
}
const PokemonPage: NextPage<Props> = ({ pokemon }) => {

  const [isInFav, setIsInFav] = useState(false)

  const onToggleFavorite = () => {
    favoriteUtils.toggleFavorite(pokemon.id)
    setIsInFav(!isInFav)

    if (!isInFav) {
      confetti({
        zIndex: 999,
        particleCount: 100,
        spread: 160,
        angle: -100,
        origin: {
          x: 1,
          y: 0
        }
      })
    }
  }

  useEffect(() => {
    setIsInFav(favoriteUtils.isInFavorite(pokemon.id))
  }, [pokemon.id])

  return (
    <Layout title={'Pokemon APP - ' + pokemon.name} pokeIMG={pokemon.sprites.other?.dream_world.front_default}>
      <Grid.Container css={{ marginTop: '5px' }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable={true} css={{ padding: '30px' }}>
            <Card.Body>
              <Card.Image
                src={pokemon.sprites.other?.dream_world.front_default || ''}
                alt={pokemon.name}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text h1 transform="capitalize">{pokemon.name}</Text>
              <Button
                color='gradient'
                ghost={!isInFav}
                onPress={onToggleFavorite}
                animated={false}
              >
                {isInFav ? 'En favoritos' : 'Guardar en favoritos'}
              </Button>
            </Card.Header>

            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Container direction="row" display="flex" gap={0}>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>)
}


export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const totalPokemonPage = [...Array(151)].map((value, index) => ({
    params: {
      'id': String(index + 1)
    }
  }))

  return {
    paths: totalPokemonPage,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string }

  try {
    const { data } = await pokeApi.get<Pokemon>('/pokemon/' + id)
    const pokemon = {
      id: data.id,
      name: data.name,
      sprites: data.sprites
    }

    return {
      props: {
        pokemon
      },
      revalidate: 86400
    }

  } catch (error) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }






}

export default PokemonPage