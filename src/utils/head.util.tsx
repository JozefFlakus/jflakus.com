import * as React from 'react';
import { siteMetadata } from '../../gatsby-config.js';
import { Helmet } from 'react-helmet';

export const DOMAIN = siteMetadata.domain;
export const ROOT_TITLE = siteMetadata.title;
export const AUTHOR = siteMetadata.author;
export const KEYWORDS = siteMetadata.keywords;
export const DESCRIPTION = siteMetadata.description;

interface HeadOptions {
  title?: string;
  canonical?: string;
}

export module HeadFactory {

  const titleFactory = (title?: string) =>
    !!title
      ? `${title} | ${DOMAIN}`
      : ROOT_TITLE;

  const canonicalFactory = (canonical?: string) =>
    !!canonical
      ? `http://${DOMAIN}/${canonical}`
      : `http://${DOMAIN}`;

  export const get = ({ title, canonical }: HeadOptions) => (
    <Helmet>
      <meta charSet={'utf-8'} />
      <title>{titleFactory(title)}</title>
      <link rel={'canonical'} href={canonicalFactory(canonical)} />
      <meta name="keywords" content={KEYWORDS}/>
      <meta name="description" content={DESCRIPTION}/>
      <meta name="author" content={AUTHOR}/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta name="msapplication-TileColor" content="#ffffff"/>
      <meta name="msapplication-TileImage" content="/favicon//ms-icon-144x144.png"/>
      <meta name="theme-color" content="#ffffff"/>
      <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png"/>
      <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png"/>
      <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png"/>
      <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png"/>
      <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png"/>
      <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png"/>
      <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png"/>
      <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png"/>
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png"/>
      <link rel="icon" type="image/png" sizes="192x192"  href="/favicon/android-icon-192x192.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
    </Helmet>
  );

}
