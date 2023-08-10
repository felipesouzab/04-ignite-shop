import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/src/styles/pages/product'
import { useRouter } from 'next/router'

export default function Product() {
  const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit atque,
          ipsum totam neque sequi, minima tempore quos vitae nemo similique
          magni laborum ea odit, distinctio eligendi veritatis veniam impedit
          voluptas!
        </p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}
