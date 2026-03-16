import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import fcLogo from '../assets/franceconnect-logo.png';

const LoginSelector = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.1 }
    }
  };

  return (
    <motion.div 
      className="container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ maxWidth: '900px', padding: isMobile ? '1rem' : '1rem 0' }}
    >
      <div className="card" style={{ padding: 0, overflow: 'hidden', border: 'none', boxShadow: 'var(--shadow-md)', backgroundColor: 'white' }}>
        <div style={{ backgroundColor: '#fff', borderBottom: '1px solid #eee', padding: isMobile ? '1rem' : '1rem 2rem' }}>
          <h2 style={{ fontSize: isMobile ? '1rem' : '1.25rem', color: '#666', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
            CONNEXION ALLOCATAIRE
          </h2>
        </div>
        
        <div className="flex flex-column md:flex-row" style={{ minHeight: isMobile ? 'auto' : '350px', display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}>
          {/* CAF Login Side */}
          <div style={{ flex: 1, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: isMobile ? '2rem 1.5rem' : '3rem' }}>
            <h3 style={{ marginBottom: isMobile ? '1.5rem' : '2rem', fontSize: '1.1rem', fontWeight: 600, color: '#333' }}>Avec vos identifiants Caf</h3>
            <button 
              className="btn" 
              style={{ 
                width: isMobile ? '100%' : '240px', 
                padding: '0.85rem', 
                backgroundColor: '#0096C7', 
                color: 'white', 
                fontWeight: 600, 
                borderRadius: '4px',
                fontSize: '1rem'
              }}
              onClick={() => navigate('/login')}
            >
              Se connecter
            </button>
            <a href="#" style={{ marginTop: '1.5rem', color: '#0096C7', fontSize: '0.9rem', fontWeight: 500, textDecoration: 'none' }}>
              Créer mon compte
            </a>
          </div>

          {/* Separator */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', padding: isMobile ? '1rem 0' : '0' }}>
            {isMobile ? (
              <div style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ flex: 1, height: '1px', backgroundColor: '#eee' }}></div>
                <span style={{ fontWeight: 600, color: '#999', fontSize: '0.8rem' }}>OU</span>
                <div style={{ flex: 1, height: '1px', backgroundColor: '#eee' }}></div>
              </div>
            ) : (
              <div style={{ height: '70%', width: '1px', backgroundColor: '#eee', position: 'relative' }}>
                <span style={{ 
                  position: 'absolute', 
                  top: '50%', 
                  left: '50%', 
                  transform: 'translate(-50%, -50%)',
                  backgroundColor: 'white',
                  padding: '0.5rem',
                  fontWeight: 600,
                  color: '#999',
                  fontSize: '0.875rem'
                }}>OU</span>
              </div>
            )}
          </div>

          {/* FranceConnect Side */}
          <div style={{ flex: 1, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: isMobile ? '2rem 1.5rem' : '3rem' }}>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem', fontWeight: 600, color: '#333' }}>Avec FranceConnect</h3>
            <p style={{ fontSize: '0.8125rem', color: '#666', marginBottom: '1.5rem', maxWidth: '300px', lineHeight: 1.4 }}>
              FranceConnect est une solution proposée par l'État pour sécuriser et simplifier la connexion à vos services en ligne.
            </p>
            <div style={{ padding: '0.6rem 1rem', border: 'none', backgroundColor: '#000091', color: 'white', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', borderRadius: '4px' }}>
               <img src={fcLogo} alt="FranceConnect" style={{ height: '28px', width: 'auto' }} />
               <div className="flex flex-column items-start" style={{ lineHeight: 1.1, textAlign: 'left' }}>
                 <span style={{ fontSize: '0.65rem' }}>S'identifier avec</span>
                 <span style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>FranceConnect</span>
               </div>
            </div>
            <a href="#" style={{ marginTop: '1.5rem', color: '#0096C7', fontSize: '0.9rem', fontWeight: 500, textDecoration: 'none' }}>
              Qu'est-ce que FranceConnect ?
            </a>
          </div>
        </div>
      </div>

      <div className="card" style={{ marginTop: '1.5rem', padding: 0, overflow: 'hidden', border: 'none', boxShadow: 'var(--shadow-sm)', backgroundColor: 'white' }}>
        <div style={{ backgroundColor: '#fff', borderBottom: '1px solid #eee', padding: isMobile ? '1rem' : '1rem 2rem' }}>
          <h2 style={{ fontSize: isMobile ? '1rem' : '1.25rem', color: '#666', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
            AUTRES ESPACES
          </h2>
        </div>
        <div style={{ padding: isMobile ? '1.5rem' : '2rem', display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
           <button className="btn" style={{ border: 'none', backgroundColor: '#f1f4f7', color: '#444', fontWeight: 600, width: isMobile ? '100%' : '220px', height: '48px', borderRadius: '4px' }}>Tuteur</button>
           <button className="btn" style={{ border: 'none', backgroundColor: '#f1f4f7', color: '#444', fontWeight: 600, width: isMobile ? '100%' : '220px', height: '48px', borderRadius: '4px' }}>Pensions alimentaires</button>
        </div>
      </div>
    </motion.div>
  );
};

export default LoginSelector;
