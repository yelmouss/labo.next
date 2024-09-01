
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

import Providers from "./Providers";
import AdaptableMenu from "./components/AdaptableMenu";

export const metadata = {
  title: "Laboratoire monétaire",
  description: "Spécialisé dans la chimie monétaire de billets de banque sécurisés, Nous faisons du (STAINS ARGENT)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="">
        <AppRouterCacheProvider>       
            <Providers>
              {children}              
            </Providers>        
        </AppRouterCacheProvider>
      </body>
    </html >
  );
}
