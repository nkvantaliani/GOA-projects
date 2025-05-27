import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 p-6 text-center">
      <p className="mb-4 text-teal-400 text-lg">Socials:</p>
      <div className="flex justify-center gap-6 text-2xl">
        <a href="https://github.com/nkvantaliani" target="_blank" ><FaGithub /></a>
        <a href="https://www.linkedin.com/in/nata-kvantaliani-716728320/" target="_blank"><FaLinkedin /></a>
        <a href="https://www.instagram.com/natamagaria/" target="_blank"><FaInstagram /></a>
        <a href="https://www.facebook.com/nata.kvantaliani.90" target="_blank" ><FaFacebook /></a>
      </div>
    </footer>
  );
}
