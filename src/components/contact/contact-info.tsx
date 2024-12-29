import { Mail, MapPin, Linkedin, Instagram } from 'lucide-react';

export function ContactInfo() {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-3">
        <Mail className="w-5 h-5 text-blue-600" />
        <a href="mailto:ieee.cs@kare.ac.in" className="text-blue-600 hover:underline">
          ieee.cs@kare.ac.in
        </a>
      </div>
      
      <div className="flex items-center space-x-3">
        <MapPin className="w-5 h-5 text-blue-600" />
        <span>KARE Campus, Krishnankoil, Tamil Nadu</span>
      </div>

      <div className="space-y-2">
        <h3 className="font-medium">Social Media</h3>
        <div className="flex space-x-4">
          <a
            href="#"
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 text-pink-600 hover:text-pink-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="w-5 h-5" />
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </div>
  );
}