import Header from '../Header/Header';
import GuestFooter from '../Footer/GuestFooter';

export default function GuestLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow bg-base-300">{children}</main>
        <GuestFooter />
      </div>
      <div id="calendaly" className="fixed bottom-4 right-4"></div>
    </>
  );
}