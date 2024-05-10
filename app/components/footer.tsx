// components/footer.tsx
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-textMain py-8">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <div className="flex flex-col items-center">
          <h4 className="text-lg font-bold uppercase mb-2">Social</h4>
          <div className="flex gap-x-4">
            <a href="https://www.linkedin.com/in/cocossou-ulrich" target="_blank" rel="noopener noreferrer" className="hover:text-accentPink transition-colors">
              <FaLinkedin size={30} />
            </a>
            <a href="https://github.com/Ulrich-stack" target="_blank" rel="noopener noreferrer" className="hover:text-accentPink transition-colors">
              <FaGithub size={30} />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-accentPink transition-colors">
              <FaTwitter size={30} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
