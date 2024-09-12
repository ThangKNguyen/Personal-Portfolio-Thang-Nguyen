import React from 'react'


const handleScrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const offset = 125; // Adjust this value based on your needs
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};


const Navbar = () => {
    
  return (
    <nav className='mb-20 flex items-center justify-between py-6 shadow-[0_2px_4px_0_rgba(0,0,0,0.1)]'>
      <div className='flex flex-shrink-0 items-center'>
        {/* <img src={logo} alt="logo" /> */}
        <h1 className='text-4xl font-bold'>TN</h1>
      </div>
      <div className='hidden lg:flex m-8 items-center justify-center gap-4 text-2xl'>
        <button className="hover:underline p-2" onClick={() => handleScrollToSection('about')}>About</button>

        <button className="hover:underline p-2" onClick={() => handleScrollToSection('experience')}>Experience</button>
        <button className="hover:underline p-2" onClick={() => handleScrollToSection('projects')}>Projects</button>
        <button className="hover:underline p-2" onClick={() => handleScrollToSection('tech')}>Technologies</button>
        <button className="hover:underline p-2" onClick={() => handleScrollToSection('contact')}>Contacts</button>
      </div>
    </nav>
  )
}

export default Navbar