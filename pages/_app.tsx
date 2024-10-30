// pages/_app.tsx
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Popup from '../components/Popup';
import { ReCaptchaProvider } from "next-recaptcha-v3";
//import Head from 'next/head';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <ReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}>
        <Header />
        <Component {...pageProps} />
        <Popup />
        <Footer />
      </ReCaptchaProvider>
    </>
  );
}

export default MyApp;
