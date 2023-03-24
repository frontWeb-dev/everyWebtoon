import { joinClass } from './../../libs/utils';

interface InputProps {
  label?: string;
  name: string;
  children?: React.ReactNode;
  [key: string]: any;
}

const Input = ({ label, name, children, ...rest }: InputProps) => {
  return (
    <>
      {label && <label>{label}</label>}
      <input
        id={name}
        {...rest}
        className={joinClass(
          'w-full appearance-none rounded-xl border border-gray-300 p-3 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500',
          children ? '' : 'mb-4'
        )}
      />
      {children && <p className='my-2 pl-2 text-sm text-red-600'>{children}</p>}
    </>
  );
};

export default Input;
