import { NAVIGATION_LINKS } from "../../abhishek-assets/constants";

const Navbar = () => {
  const handleScroll = (event, href) => {
    event.preventDefault();
    const element = document.querySelector(href);
    const offset = 70; // Adjust this value as needed
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <nav className="fixed top-0 left-0 h-screen bg-[#080808] text-[#ebecf3] flex flex-col items-center py-8 z-10 w-12 md:w-20">
        {/* square shape button with A written and it should reload the whole application when clicked */}
        <a
  href="/"
  className="group w-full flex items-center justify-center h-full bg-[#111111] text-[#0aff9d] transition-all duration-300"
>
  <span className="text-sm font-medium tracking-wider">
    A
  </span>
</a>


      {NAVIGATION_LINKS.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={(e) => handleScroll(e, link.href)}
          className="group w-full flex items-center justify-center h-full hover:bg-[#111111] transition-all duration-300"
        >
          <span className="text-sm font-medium tracking-wider group-hover:text-[#0aff9d] transform rotate-90">
            {link.label}
          </span>
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
