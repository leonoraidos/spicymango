

const Footer = () => {
  return (
    <footer className="bg-red-500 fixed bottom-0 w-screen">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="https://www.github.com/leonoraidos" className="text-xl font-bold text-white hover:text-gray-200">My GitHub</a>
        <a href="https://www.linkedin.com/in/leonoraidos" className="text-xl font-bold text-white hover:text-gray-200">My LinkedIn</a>
        <p className="py-2 text-white sm:py-0">All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer;