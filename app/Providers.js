'use client';
import { ThemeProvider } from "@mui/material/styles";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
import { lightTheme, darkTheme } from './theme';
import { useEffect, useState } from "react";
import Header from "./template/Header";
import Footer from "./template/Footer";
import { Box } from "@mui/material";

const getDefaultMode = () => {
  const hour = new Date().getHours();
  return hour >= 7 && hour < 19 ? 'light' : 'dark';
};

const Providers = ({ children }) => {
  const [mode, setMode] = useState(getDefaultMode);

  useEffect(() => {
    const savedMode = typeof window !== "undefined" ? localStorage.getItem('themeMode') : null;
    if (savedMode) {
      setMode(savedMode);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem('themeMode', mode);
    }
  }, [mode]);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={mode === 'dark' ? darkTheme : lightTheme}>
        <Box className={'flex min-h-screen flex-col items-center myAwesomeBg'} sx={{
          bgcolor: mode === 'dark' ? "#001f54" : "white",
          color: 'text.primary',
          transition: 'background-color 0.5s, color 0.5s',
          width: '100%',
          height: '100%',
        }}>
          <Header toggleMode={toggleMode} mode={mode} />
          
          {children}        
          <Footer />
        </Box>
     
      </ThemeProvider>
    </I18nextProvider>
  );
};

export default Providers;
