import { Card, Grid } from "@nextui-org/react"
import { useEffect, useState } from "react"
import { Layout } from "../../components/layouts"
import { FavoritePokemon } from "../../components/pokemon"
import { NoFavorites } from "../../components/ui"
import { favoriteUtils } from "../../utils"


const FavoritesPage = () => {

  const [favoritePokemonList, setfavoritePokemonList] = useState<number[]>([])

  useEffect(() => {
    setfavoritePokemonList(favoriteUtils.pokemonList())
  }, [])


  return (
    <Layout title="Pokemon Favoritos">
      {favoritePokemonList.length === 0 ?
        <NoFavorites /> :
        <FavoritePokemon pokemonIds={favoritePokemonList} />
      }

    </Layout>
  )
}

export default FavoritesPage