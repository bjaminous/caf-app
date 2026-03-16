import { Facebook } from 'lucide-react';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <footer style={{ backgroundColor: '#004a91', color: 'white', padding: '0' }}>
      <div className="container" style={{ maxWidth: '1140px', padding: 0, display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}>
        
        {/* Mobile Chat Bubble (floating-like circle in screenshot) */}
        {isMobile && (
          <div style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
             <div style={{ backgroundColor: '#00c8b0', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <svg viewBox="0 0 24 24" width="24" height="24" fill="white"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
             </div>
             <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.85rem' }}>
                <span style={{ fontWeight: 700 }}>Accessibilité</span>
                <span style={{ fontWeight: 700 }}>Mentions légales</span>
                <span style={{ fontWeight: 700 }}>Nous contacter</span>
                <span style={{ fontWeight: 700 }}>Conditions générales d'utilisation</span>
                <span style={{ fontWeight: 700 }}>Données personnelles</span>
             </div>
          </div>
        )}

        {/* Left Side (Facebook) - Hidden on the mobile view in screenshot 2 */}
        {!isMobile && (
          <div style={{ width: '180px', padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <span style={{ fontSize: '0.9rem', fontWeight: 600, lineHeight: 1.2 }}>Suivez-nous sur Facebook</span>
            <div style={{ backgroundColor: 'white', borderRadius: '50%', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <Facebook size={28} color="#004a91" fill="#004a91" />
            </div>
          </div>
        )}

        {/* Right Side (Links) */}
        {!isMobile && (
          <div style={{ flex: 1, padding: '2rem 4rem', display: 'flex', gap: '5rem' }}>
            <div className="flex flex-column gap-4">
              <h4 style={{ fontSize: '1.2rem', fontWeight: 700 }}>Espaces</h4>
              <ul className="flex flex-column gap-2" style={{ fontSize: '0.95rem', fontWeight: 500 }}>
                <li><a href="#" style={{ color: 'white' }}>Allocataires</a></li>
                <li><a href="#" style={{ color: 'white' }}>Professionnels</a></li>
              </ul>
            </div>

            <div className="flex flex-column gap-4">
              <h4 style={{ fontSize: '1.2rem', fontWeight: 700 }}>Informations</h4>
              <ul className="flex flex-column gap-2" style={{ fontSize: '0.95rem', fontWeight: 500, opacity: 0.9 }}>
                <li><a href="#" style={{ color: 'white' }}>Accessibilité : partiellement conforme</a></li>
                <li><a href="#" style={{ color: 'white' }}>Mentions légales</a></li>
                <li><a href="#" style={{ color: 'white' }}>Plan du site</a></li>
                <li><a href="#" style={{ color: 'white' }}>Données personnelles</a></li>
                <li><a href="#" style={{ color: 'white' }}>Sécurité et prévention</a></li>
                <li><a href="#" style={{ color: 'white' }}>CSIRT</a></li>
              </ul>
            </div>

            <div className="flex flex-column gap-4">
              <h4 style={{ fontSize: '1.2rem', fontWeight: 700 }}>Autres sites</h4>
              <ul className="flex flex-column gap-2" style={{ fontSize: '0.95rem', fontWeight: 500, opacity: 0.9 }}>
                <li><a href="#" style={{ color: 'white' }}>Service-public.fr</a></li>
                <li><a href="#" style={{ color: 'white' }}>Monenfant.fr</a></li>
                <li><a href="#" style={{ color: 'white' }}>Pension-alimentaire.caf.fr</a></li>
                <li><a href="#" style={{ color: 'white' }}>Data.caf.fr</a></li>
                <li><a href="#" style={{ color: 'white' }}>Vacaf.org</a></li>
                <li><a href="#" style={{ color: 'white' }}>La Caf à votre écoute</a></li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
