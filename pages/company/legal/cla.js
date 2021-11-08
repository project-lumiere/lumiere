import { useMemo } from 'react';
import Head from 'next/head';
import { getMDXComponent } from 'mdx-bundler/client';
import Layout from '@components/layouts/Layout';
import { getPostBySlug } from '@lib/mdxBundler';

export default function CLA({ code, frontmatter }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <>
      <Head>
        <title>{frontmatter.title}</title>
      </Head>
      <article className="prose break-words bg-gray-100 dark:bg-gray-900 max-w-none dark:prose-dark">
        <div className="container">
          <Component />
        </div>
      </article>
    </>
  );
}

export const getStaticProps = async () => {
  const { code, frontmatter } = await getPostBySlug(
    ['company', 'legal'],
    'cla'
  );

  return {
    props: {
      code,
      frontmatter,
    },
  };
};

CLA.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
