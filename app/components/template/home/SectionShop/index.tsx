'use client'
import ViewSectionShop from '@components/organism/home/SectionShop/index';
import { getAllStore } from '@clean/application/redux/store/store.slice';
import { useAppDispatch, useAppSelector } from '@clean/application/redux/hook';
import { useEffect } from 'react';

const SectionShop = () => {

  const dispatch = useAppDispatch();
  const store = useAppSelector((state) => state.Store);

  const categories = [
    {
      name: 'Popular',
      posts: [
        {
          id: 1,
          title: 'Bless Colors',
          date: '5h ago',
          commentCount: 0,
          shareCount: 0,
          description: 'Un lugar acogedor donde encontrarás los mejores cafés artesanales.',
          categories: ['Sustentable', 'Artesanal', 'Bebidas'],
          image: '/store/store1.png',
          color: '#008f39',
          url: 'https://blesscolor-front.vercel.app'
        },
        {
          id: 2,
          title: 'Mary Cris',
          date: '2h ago',
          commentCount: 0,
          shareCount: 0,
          description: 'Tienda de ropa ecológica y sustentable para todas las edades.',
          categories: ['Huevos', 'Sustentable', 'Ropa'],
          image: '/store/store2.png',
          url: 'https://marycris.vercel.app'
        },
      ],
    },
    {
      name: 'Nuevos',
      posts: [
        {
          id: 3,
          title: 'Ehf Concept',
          date: 'Jan 7',
          commentCount: 0,
          shareCount: 0,
          description: 'Los últimos gadgets y tecnología en un solo lugar.',
          categories: ['Muebles', 'Gadgets', 'Electrónica'],
          image: '/store/store3.png',
          url: 'https://ehfconcept.cl'
        },
        {
          id: 4,
          title: 'Happy Paws',
          date: 'Mar 19',
          commentCount: 0,
          shareCount: 0,
          description: 'Productos para tus mascotas.',
          categories: ['Mascotas', 'Tradicional', 'Alimentos'],
          image: '/store/store4.png',
          url: 'https://happy-paws-tau.vercel.app'
        },
      ],
    },
    {
      name: 'Trending',
      posts: [
        {
          id: 5,
          title: 'Joyeria Da Vinci',
          date: '2d ago',
          commentCount: 0,
          shareCount: 0,
          description: 'Galería de arte y productos culturales locales.',
          categories: ['Arte', 'Cultura', 'Galería'],
          image: '/store/store5.png',
          url: 'https://da-vinci-jewelry.vercel.app'
        },
        {
          id: 5,
          title: 'Lenceria Flo',
          date: '2d ago',
          commentCount: 0,
          shareCount: 0,
          description: 'Galería de arte y productos culturales locales.',
          categories: ['Arte', 'Cultura', 'Galería'],
          image: 'https://via.placeholder.com/400x300',
        },
        // Puedes agregar más tiendas aquí si es necesario
      ],
    },
  ];

  useEffect(() => {
    dispatch(getAllStore());
  }, []);

  return (
    <ViewSectionShop
      storesData={categories}
    />
  );
}

export default SectionShop;