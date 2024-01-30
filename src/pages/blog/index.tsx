// pages/blog.tsx
import React from 'react';
import { NextSeo } from 'next-seo';
import FeaturedPost from '../Container/Blog/MainPage/FeaturedPost';
import PageHeader from '../Container/Blog/MainPage/PageHeader';
import FeaturedAuthor from '../Container/Blog/MainPage/FeaturedAuthor';
import CategoryTags from '../Container/Blog/MainPage/CategoryTags';

function Blog() {
  return (
    <>
      <NextSeo
        title="Your Blog Title"
        description="Your blog description goes here."
        canonical="https://yourblog.com"
        openGraph={{
          url: 'https://yourblog.com',
          title: 'Your Blog Title',
          description: 'Your blog description goes here.',
          images: [
            {
              url: 'https://yourblog.com/og-image.jpg',
              alt: 'Open Graph Image Alt Text',
            },
          ],
          site_name: 'Your Blog Site Name',
        }}
        twitter={{
          handle: '@yourtwitterhandle',
          site: '@yoursitename',
          cardType: 'summary_large_image',
        }}
      />
      <header>
        <PageHeader />
      </header>
      <main>
        {/* <section>
          <CategoryTags />
        </section> */}
        <section>
          <FeaturedPost />
        </section>
        <section>
          <FeaturedAuthor />
        </section>
      </main>
      <footer>
        Footer
      </footer>
    </>
  );
}

export default Blog;
