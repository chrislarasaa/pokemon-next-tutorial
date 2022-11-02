import Head from "next/head"
import { Navbar } from "../ui";


interface Props {
    title?: string;
    children?: React.ReactNode;
    pokeIMG?: string
}

const origin = typeof window === 'undefined' ? '' : window.location

export const Layout = ({children , title, pokeIMG }: Props) => {
    return (
        <>
            <Head>
                <title>{title || 'Pokemon APP'}</title>
                <meta name="author" content="Christian Lara" />
                <meta name="description" content={'Pokemon: ' + title} />
                <meta name="keywords" content={title + 'pokemon, pokedex'} />
                <meta property="og:title" content={"Informacion sobre " +title}/>
                <meta property="og:description" content={'Esta es la informacion sobre ' + title}/>
                <meta property="og:image" content={typeof pokeIMG === 'undefined' ? origin + 'banner.png': pokeIMG}/>
                
            </Head>

            <Navbar />

            <main style={{
                padding: '0 20px'
            }}>
                {children}
            </main>
        </>
    )
}