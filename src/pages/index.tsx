import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import { stripe } from '../lib/stripe'
import { HomeContainer, Product } from '../styles/pages/home'

import Stripe from 'stripe'
import { CartButton } from '../components/CartButton'

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
  }[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            prefetch={false}
            passHref
          >
            <Product className="keen-slider__slide">
              <Image
                src={product.imageUrl}
                width={520}
                height={480}
                alt=""
                placeholder="blur"
                blurDataURL={product.imageUrl}
              />
              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </div>
                <CartButton color="green" size="large" />
              </footer>
            </Product>
          </Link>
        ))}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      }).format(price.unit_amount! / 100),
    }
  })
  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}
