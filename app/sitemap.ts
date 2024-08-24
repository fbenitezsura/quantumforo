import { MetadataRoute } from 'next'

type Sitemap = Array<{
    url: string
    lastModified?: string | Date
    changeFrequency?:
      | 'always'
      | 'hourly'
      | 'daily'
      | 'weekly'
      | 'monthly'
      | 'yearly'
      | 'never'
    priority?: number
  }>
export default function sitemap(): MetadataRoute.Sitemap {

  return [
    {
      url: 'https://evolve.cl',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://evolve.cl/categorias/',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://evolve.cl/categorias/gamer',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://www.evolve.cl/categorias/gamer/los-mejores-juegos-para-pc-sin-tarjeta-grafica-portables',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://www.evolve.cl/categorias/gamer/mejores-juegos-gratis-para-pc-de-epic-games',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://www.evolve.cl/categorias/gamer/super-mario-wonder',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://www.evolve.cl/categorias/gamer/guia-warcraft-rumble',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://www.evolve.cl/categorias/tecnologia',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://www.evolve.cl/categorias/tecnologia/audifonos-gamer',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://www.evolve.cl/categorias/tecnologia/notebook-gamer-una-guia-del-rey-de-los-videojuegos',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://www.evolve.cl/categorias/geek',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://www.evolve.cl/categorias/casino-online',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://www.evolve.cl/categorias/casino-online/que-es-el-rtp',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://www.evolve.cl/categorias/actualidad',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]
}