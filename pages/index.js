// pages/index.js maps to projectlumiere.org/ (our homepage)
// See https://nextjs.org/docs/routing/introduction#index-routes

import Head from 'next/head';
import HomeLayout from '@components/layouts/HomeLayout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Project Lumiere</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <section className='mt-10 flex'>
          <div className='max-w-2xl'>
            <h1>
              Championing{' '}
              <span className='gradient-text'>Computer Science</span> for
              everyone.
            </h1>
            <p className='mt-6 pr-12 text-xl leading-relaxed'>
              We are spearheading the campaign for creating equal opportunities
              in Tech because Computer Science should be universal. See exactly
              what we do to level the playing field:
            </p>
            <div className='mt-14 flex'>
              <button className='mr-6 button-secondary px-5 py-3 text-sm'>
                What we do
              </button>
              <button className='button-tertiary px-5 py-3 text-sm'>
                See our mediums
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
