import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

const languages = [
  { label: 'English', path: '/docs/en/', description: 'English documentation' },
  { label: 'Tiếng Việt', path: '/docs/vi/', description: 'Tài liệu tiếng Việt' },
  { label: '日本語', path: '/docs/ja/', description: '日本語ドキュメント' },
];

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <header style={{padding: '4rem 0', textAlign: 'center', background: 'var(--ifm-color-primary)', color: 'white'}}>
        <div className="container">
          <Heading as="h1">{siteConfig.title}</Heading>
          <p style={{fontSize: '1.2rem'}}>{siteConfig.tagline}</p>
        </div>
      </header>
      <main style={{padding: '2rem 0'}}>
        <div className="container">
          <div style={{display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap'}}>
            {languages.map(({label, path, description}) => (
              <Link key={label} to={path} style={{textDecoration: 'none'}}>
                <div style={{
                  border: '1px solid var(--ifm-color-emphasis-300)',
                  borderRadius: '8px',
                  padding: '2rem',
                  width: '280px',
                  textAlign: 'center',
                  transition: 'box-shadow 0.2s',
                }}>
                  <Heading as="h2">{label}</Heading>
                  <p>{description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
