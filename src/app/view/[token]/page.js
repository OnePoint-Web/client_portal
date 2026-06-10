import ViewPageClient from './ViewPageClient'

export const metadata = { title: 'Proposal — OnePoint' }

export default async function ViewPage({ params }) {
  const { token } = await params
  return <ViewPageClient token={token} />
}
