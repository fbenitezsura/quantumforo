import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Evolve | Blog',
        short_name: 'Evolve',
        description: 'Descubre las últimas noticias del mundo gamer, casinos online, tecnología y cultura geek en Evolve.cl. Mantente al día con las tendencias más emocionantes',
        start_url: '/',
        scope: "/",
        display: 'standalone',
        background_color: '#111827',
        theme_color: '#111827',
        orientation: "portrait",
        icons: [
            {
                "src": "/logo_evolve.svg",
                "sizes": "72x72",
                "type": "image/png"
            },
            {
                "src": "/logo_evolve.svg",
                "sizes": "96x96",
                "type": "image/png"
            },
            {
                "src": "/logo_evolve.svg",
                "sizes": "128x128",
                "type": "image/png"
            },
            {
                "src": "/logo_evolve.svg",
                "sizes": "144x144",
                "type": "image/png"
            },
            {
                "src": "/logo_evolve.svg",
                "sizes": "152x152",
                "type": "image/png"
            },
            {
                "src": "/logo_evolve.svg",
                "sizes": "192x192",
                "type": "image/png"
            }
            ,
            {
                "src": "/logo_evolve.svg",
                "sizes": "384x384",
                "type": "image/png"
            }
            ,
            {
                "src": "/logo_evolve.svg",
                "sizes": "512x512",
                "type": "image/png",
                "purpose": "any maskable"
            }
        ],
    }
}