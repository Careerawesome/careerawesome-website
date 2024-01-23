import React from 'react'


const series = ({ data }:any) => {
    console.log(data)
  return (
    <div>series</div>
  )
}

export default series




export async function getServerSideProps({ params: { seriesName } }:any) {
    
    const res = await fetch(`https://api.careerawesome.com/api/posts/series/${seriesName}`);
    const data = await res.json();
    return {
      props: {
         data,
      },
    };
  }