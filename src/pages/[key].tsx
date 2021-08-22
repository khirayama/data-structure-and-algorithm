import * as React from 'react';
import glob from 'glob';
import grayMatter from 'gray-matter';
import { remark } from 'remark';
import remarkReact from 'remark-react';
import remarkGfm from 'remark-gfm';
import remarkSlug from 'remark-slug';
import remarkAutolinkHeadings from 'remark-autolink-headings';
import Head from 'next/head';

import { config } from '../config';
import { transform } from '../utils/transform';
import { RemarkParagraph } from '../components/RemarkParagraph';
import { RemarkHeading2, RemarkHeading3 } from '../components/RemarkHeading';
import { RemarkList, RemarkListItem } from '../components/RemarkList';
import { RemarkLink } from '../components/RemarkLink';

import styles from './[key].module.scss';

const remarkReactComponents = {
  p: RemarkParagraph,
  h2: RemarkHeading2,
  h3: RemarkHeading3,
  ul: RemarkList,
  li: RemarkListItem,
  a: RemarkLink,
};

export default function PostPage(props: { doc: string; slug: string }) {
  const { data, content } = grayMatter(props.doc);
  const unified = remark()
    .use(remarkGfm)
    .use(remarkSlug)
    .use(remarkReact, {
      createElement: React.createElement,
      sanitize: {
        clobberPrefix: '',
      },
      remarkReactComponents,
    })
    .processSync(content);

  return (
    <>
      <Head>
        <title>
          {data.seo.title} - {config.title}
        </title>
        <meta name="description" content={data.seo.description} />
        <meta name="keywords" content={data.seo.keywords.join(',')} />
      </Head>
      <div className={styles['container']}>
        <section>
          <div className={styles['body']}>{unified.result}</div>
        </section>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const path = require('path');
  const docPath = path.join(process.cwd(), 'docs');
  const filenames = glob.sync(docPath + '/*');
  return {
    paths: filenames.map((filename) => {
      return {
        params: {
          key: filename.replace(docPath + '/', '').replace(/\.md$/, ''),
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const fs = require('fs');
  const path = require('path');
  const key = params ? params.key || 'index' : 'index';

  const mdPath = path.join(process.cwd(), 'docs', key + '.md');
  const doc = fs.readFileSync(mdPath, { encoding: 'utf-8' });

  return {
    props: {
      doc: transform(doc),
      slug: '/' + key === 'index' ? '' : key,
    },
  };
}
