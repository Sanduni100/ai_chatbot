import { Inter, Manrope } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css';
import { ThemeProvider, useTheme } from '../context/ThemeContext';
import { AuthProvider } from '../context/AuthContext';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });

function ToastWithTheme() {
  const { theme } = useTheme();
  return (
    <ToastContainer
      position="top-right"
      autoClose={3500}
      theme={theme === 'dark' ? 'dark' : 'light'}
    />
  );
}

export default function App({ Component, pageProps }) {
  return (
    <div className={`${inter.variable} ${manrope.variable} font-body`}>
      <ThemeProvider>
        <AuthProvider>
          <Component {...pageProps} />
          <ToastWithTheme />
        </AuthProvider>
      </ThemeProvider>
    </div>
  );
}
