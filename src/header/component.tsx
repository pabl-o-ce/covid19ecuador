import React from 'react';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

import './style.scss';
import { IPropsDate } from '../utils/interfaces';

function Header(props: IPropsDate) {
  const [t, i18n] = useTranslation('common');

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  const td = (props.date.length > 0) ? new Date(props.date) : new Date();
  const date = format(td, 'MMMM dd Y, k:mm', {locale: es})
  const sayings = t(`header.sayings.${(Math.floor(Math.random()*18))+1}`);
  
  const shouldHide = (lng: string) => {
    return lng === i18n.language
  };

  return (
    <header>
        <div className="lang-picker">
            {shouldHide('en') && <span role="menuitem" onClick={() => changeLanguage('es')}><span role="img" aria-label="Español">🇪🇨</span> Español</span>}
            {shouldHide('es') && <span role="menuitem" onClick={() => changeLanguage('en')}><span role="img" aria-label="English">🇬🇧</span> English</span>}
        </div>
        <h1>{ t('header.title') }</h1>
        <div>
          <em>
            {t('header.db')}
            <a href="https://carreraestrada-my.sharepoint.com/:x:/p/pcarrerae/ESzMCHkl6tJDvSx8ahkOZs8BcPv9RcHJIDWXfCu0d0Ic0g?e=tgqLuj" target="_blank"> {t('header.db1')}</a>
          </em>
        </div>
        <div>
          <em>
            <span>{ t('header.last_date') }</span> <strong className="last-updated">{date} ECT</strong>
          </em>
        </div>
    </header>
  );
}

export default Header;
