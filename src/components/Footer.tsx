import { Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#004a91', color: 'white', padding: '0' }}>
      <div className="container flex" style={{ maxWidth: '1140px', padding: '0' }}>
        {/* Left Side (Facebook) */}
        <div style={{ width: '180px', padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <span style={{ fontSize: '0.9rem', fontWeight: 600, lineHeight: 1.2 }}>Suivez-nous sur Facebook</span>
          <div style={{ backgroundColor: 'white', borderRadius: '50%', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <Facebook size={28} color="#004a91" fill="#004a91" />
          </div>
        </div>

        {/* Right Side (Links) */}
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
      </div>
    </footer>
  );
};

export default Footer;
