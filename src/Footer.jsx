import React from 'react'

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-base-200 text-base-content border-t border-base-300 p-10">
      <nav>
        <h6 className="footer-title">Navigate</h6>
        <a href="#Hero" className="link link-hover">Home</a>
        <a href="#About" className="link link-hover">About</a>
        <a href="#Skills" className="link link-hover">Skills</a>
        <a href="#Projects" className="link link-hover">Projects</a>
        <a href="#contact" className="link link-hover">Contact</a>
      </nav>

      <nav>
        <h6 className="footer-title">Projects</h6>
        <a href="https://notes-manager-tau.vercel.app/" target="_blank" rel="noopener noreferrer" className="link link-hover">Productivity System</a>
        <a href="https://mohamed911zean.github.io/ecommerce/" target="_blank" rel="noopener noreferrer" className="link link-hover">Tech E-Commerce</a>
        <a href="https://mohamed911zean.github.io/watches-ecommerce-project/" target="_blank" rel="noopener noreferrer" className="link link-hover">Watches Store</a>
        <a href="https://mohamed911zean.github.io/Landing-page/" target="_blank" rel="noopener noreferrer" className="link link-hover">Landing Page</a>
        <a href="https://mohamed911zean.github.io/Product-Landing-Page/" target="_blank" rel="noopener noreferrer" className="link link-hover">Product Page</a>
      </nav>

      <nav>
        <h6 className="footer-title">Connect</h6>
        <a href="https://github.com/Mohamed911zean" target="_blank" rel="noopener noreferrer" className="link link-hover">GitHub</a>
        <a href="https://www.facebook.com/mohamed.zean.7393" target="_blank" rel="noopener noreferrer" className="link link-hover">Facebook</a>
        <a href="https://www.instagram.com/mu7amed_el3shmawy/" target="_blank" rel="noopener noreferrer" className="link link-hover">Instagram</a>
      </nav>

      <div className="col-span-full border-t border-base-300 w-full pt-6 text-center text-xs text-base-content/50 mt-4">
        © {new Date().getFullYear()} Mohamed Zean — Built with React & DaisyUI
      </div>
    </footer>
  )
}

export default Footer