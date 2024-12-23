import Navigation from './Navigation';
import Logo from './Logo';

function Header() {
  return (
    <header className='border-b border-primary-900 px-8 py-5'>
      <div className='flex justify-between items-center max-w-7xl mx-auto w-full'>
        <Logo />

        <div className='hidden md:flex'>
          <Navigation />
        </div>

    
      </div>

      <div className="md:hidden flex flex-col items-center mt-4">
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
