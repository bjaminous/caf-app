import { Eye, MapPin, Mail, User, Power, Search, Home, ChevronDown, Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import cafLogo from '../assets/caf-logo.png';
import { useState, useEffect } from 'react';

const Header = () => {
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard';
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isDashboard) {
    return (
      <header className="dashboard-header" style={{ width: '100%' }}>
        {/* Top Dark Bar */}
        <div style={{ backgroundColor: '#002d5d', minHeight: isMobile ? '70px' : '60px', color: 'white' }}>
          <div className="container flex items-center justify-between h-full" style={{ padding: isMobile ? '0 1rem' : 0 }}>
            <div className="flex items-center h-full">
              <div style={{ backgroundColor: 'white', padding: isMobile ? '8px 10px' : '10px 15px', marginRight: '0' }}>
                <img src={cafLogo} alt="CAF" style={{ height: isMobile ? '30px' : '35px' }} />
              </div>
              {!isMobile && <span style={{ fontSize: '1.8rem', fontWeight: 600, margin: '0 30px 0 15px' }}>caf.fr</span>}
              
              {!isMobile && (
                <div className="flex h-full">
                  <div style={{ backgroundColor: 'white', color: '#002d5d', padding: '0 25px', display: 'flex', alignItems: 'center', fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer' }}>
                    Allocataires
                  </div>
                  <div style={{ padding: '0 25px', display: 'flex', alignItems: 'center', fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer', opacity: 0.9 }}>
                    Professionnels
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center gap-4 h-full">
              {isMobile ? (
                <>
                  <Eye size={24} style={{ color: 'white' }} />
                  <Menu size={24} style={{ color: 'white' }} />
                </>
              ) : (
                <>
                  <div style={{ width: '1px', height: '100%', backgroundColor: 'rgba(255,255,255,0.2)' }}></div>
                  <button className="flex flex-column items-center justify-center gap-1" style={{ color: 'white', opacity: 0.9 }}>
                    <Eye size={18} />
                    <span style={{ fontSize: '0.7rem' }}>Contraste</span>
                  </button>
                  <div className="flex items-center gap-6" style={{ fontSize: '0.8rem', fontWeight: 500 }}>
                    <div className="flex flex-column items-center gap-1 cursor-pointer">
                      <MapPin size={18} />
                      <span>Caf - 95</span>
                    </div>
                    <div className="flex flex-column items-center gap-1 cursor-pointer">
                      <Mail size={18} />
                      <span>Courriers</span>
                    </div>
                    <div className="flex flex-column items-center gap-1 cursor-pointer">
                      <User size={18} />
                      <div className="flex items-center gap-1">
                        <span>Mon Compte</span>
                        <ChevronDown size={12} />
                      </div>
                    </div>
                    <div className="flex flex-column items-center gap-1 cursor-pointer">
                      <Power size={18} />
                      <span>Déconnexion</span>
                    </div>
                  </div>
                  <div style={{ backgroundColor: '#004b9b', height: '60px', width: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                    <Search size={24} />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Sub Navigation Bar - Hidden on mobile or made a scroll/menu */}
        {!isMobile && (
          <div style={{ backgroundColor: '#e6f0f7', borderBottom: '1px solid #d1e3f0' }}>
            <div className="container">
              <nav className="flex items-center gap-10 py-4" style={{ fontSize: '0.9rem', fontWeight: 600, color: '#004b9b' }}>
                <Home size={20} className="cursor-pointer" />
                <span className="cursor-pointer">Actualités</span>
                <span className="cursor-pointer">Aides et démarches</span>
                <span className="cursor-pointer">Ma Caf</span>
                <span className="cursor-pointer" style={{ color: '#002d5d', borderBottom: '3px solid #002d5d', paddingBottom: '0', marginBottom: '-16px', height: '100%', display: 'flex', alignItems: 'center' }}>Vies de Famille</span>
              </nav>
            </div>
          </div>
        )}

        {/* Breadcrumbs */}
        <div style={{ backgroundColor: '#f5f8fa', padding: '12px 0' }}>
          <div className="container">
            <div style={{ fontSize: '0.85rem', color: '#005691', padding: isMobile ? '0 1rem' : 0 }}>
              <span style={{ cursor: 'pointer' }}>Accueil</span>
              <span style={{ margin: '0 8px', color: '#ccc' }}>&gt;</span>
              <span style={{ fontWeight: 700, cursor: 'pointer' }}>Mon compte allocataire</span>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="main-header" style={{ height: isMobile ? '80px' : '70px', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ width: '100%', padding: isMobile ? '0 1rem' : '0 2rem' }}>
        <div className="flex justify-between items-center">
          {/* Left: Portal Text */}
          <Link to="/" className="flex flex-column" style={{ color: 'white', maxWidth: isMobile ? '200px' : 'none' }}>
            <span style={{ fontSize: isMobile ? '0.6rem' : '0.7rem', fontWeight: 600, letterSpacing: '0.05em', opacity: 0.9 }}>BIENVENUE SUR LE PORTAIL</span>
            <span style={{ fontSize: isMobile ? '1rem' : '1.2rem', fontWeight: 700, lineHeight: 1.1 }}>DES ALLOCATIONS FAMILIALES</span>
          </Link>

          {/* Middle/Right: Contrast and Logos */}
          <div className="flex items-center gap-4">
            <button className="flex flex-column items-center gap-1" style={{ color: 'white', opacity: 0.9 }}>
              <Eye size={isMobile ? 24 : 20} />
              {!isMobile && <span style={{ fontSize: '0.75rem' }}>Contraste</span>}
            </button>

            {!isMobile && (
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-4">
                  <span style={{ fontSize: '1.1rem', fontWeight: 400, color: 'white' }}>caf.fr</span>
                  <div className="flex flex-column" style={{ lineHeight: 0.9, color: 'white', fontWeight: 'bold' }}>
                    <span style={{ color: '#00d0f0', fontSize: '1.2rem' }}>ari</span>
                    <span style={{ fontSize: '1.2rem' }}>pa</span>
                  </div>
                </div>
                <div style={{ width: '1px', height: '40px', backgroundColor: 'rgba(255,255,255,0.8)' }}></div>
              </div>
            )}

            <div style={{ backgroundColor: isMobile ? 'transparent' : 'transparent' }}>
               <img src={cafLogo} alt="CAF" style={{ height: isMobile ? '40px' : '45px', width: 'auto' }} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
