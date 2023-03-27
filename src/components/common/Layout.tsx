import { useLocation, useNavigate } from 'react-router-dom';
// icons
import { AiOutlineUser } from 'react-icons/ai';
import { MdKeyboardArrowLeft } from 'react-icons/md';

import { menus } from '@mocks/menu';
import { joinClass } from '@libs/utils';

interface LayoutProps {
  title?: string;
  hasTabBar?: boolean;
  goBack?: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, goBack, hasTabBar, children }) => {
  const { pathname } = useLocation();

  const navigate = useNavigate();

  const uid = localStorage.getItem('uid');

  const onclick = (path: string) => {
    navigate(`${path}`);
  };
  return (
    <div className='mx-auto max-w-md bg-white'>
      {/* 헤더  */}
      <header className='fixed top-0 flex h-16 w-full max-w-md items-center justify-center border-b bg-white px-4 text-lg font-medium text-gray-700 shadow-sm'>
        {/* 뒤로가기 */}
        {goBack && (
          <button
            onClick={() => onclick(goBack)}
            className='absolute left-4 h-8 w-8 cursor-pointer'>
            <MdKeyboardArrowLeft size={32} />
          </button>
        )}

        {/* 제목 */}
        {title && <h1 className='text-xl font-semibold'>{title}</h1>}

        {uid && (
          <button onClick={() => onclick('/user')} className='absolute right-4'>
            <AiOutlineUser size={28} />
          </button>
        )}
      </header>

      <div className={joinClass('mt-16 w-full max-w-md', hasTabBar ? 'pb-16' : '')}>{children}</div>

      {/* 메뉴바  */}
      {hasTabBar && (
        <div className='items-baselind fixed bottom-0 ml-2 flex w-full max-w-md justify-around  border-t bg-white p-4'>
          {menus.map((menu, i) => (
            <div
              key={i}
              onClick={() => onclick(menu.path)}
              className={joinClass(
                'flex flex-col items-center',
                menu.path === pathname ? 'text-blue-500' : ''
              )}>
              {menu.icons}
              <p className='mt-1 text-xs'>{menu.label}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Layout;
