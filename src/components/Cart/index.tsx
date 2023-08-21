import * as Dialog from '@radix-ui/react-dialog'
import { CartButton } from '../CartButton'
import {
  CartClose,
  CartContent,
  CartFinalization,
  CartProduct,
  CartProductDetails,
  CartProductImage,
  FinalizationDetails,
} from './styles'
import { X } from 'phosphor-react'
import Image from 'next/image'

export function Cart() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CartButton />
      </Dialog.Trigger>

      <Dialog.Portal>
        <CartContent>
          <CartClose>
            <X size={24} weight="bold" />
          </CartClose>

          <h2>Sacola de compras</h2>

          <section>
            {/* <p>Parece que seu carrinho está vazio. </p> */}

            <CartProduct>
              <CartProductImage>
                <Image
                  width={100}
                  height={93}
                  alt=""
                  src="https://s3-alpha-sig.figma.com/img/387d/13ce/de131bd1ccf9bbe6b2331e88d3df20cd?Expires=1693180800&Signature=ozkWZPJrvBzSDkj8n3wsZNc4CoZsgFA0G~6mZBU~6uL4ZoGBvR5Gqo7OsulJjINnhR2ZoR96ZrsfpTr4eBNTjNf81qcNYaVoOEgels4utkoTQZj5BusUbqu9tAOhp4goEmI4ft~5P-zMNdgfuwc1nhvwLqYA8tLz5NhJw4WgJoh3idJgwUwgDM8pHGBZgdZZ1sMS9saCVVntMkWx7U8VtyRv~Nfa9OViviznfgNK1hmM7UwT61KLoEI7sPX~jwoMvPkFO25teNdfkMUG2Env7TFwbkMX7QspAqg7YAWBCfC3qEdnjSSvMod72NKphZ02YhLeaD7~-B6bjXVmqCSK-w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                />
              </CartProductImage>

              <CartProductDetails>
                <p>Produto 1</p>
                <strong>R$ 79.90</strong>
                <button>Remover</button>
              </CartProductDetails>
            </CartProduct>
          </section>

          <CartFinalization>
            <FinalizationDetails>
              <div>
                <span>Quantidade</span>
                <p>2 itens</p>
              </div>
              <div>
                <span>Valor total</span>
                <p>R$ 100.00</p>
              </div>
            </FinalizationDetails>
            <button>Finalizar compra</button>
          </CartFinalization>
        </CartContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
