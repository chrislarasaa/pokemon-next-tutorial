import { Container, Text, Image } from '@nextui-org/react'
import { useState } from 'react'



export const NoFavorites = () => {

  const [randomIMG] = useState('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/' + String(Math.floor(Math.random() * 151) + 1) +'.svg')
  
  return (
    <Container css={{
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 100px)',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center'
      }}>
        <Text h1>
            No hay favoritos
        </Text>
        <Image 
          src={randomIMG}
          width={250}
          height={250}
          alt="No existe"
          css={{
            opacity: '0.1'
          }}
        
        />
      </Container>
  )
}
