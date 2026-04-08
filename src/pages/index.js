import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <header style={{padding: '4rem 0', textAlign: 'center', background: 'var(--ifm-color-primary)', color: 'white'}}>
        <div className="container">
          <Heading as="h1">{siteConfig.title}</Heading>
          <p style={{fontSize: '1.2rem'}}>{siteConfig.tagline}</p>
          <Link
            to="/docs/intro/"
            className="button button--secondary button--lg"
            style={{marginTop: '1.5rem'}}
          >
            Get Started →
          </Link>
        </div>
      </header>
    </Layout>
  );
}
