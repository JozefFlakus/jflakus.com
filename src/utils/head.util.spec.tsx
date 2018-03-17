import { Helmet } from 'react-helmet';
import { mount } from 'enzyme';
import { HeadFactory, DOMAIN, ROOT_TITLE } from './head.util';

describe('HeadFactory', () => {

  it('renders <meta /> tag', () => {
    mount(HeadFactory.get({}));
    const helmet = Helmet.peek();
    expect(helmet.metaTags.length).toBeGreaterThan(0);
  });

  it('renders default title when not provided', () => {
    mount(HeadFactory.get({}));
    const helmet = Helmet.peek();
    expect(helmet.title).toBe(ROOT_TITLE);
  });

  it('renders factorized title when provided', () => {
    mount(HeadFactory.get({ title: 'test' }));
    const helmet = Helmet.peek();
    expect(helmet.title).toBe(`test | ${DOMAIN}`);
  });

  it('renders default canonical when not provided', () => {
    mount(HeadFactory.get({}));
    const helmet = Helmet.peek();
    const linkTag = helmet.linkTags[0];
    expect(linkTag.rel).toBe('canonical');
    expect(linkTag.href).toBe(`http://${DOMAIN}`);
  });

  it('renders factorized canonical when provided', () => {
    mount(HeadFactory.get({ canonical: 'test' }));
    const helmet = Helmet.peek();
    const linkTag = helmet.linkTags[0];
    expect(linkTag.rel).toBe('canonical');
    expect(linkTag.href).toBe(`http://${DOMAIN}/test`);
  });

});
