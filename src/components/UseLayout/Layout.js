// 1. Рендеринг.
// 2. Вызов useLayoutEffect.
// 3. Отрисовка браузера: момент, когда элементы компонента фактически до-
// бавляются в DOM.
// 4. Вызов useEffect.

import React, { useEffect, useLayoutEffect } from 'react';

const Layout = () => {
  useEffect(() => {
    console.log('useEffect');
  });
  useLayoutEffect(() => {
    console.log('useLayoutEffect');
  });
  return <div></div>;
};

export default Layout;
