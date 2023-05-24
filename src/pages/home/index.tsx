import { Heading, Text } from '@ignite-ui/react'
import { Hero, HomeContainer, Preview } from './styles'

import { ClaimUsernameForm } from '@/components/ClaimUsernameForm'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import PreviewImage from '../../assets/app-preview.png'

export default function Home() {
  return (
    <>
      <NextSeo
        title="Descomplique sua agenda | Ignite Call"
        description="Conecte seu calendário e permita que as pessoas marquem agendamentos no seu tempo livre."
      />

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
    </>
  )
}
