import { Spacer, Text, useTheme } from "@nextui-org/react"
import Image from "next/image"
import NextLink from 'next/link'
import { useState } from "react"
export const Navbar = () => {

    const { theme } = useTheme()
    const [randomIMG] = useState('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/' + String(Math.floor(Math.random() * 151) + 1) +'.png')
    return (
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0 20px',
            backgroundColor: theme?.colors.gray200.value
        }}>
            <Image
                src={randomIMG}
                alt="Logo Shiny"
                width='70'
                height='70'
            />
            <NextLink href="/" passHref legacyBehavior>
                <a style={{ display: 'flex' }}>
                    <Text color="white" h2>
                        P
                    </Text>
                    <Text color="white" h3>
                        okemon
                    </Text>
                </a>
            </NextLink>

            <Spacer css={{ flex: 1 }} />

            <NextLink href="/favorites" passHref legacyBehavior>
                <a >
                <Text color="white">Favoritos</Text>
                </a>
            </NextLink>

           

        </div>
    )
}
