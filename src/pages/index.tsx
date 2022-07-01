import type { NextPage } from 'next'
import { trpc } from '@/utils/trpc'

const Home: NextPage = () => {
  const { data, isLoading, error } = trpc.useQuery(['hello'])

  if (isLoading) {
    return <>Loading...</>
  }

  if (error) {
    return <div>{JSON.stringify(error)}</div>
  }

  return (
    <div>
      {JSON.stringify(data)}
    </div>
  )
}

export default Home
