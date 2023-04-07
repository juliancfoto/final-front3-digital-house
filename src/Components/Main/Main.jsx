import React from 'react';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useAppContext } from '../../hooks/useAppContext';

export const Main = ({ themeClass }) => {
  const {
    state: { favorites },
  } = useAppContext();

  useEffect(() => {
    localStorage.setItem('odontoFavorites', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <main className={`main ${themeClass}`}>
      <Outlet themeClass={themeClass} />
    </main>
  );
};
