import logo from '../../assets/spicymango.svg';

const Header = function () {
  return (
    <header className="flex flex-row h-24 w-screen bg-zinc-200 justify-between">
      <a href='' className='h-fit m-auto ml-8'><img src={logo} alt="logo"/> </a>
      <h1 className='m-auto mr-8 text-3xl text-slate-950' >Hello, there!</h1>
    </header>
  );
}

export default Header;