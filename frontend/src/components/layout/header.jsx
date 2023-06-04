import logo from '../../assets/spicymango.svg';

const Header = function () {
  return (
    <header className="flex flex-row fixed h-20 w-screen bg-gray-200 justify-between">
      <a href='/' className='h-fit m-4 ml-8'><img src={logo} alt="logo"/> </a>
      <h1 className='m-auto mr-8 text-3xl text-gray-800' >Hello, there!</h1>
    </header>
  );
}

export default Header;