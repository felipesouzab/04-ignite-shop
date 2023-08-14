import Link from 'next/link'
import { HeaderContainer } from './styles'
import Image from 'next/image'
import logoImg from '../../assets/logo.svg'
import { Cart } from '../Cart'

export function Header() {
  return (
    <HeaderContainer>
      <Link href={'/'}>
        <Image src={logoImg} alt="" />
      </Link>
      <Cart />
    </HeaderContainer>
  )
}
