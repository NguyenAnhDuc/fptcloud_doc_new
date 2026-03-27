import React from 'react';
import { useLocation } from '@docusaurus/router';
import { usePluginData } from '@docusaurus/useGlobalData';
import styles from './styles.module.css';

const LANGUAGES = [
  { code: 'en', label: 'English', basePath: '/docs/en' },
  { code: 'vi', label: 'Tiếng Việt', basePath: '/docs/vi' },
  { code: 'ja', label: '日本語', basePath: '/docs/ja' },
];

function getCurrentLang(pathname) {
  return LANGUAGES.find((l) => pathname.startsWith(l.basePath)) ?? null;
}

function getTargetUrl(pathname, targetLang, urlMapping) {
  const targetLangConfig = LANGUAGES.find((l) => l.code === targetLang);
  if (!targetLangConfig) return '/';

  // Look up in generated mapping
  if (urlMapping) {
    const mapped = urlMapping[pathname];
    if (mapped && mapped[targetLang]) {
      return mapped[targetLang];
    }
  }

  // Fallback: swap the language prefix directly (works for EN↔VI same-path sections)
  const currentLang = getCurrentLang(pathname);
  if (currentLang) {
    const rest = pathname.slice(currentLang.basePath.length);
    if (rest && rest !== '/') {
      return targetLangConfig.basePath + rest;
    }
  }

  return targetLangConfig.basePath + '/';
}

export default function LanguageSwitcher({ mobile }) {
  const { pathname } = useLocation();
  const pluginData = usePluginData('lang-mapping-plugin');
  const urlMapping = pluginData?.urlMapping ?? null;

  const currentLang = getCurrentLang(pathname) ?? LANGUAGES[0];

  if (mobile) {
    return (
      <div className="menu__list-item">
        <span className="menu__link menu__link--sublist">{currentLang.label}</span>
        <ul className="menu__list">
          {LANGUAGES.map((lang) => (
            <li key={lang.code} className="menu__list-item">
              <a
                href={getTargetUrl(pathname, lang.code, urlMapping)}
                className={`menu__link${lang.code === currentLang.code ? ' menu__link--active' : ''}`}
              >
                {lang.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className={`navbar__item dropdown dropdown--hoverable ${styles.langSwitcher}`}>
      <a href="#" className="navbar__link" onClick={(e) => e.preventDefault()}>
        {currentLang.label} ▾
      </a>
      <ul className="dropdown__menu">
        {LANGUAGES.map((lang) => (
          <li key={lang.code}>
            <a
              href={getTargetUrl(pathname, lang.code, urlMapping)}
              className={`dropdown__link${lang.code === currentLang.code ? ` ${styles.active}` : ''}`}
            >
              {lang.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
