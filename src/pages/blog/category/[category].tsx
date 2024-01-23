import React from 'react'



const category = ({ data}:any) => {
  console.log(data)
  return (
    <div>category</div>
  )
}

export default category

export async function getServerSideProps({ params: { category } }:any) {
    
    const res = await fetch(`https://api.careerawesome.com/api/posts/category/${category}`);
    const data = await res.json();
    return {
      props: {
         data,
      },
    };
  }


// export async function getStaticProps({ params }) {
// console.log(params, "this is params")
// //   const { category } = params
// //   // Call an external API endpoint to get posts

// //   const res = await fetch(`https://api.careerawesome.com/api/posts/category/${category}`)
// //   const categories = await res.json()
  

// //   // By returning { props: { posts } }, the Blog component
// //   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       categories:"thi si"
//     },
//   }
// }
// export async function getStaticPaths() {
//     return {
//       paths: [
//         { params: { category: 'Technology' } },
//         { params: { category: 'food' } }
//       ],
//      fallback:false
//   }
// }
// export async function getStaticProps(context) {
//     const pid = context.params
//     console.log("hi", pid)
//     return {
//       props: {}, // will be passed to the page component as props
//     }
//   }
  
