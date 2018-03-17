import * as React from 'react';
import { Helmet } from 'react-helmet';

interface HeadOptions {
  title?: string;
  canonical?: string;
}

export const DOMAIN = 'jflakus.com';
export const ROOT_TITLE = 'Józef Flakus - programmer / ninja';

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
    </Helmet>
  );

}
