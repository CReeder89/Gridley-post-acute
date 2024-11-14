// pages/_app.tsx
import '../styles/globals.css';
import '../styles/buttonStyles.css'
import '../styles/serviceCards.css'
import type { AppProps } from 'next/app';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Popup from '../components/Popup';
import { ReCaptchaProvider } from "next-recaptcha-v3";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
//import Head from 'next/head';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    
      <ReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}>
        <AppRouterCacheProvider>
        <div style={layoutStyle}>
        <Header />
        <div style={mainStyle}>
        <Component  {...pageProps} />
        </div>
        <Popup />
        <Footer />
        </div>
        </AppRouterCacheProvider>
      </ReCaptchaProvider>
   
  );
}

const layoutStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh', // Full height of the viewport

};

const mainStyle: React.CSSProperties = {
  flex: 1, // Take up remaining space
};

export default MyApp;
