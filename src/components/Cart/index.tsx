import * as Dialog from '@radix-ui/react-dialog'
import { CartButton } from '../CartButton'
import { CartClose, CartContent } from './styles'
import { X } from 'phosphor-react'

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
            <p>Parece que seu carrinho está vazio. </p>
          </section>
        </CartContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
