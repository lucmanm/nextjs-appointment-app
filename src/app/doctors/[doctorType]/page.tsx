import React from 'react'

const Page = async ({
  params,
}: {
  params: Promise<{ doctorType: string }>
}) => {
  const slug = (await params).doctorType
  return (
    <section className='p-4'>
      {slug}
    </section>
  )
}

export default Page
