import { motion } from 'framer-motion';
import { 
  ChevronRight, 
  HelpCircle, 
  FileText, 
  MessageSquare,
  ChevronDown,
  Clock,
  Euro,
  Wallet
} from 'lucide-react';
import { useState, useEffect } from 'react';

const Dashboard = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div style={{ backgroundColor: '#f1f4f7', minHeight: '100vh', marginTop: '-1rem' }}>
      <motion.div 
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ paddingBottom: '2rem', maxWidth: '1140px', paddingTop: isMobile ? '1rem' : '1.5rem', paddingLeft: isMobile ? '1rem' : '0', paddingRight: isMobile ? '1rem' : '0' }}
      >
        <div style={{ marginBottom: '1.5rem' }}>
          <h1 style={{ fontSize: isMobile ? '1.5rem' : '2.4rem', color: '#0096C7', fontWeight: 300, letterSpacing: '-0.01em', textTransform: 'uppercase', lineHeight: 1.1 }}>
            JAMILA BEULGUIBE INOUSSA
          </h1>
        </div>

        <div className="flex" style={{ flexWrap: 'wrap', gap: '2rem', flexDirection: isMobile ? 'column' : 'row' }}>
          {/* Main Content Column */}
          <div style={{ flex: isMobile ? '1 1 100%' : 2.2 }} className="flex flex-column gap-6">
            
            {/* Warning Message */}
            <div style={{ 
              backgroundColor: 'white', 
              border: '1px solid #e2e8f0', 
              padding: isMobile ? '1rem' : '1.25rem 1.75rem', 
              borderRadius: '2px',
              display: 'flex',
              gap: isMobile ? '1rem' : '1.4rem',
              alignItems: 'center',
              position: 'relative',
              boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
            }}>
               <div style={{ color: '#d31d44', display: 'flex', alignItems: 'center' }}>
                 <HelpCircle size={isMobile ? 28 : 32} />
               </div>
               <div style={{ flex: 1, paddingRight: isMobile ? '1.5rem' : '2.5rem' }}>
                 <p style={{ color: '#333', fontSize: isMobile ? '0.85rem' : '1rem', lineHeight: '1.45', fontWeight: 400 }}>
                   Ce dossier est clôturé, vous avez un accès limité aux fonctionnalités de l'Espace Mon Compte. Pour plus d'informations, vous pouvez contacter votre Caf.
                 </p>
               </div>
               <ChevronRight style={{ color: '#0096C7', cursor: 'pointer', position: 'absolute', right: isMobile ? '0.5rem' : '1.5rem' }} size={24} />
            </div>

            {/* Mes Paiements Section */}
            <div style={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '4px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
              <div className="flex justify-between items-center" style={{ padding: '0.9rem 1.5rem' }}>
                <h2 style={{ fontSize: isMobile ? '0.9rem' : '1.05rem', color: '#666', fontWeight: 600, letterSpacing: '0.02em', textTransform: 'uppercase' }}>MES PAIEMENTS ET MES DROITS</h2>
                <div style={{ color: '#0096C7' }}>
                   <ChevronDown size={28} style={{ transform: 'scale(1, -1)' }} />
                </div>
              </div>
              
              <div className="flex" style={{ padding: '0 1.5rem', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '1rem' : '0' }}>
                {/* Left Blue Box */}
                <div 
                  style={{ 
                    backgroundColor: '#0096C7', 
                    color: 'white', 
                    padding: '1.25rem 1rem', 
                    width: isMobile ? '100%' : '45%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    borderRadius: '2px'
                  }}
                >
                  <div style={{ fontSize: '1rem', fontWeight: 500, marginBottom: '2px' }}>Mon dernier paiement</div>
                  <div style={{ fontSize: '0.75rem', marginBottom: '0.4rem', opacity: 0.9 }}>le 26/02/2026</div>
                  <div style={{ fontSize: isMobile ? '2.8rem' : '3.4rem', fontWeight: 700, lineHeight: 1, margin: '0.4rem 0' }}>1040 €</div>
                  <a href="#" style={{ color: 'white', fontSize: '0.9rem', fontWeight: 500, textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.8)', marginTop: '0.5rem', display: 'flex', alignItems: 'center' }}>
                    Voir le détail <span style={{ marginLeft: '4px' }}>&gt;</span>
                  </a>
                </div>
                
                {/* Right List Section */}
                <div className="flex-1 flex flex-column gap-2" style={{ marginLeft: isMobile ? '0' : '1rem' }}>
                  <div className="flex items-center justify-between cursor-pointer" style={{ backgroundColor: '#f1f4f7', padding: '0.85rem 1.25rem', borderRadius: '2px' }}>
                     <span style={{ fontWeight: 400, color: '#333', fontSize: '0.9rem' }}>Mes paiements et droits</span>
                     <ChevronRight size={20} color="#0096C7" />
                  </div>
                  <div className="flex items-center justify-between cursor-pointer" style={{ backgroundColor: '#f1f4f7', padding: '0.85rem 1.25rem', borderRadius: '2px' }}>
                     <span style={{ fontWeight: 400, color: '#333', fontSize: '0.9rem' }}>Mes attestations</span>
                     <ChevronRight size={20} color="#0096C7" />
                  </div>
                  <div className="flex items-center justify-between cursor-pointer" style={{ backgroundColor: '#f1f4f7', padding: '0.85rem 1.25rem', borderRadius: '2px' }}>
                     <span style={{ fontWeight: 400, color: '#333', fontSize: '0.9rem' }}>Mes ressources</span>
                     <ChevronRight size={20} color="#0096C7" />
                  </div>
                </div>
              </div>

              <div style={{ padding: '1rem 1.5rem', display: 'flex', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '6px', color: '#333', fontSize: isMobile ? '0.9rem' : '1.05rem' }}>
                  Mon quotient familial <div style={{ border: '1px solid #333', borderRadius: '50%', width: '16px', height: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 700 }}>i</div> : <span style={{ fontWeight: 700, marginLeft: '4px' }}>Indisponible</span>
                </div>
              </div>
              
              <div style={{ padding: '0 1.5rem 1.5rem 1.5rem' }}>
                <button className="btn" style={{ 
                  width: '100%', 
                  backgroundColor: '#0096C7', 
                  color: 'white', 
                  fontSize: isMobile ? '0.85rem' : '0.95rem', 
                  fontWeight: 600, 
                  height: '50px',
                  borderRadius: '4px',
                  textTransform: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: isMobile ? '8px' : '12px',
                  padding: isMobile ? '0 10px' : '0'
                }}>
                  <div style={{ width: '28px', height: '32px', backgroundColor: 'white', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#d31d44', padding: '2px', flexShrink: 0 }}>
                     <FileText size={20} />
                  </div>
                  <span style={{ textAlign: 'left' }}>Télécharger mon relevé de compte de février</span>
                </button>
              </div>
            </div>

            {/* Mes Démarches Section */}
            <div style={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '4px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
              <div className="flex justify-between items-center" style={{ padding: '0.9rem 1.5rem' }}>
                <h2 style={{ fontSize: isMobile ? '0.9rem' : '1.05rem', color: '#666', fontWeight: 600, letterSpacing: '0.02em', textTransform: 'uppercase' }}>MES DÉMARCHES</h2>
                <div style={{ color: '#0096C7' }}>
                   <ChevronDown size={28} style={{ transform: 'scale(1, -1)' }} />
                </div>
              </div>
              
              <div className="flex" style={{ padding: isMobile ? '1.5rem 1rem' : '1.5rem 3rem 2.5rem 3rem', gap: isMobile ? '2rem' : '2rem', flexDirection: isMobile ? 'column' : 'row' }}>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
                  <div style={{ width: isMobile ? '110px' : '130px', height: isMobile ? '110px' : '130px', border: '1px solid #e2e8f0', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                    <FileText size={isMobile ? 40 : 48} color="#005691" />
                    <div style={{ position: 'absolute', bottom: '10px', right: '10px', backgroundColor: 'white', borderRadius: '50%', border: '2px solid #005691', padding: '2px' }}>
                      <Clock size={16} color="#005691" />
                    </div>
                  </div>
                  <button className="btn" style={{ backgroundColor: '#f1f4f7', color: '#0096C7', fontWeight: 600, width: '100%', height: '48px', textTransform: 'none', borderRadius: '4px', fontSize: '0.9rem' }}>
                    Suivre mes démarches
                  </button>
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
                  <div style={{ width: isMobile ? '110px' : '130px', height: isMobile ? '110px' : '130px', border: '1px solid #e2e8f0', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                    <Wallet size={isMobile ? 40 : 48} color="#005691" />
                    <div style={{ position: 'absolute', bottom: '10px', right: '10px', backgroundColor: 'white', borderRadius: '50%', border: '2px solid #0096C7', padding: '2px' }}>
                      <Euro size={16} color="#0096C7" />
                    </div>
                  </div>
                  <button className="btn" style={{ backgroundColor: '#0096C7', color: 'white', fontWeight: 600, width: '100%', height: '48px', textTransform: 'none', borderRadius: '4px', fontSize: '0.9rem' }}>
                    Simuler ou demander
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Widgets) */}
          <div style={{ flex: isMobile ? '1 1 100%' : 1 }} className="flex flex-column gap-6">
            {/* Mon Profil */}
            <div style={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '4px', paddingBottom: '1.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
               <div className="flex justify-between items-center" style={{ padding: '0.9rem 1.5rem' }}>
                 <h2 style={{ fontSize: '1rem', color: '#555', fontWeight: 500, letterSpacing: '0.02em', textTransform: 'uppercase' }}>MON PROFIL</h2>
                 <div style={{ color: '#0096C7' }}>
                   <ChevronDown size={28} style={{ transform: 'scale(1, -1)' }} />
                 </div>
               </div>
               
               <div style={{ padding: '0 1.5rem 1.5rem 1.5rem' }} className="flex flex-column gap-5">
                 <div>
                   <p style={{ fontSize: '1rem', color: '#333', marginBottom: '1.25rem' }}>Je suis célibataire.</p>
                   <p style={{ fontSize: '1rem', color: '#333' }}>Je suis étudiante depuis le 1 septembre 2025.</p>
                 </div>
                 
                 <div>
                   <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '4px' }}>Mon adresse:</p>
                   <p style={{ fontSize: '0.95rem', color: '#333', fontWeight: 400, lineHeight: '1.4' }}>ETAGE 3 APPT 31</p>
                   <p style={{ fontSize: '0.95rem', color: '#333', fontWeight: 400, lineHeight: '1.4' }}>2 AVENUE PABLO PICASSO</p>
                   <p style={{ fontSize: '0.95rem', color: '#333', fontWeight: 400, lineHeight: '1.4' }}>93420 VILLEPINTE</p>
                   <p style={{ fontSize: '0.95rem', color: '#333', fontWeight: 400, lineHeight: '1.4' }}>FRANCE</p>
                 </div>
               </div>

               <div style={{ padding: '0 1.5rem' }}>
                  <button className="btn" style={{ 
                    width: '100%', 
                    backgroundColor: '#0096C7', 
                    color: 'white', 
                    fontSize: '1.1rem', 
                    fontWeight: 600,
                    height: '42px',
                    borderRadius: '4px',
                    textTransform: 'none'
                  }}>Consulter</button>
               </div>
            </div>

            {/* Help Widget */}
            <div style={{ backgroundColor: '#004a91', color: 'white', padding: isMobile ? '1.5rem 1rem' : '2rem 1.5rem', borderRadius: '4px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '4px', position: 'relative' }}>
                  <MessageSquare size={isMobile ? 44 : 54} />
                  <div style={{ position: 'absolute', top: '5px', right: '-10px' }}>
                    <MessageSquare size={isMobile ? 22 : 26} />
                  </div>
                </div>
                <p style={{ fontSize: isMobile ? '1rem' : '1.1rem', fontWeight: 400, lineHeight: '1.4', padding: '0 0.5rem' }}>Besoin d'aide ou de conseils concernant vos allocations.</p>
                <button className="btn" style={{ 
                  backgroundColor: '#0096C7', 
                  color: 'white', 
                  width: '100%', 
                  height: '48px', 
                  fontWeight: 600, 
                  textTransform: 'none',
                  marginTop: '0.5rem',
                  fontSize: '1rem'
                }}>Contacter ma Caf</button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div style={{ 
          marginTop: isMobile ? '2rem' : '4rem', 
          display: 'flex', 
          flexDirection: isMobile ? 'column' : 'row',
          backgroundColor: 'white', 
          minHeight: '180px', 
          boxShadow: '0 -2px 10px rgba(0,0,0,0.02)' 
        }}>
          <div style={{ width: isMobile ? '100%' : '180px', backgroundColor: '#002d5d', color: 'white', display: 'flex', flexDirection: 'column', padding: isMobile ? '1.5rem' : '2rem 1.5rem' }}>
             <p style={{ fontSize: isMobile ? '1.1rem' : '1.25rem', fontWeight: 700, lineHeight: 1.2 }}>Vous pouvez nous contacter</p>
          </div>
          <div style={{ flex: 1, padding: isMobile ? '1.5rem' : '2.5rem 4rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
             <h2 style={{ fontSize: isMobile ? '1.4rem' : '1.7rem', fontWeight: 700, color: '#333' }}>Nous sommes toujours joignables</h2>
             <p style={{ fontSize: '1rem', color: '#666' }}>Par téléphone, sur place ou par courriel, choisissez !</p>
             <button style={{ 
                backgroundColor: '#004a91', 
                color: 'white', 
                width: isMobile ? '100%' : '220px', 
                height: isMobile ? '48px' : '54px', 
                fontWeight: 600, 
                fontSize: '1.1rem', 
                border: 'none', 
                cursor: 'pointer', 
                borderRadius: '2px', 
                marginTop: '0.5rem' 
              }}>
               Nous contacter
             </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
