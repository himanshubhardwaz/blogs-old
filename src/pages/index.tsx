import type { NextPage } from 'next'
import { useUserContext } from '@/context/user.context'
import LoginForm from '@/components/LoginForm'
import Link from 'next/link'
import Layout from '@/components/Layout'

const Home: NextPage = () => {
  const user = useUserContext()

  if (!user) {
    return <LoginForm />
  }

  return (
    <Layout>
      <Link href="/post/new">Create a post</Link>
    </Layout>
  )
}

export default Home
