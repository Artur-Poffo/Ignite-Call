import { Heading, Text } from '@ignite-ui/react'
import { Hero, HomeContainer, Preview } from './styles'

import PreviewImage from '../../assets/app-preview.png'
import Image from 'next/image'
import { ClaimUsernameForm } from '@/components/ClaimUsernameForm'

export default function Home() {
  return (
    <HomeContainer>
      <Hero>
        <Heading as={'h1'} size={'4xl'}>
          Agendamento descomplicado
        </Heading>
        <Text size={'lg'}>
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>

        <ClaimUsernameForm />
      </Hero>

      <Preview>
        <Image
          src={PreviewImage}
          alt="Calendário simbolizando aplicação em funcionamento"
          height={400}
          priority
          quality={100}
        />
      </Preview>
    </HomeContainer>
  )
}
