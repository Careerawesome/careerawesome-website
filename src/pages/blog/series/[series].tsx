import React from 'react'
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'

type All_Series = {
  name: string
  stargazers_count: number
}
// fetch the Series
export const getServerSideProps = (async (context) => {
  // Fetch data from external API
  const series = context.query.series
  const res = await fetch(`http://localhost:8081/api/posts/series/${series}`)
  const all_series: All_Series = await res.json()
  // Pass data to the page via props
  return { props: { all_series } }
}) satisfies GetServerSideProps<{ all_series: All_Series }>


function Series({ all_series }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(all_series)
  return (
    <div>Series</div>
  )
}

export default Series