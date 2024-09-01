'use client'

import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
import Button56 from './Button56';

const pages = ['home', 'whoWeAre', 'services', 'testimonials', 'videos', 'contact'];

function AdaptableMenu() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box py={6} textAlign="center" display="flex" flexDirection={isMobile ? "column" : "row"} gap={3} alignItems="end" justifyContent="center">
      {pathname === '/' ? (
        pages.filter((page) => page !== 'home').map((page, index) => (
          <Link href={`${page}`} key={index} className=" bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded shadow-lg">
            <Button56 index={index}>{t(page)}</Button56>
          </Link>
        ))
      ) : (
        pages.filter((page) => `/${page}` !== pathname).map((page, index) => (
          page === 'home' ? (
            <Link href={'/'} key={index} className=" bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded shadow-lg">
              <Button56 index={index}>{t(page)}</Button56>
            </Link>
          ) : (
            <Link href={`/${page}`} key={index} className=" bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded shadow-lg">
              <Button56 index={index}>{t(page)}</Button56>
            </Link>
          ) 
        ))
      )}
    </Box>
  );
}

export default AdaptableMenu;
