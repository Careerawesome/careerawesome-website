import React from 'react'

const slug = ({data}: any) => {
    console.log(data)
  return (
    <div>slug</div>
  )
}

export default slug




export async function getServerSideProps({ params: { slug } }:any) {
    
    const res = await fetch(`https://api.careerawesome.com/api/featuredposts/${slug}`);
    const data = await res.json();
    return {
      props: {
         data,
      },
    };
  }