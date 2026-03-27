import React from 'react';
import { useLocation } from '@docusaurus/router';
import { usePluginData } from '@docusaurus/useGlobalData';
import Layout from '@theme/Layout';

const LANGUAGES = [
  { code: 'en', label: 'English', basePath: '/docs/en', homeLabel: 'English Docs' },
  { code: 'vi', label: 'Tiếng Việt', basePath: '/docs/vi', homeLabel: 'Tài liệu Tiếng Việt' },
  { code: 'ja', label: '日本語', basePath: '/docs/ja', homeLabel: '日本語ドキュメント' },
];

const LANG_LABELS = {
  en: { title: 'Page not found', msg: 'This page is not available in English.', browse: 'Browse docs', back: 'Go back' },
  vi: { title: 'Không tìm thấy trang', msg: 'Trang này chưa có bản dịch tiếng Việt.', browse: 'Xem tài liệu', back: 'Quay lại' },
  ja: { title: 'ページが見つかりません', msg: 'このページの日本語訳はまだありません。', browse: 'ドキュメントを見る', back: '戻る' },
};

function getCurrentLang(pathname) {
  return LANGUAGES.find((l) => pathname.startsWith(l.basePath));
}

function getOtherLangs(currentLangCode) {
  return LANGUAGES.filter((l) => l.code !== currentLangCode);
}

export default function NotFound() {
  const { pathname } = useLocation();
  const pluginData = usePluginData('lang-mapping-plugin');
  const urlMapping = pluginData?.urlMapping ?? null;

  const currentLang = getCurrentLang(pathname);
  const isDocsPage = !!currentLang;

  // Check if any other language has a mapping for this URL
  let mappedAlternatives = [];
  if (isDocsPage && urlMapping) {
    const mapped = urlMapping[pathname];
    if (mapped) {
      mappedAlternatives = Object.entries(mapped)
        .map(([code, url]) => ({ ...LANGUAGES.find((l) => l.code === code), url }))
        .filter(Boolean);
    }
  }

  const labels = LANG_LABELS[currentLang?.code ?? 'en'];

  if (!isDocsPage) {
    // Generic 404
    return (
      <Layout title="404" description="Page not found">
        <main className="container margin-vert--xl">
          <div className="row">
            <div className="col col--6 col--offset-3 text--center">
              <h1>404</h1>
              <p>Page not found.</p>
              <a href="/" className="button button--primary">Go to homepage</a>
            </div>
          </div>
        </main>
      </Layout>
    );
  }

  const otherLangs = getOtherLangs(currentLang.code);

  return (
    <Layout title={labels.title} description={labels.msg}>
      <main className="container margin-vert--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📄</div>
              <h1 style={{ fontSize: '1.8rem' }}>{labels.title}</h1>
              <p style={{ fontSize: '1.1rem', color: 'var(--ifm-color-secondary-darkest)' }}>
                {labels.msg}
              </p>
            </div>

            {mappedAlternatives.length > 0 && (
              <div style={{ marginBottom: '2rem' }}>
                <h3>Available in:</h3>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  {mappedAlternatives.map((alt) => (
                    <a key={alt.code} href={alt.url} className="button button--primary">
                      {alt.label}
                    </a>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h3>{labels.browse}:</h3>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href={currentLang.basePath + '/'} className="button button--secondary">
                  {currentLang.label}
                </a>
                {otherLangs.map((lang) => (
                  <a key={lang.code} href={lang.basePath + '/'} className="button button--outline button--secondary">
                    {lang.label}
                  </a>
                ))}
              </div>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <button
                className="button button--link"
                onClick={() => window.history.back()}
              >
                ← {labels.back}
              </button>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
