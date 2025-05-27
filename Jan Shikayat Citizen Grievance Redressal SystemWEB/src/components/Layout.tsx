import React from 'react';
import Header from './Header';
import Footer from './Footer';
interface LayoutProps {
  children: React.ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
}
const Layout: React.FC<LayoutProps> = ({
  children,
  showHeader = true,
  showFooter = true
}) => {
  return <div className="flex flex-col min-h-screen bg-gray-50">
      {showHeader && <Header />}
      <main className="flex-grow w-full">{children}</main>
      {showFooter && <Footer />}
    </div>;
};
export default Layout;