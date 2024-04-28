import Image from 'next/image';
import Logo from '@/public/Logo.png'
import { Button } from './ui/button';
import { MenuIcon } from 'lucide-react';
import { Sheet, SheetTrigger } from './ui/sheet';
import SheetMenu from './sheet-menu';

const Header = () => {
  return (
    <header className='flex items-center justify-between py-5 px-4'>
      <Image src={Logo} alt='logotipo_fsw' width={130} height={22} />
      <Sheet>
        <SheetTrigger>
          <Button variant="link">
            <MenuIcon className='text-white' />
          </Button>
        </SheetTrigger>
        <SheetMenu />
      </Sheet>
    </header>
  );
}

export default Header;
