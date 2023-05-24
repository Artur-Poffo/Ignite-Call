import { api } from '@/lib/axios'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Text, TextArea, TextInput } from '@ignite-ui/react'
import { CalendarBlank, Clock } from '@phosphor-icons/react'
import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { ConfirmForm, FormActions, FormError, FormHeader } from './styles'

const ConfirmFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'O nome precisa ter no mínimo 3 caracteres' }),
  email: z.string().email({ message: 'Digite um e-mail válido' }),
  observations: z.string().nullable(),
})

type ConfirmFormData = z.infer<typeof ConfirmFormSchema>

interface ConfirmStepProps {
  schedulingDate: Date
  onTerminateConfirmation: () => void
}

export function ConfirmStep({
  onTerminateConfirmation,
  schedulingDate,
}: ConfirmStepProps) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<ConfirmFormData>({
    resolver: zodResolver(ConfirmFormSchema),
  })

  const router = useRouter()
  const username = String(router.query.username)

  async function handleConfirmScheduling(data: ConfirmFormData) {
    const { name, email, observations } = data

    await api.post(`/users/${username}/schedule`, {
      name,
      email,
      observations,
      date: schedulingDate,
    })

    onTerminateConfirmation()
  }

  const describedDate = dayjs(schedulingDate).format('DD[ de ]MMMM[ de ]YYYY')
  const describedTime = dayjs(schedulingDate).format('HH:mm[h]')

  return (
    <ConfirmForm as={'form'} onSubmit={handleSubmit(handleConfirmScheduling)}>
      <FormHeader>
        <Text>
          <CalendarBlank />
          {describedDate}
        </Text>
        <Text>
          <Clock />
          {describedTime}
        </Text>
      </FormHeader>

      <label>
        <Text size={'sm'}>Nome completo</Text>
        <TextInput placeholder="Seu nome" {...register('name')} />
        {errors.name && <FormError size="sm">{errors.name.message}</FormError>}
      </label>

      <label>
        <Text size={'sm'}>Endereço de e-mail</Text>
        <TextInput
          type="email"
          placeholder="johndoe@exemple.com"
          {...register('email')}
        />
        {errors.email && (
          <FormError size="sm">{errors.email.message}</FormError>
        )}
      </label>

      <label>
        <Text size={'sm'}>Observações</Text>
        <TextArea {...register('observations')} />
      </label>

      <FormActions>
        <Button
          type="button"
          variant={'tertiary'}
          onClick={onTerminateConfirmation}
        >
          Cancelar
        </Button>
        <Button disabled={isSubmitting} type="submit">
          Confirmar
        </Button>
      </FormActions>
    </ConfirmForm>
  )
}
