import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import fcLogo from '../assets/franceconnect-logo.png';

const LoginSelector = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.1 }
    }
  };

  // const itemVariants = {
  //   hidden: { opacity: 0, y: 10 },
  //   visible: { opacity: 1, y: 0 }
  // };

  return (
    <motion.div 
      className="container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ maxWidth: '900px' }}
    >
      <div className="card" style={{ padding: 0, overflow: 'hidden', border: 'none', boxShadow: 'var(--shadow-md)' }}>
        <div style={{ backgroundColor: '#fff', borderBottom: '1px solid var(--border-color)', padding: '1rem 2rem' }}>
          <h2 style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            CONNEXION ALLOCATAIRE
          </h2>
        </div>
        
        <div className="flex" style={{ minHeight: '300px' }}>
          {/* CAF Login Side */}
          <div className="flex-1 text-center flex flex-column items-center justify-center p-8" style={{ padding: '3rem' }}>
            <h3 style={{ marginBottom: '2rem', fontSize: '1.1rem', fontWeight: 600 }}>Avec vos identifiants Caf</h3>
            <button 
              className="btn btn-primary" 
              style={{ width: '220px', padding: '1rem' }}
              onClick={() => navigate('/login')}
            >
              Se connecter
            </button>
            <a href="#" style={{ marginTop: '1.5rem', color: 'var(--secondary-blue)', fontSize: '0.9rem', fontWeight: 500 }}>
              Créer mon compte
            </a>
          </div>

          <div className="flex items-center" style={{ position: 'relative' }}>
            <div style={{ height: '70%', width: '1px', backgroundColor: 'var(--border-color)' }}></div>
            <span style={{ 
              position: 'absolute', 
              top: '50%', 
              left: '50%', 
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'white',
              padding: '0.5rem',
              fontWeight: 600,
              color: 'var(--text-secondary)',
              fontSize: '0.875rem'
            }}>OU</span>
          </div>

          {/* FranceConnect Side */}
          <div className="flex-1 text-center flex flex-column items-center justify-center p-8" style={{ padding: '3rem' }}>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem', fontWeight: 600 }}>Avec FranceConnect</h3>
            <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginBottom: '1.5rem', maxWidth: '300px' }}>
              FranceConnect est une solution proposée par l'État pour sécuriser et simplifier la connexion à vos services en ligne.
            </p>
            <div style={{ padding: '0.5rem 1rem', border: '1px solid black', backgroundColor: '#000091', color: 'white', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', borderRadius: '4px' }}>
               <img src={fcLogo} alt="FranceConnect" style={{ height: '32px', width: 'auto' }} />
               <div className="flex flex-column items-start" style={{ lineHeight: 1.1 }}>
                 <span style={{ fontSize: '0.625rem' }}>S'identifier avec</span>
                 <span style={{ fontSize: '0.875rem', fontWeight: 'bold' }}>FranceConnect</span>
               </div>
            </div>
            <a href="#" style={{ marginTop: '1.5rem', color: 'var(--secondary-blue)', fontSize: '0.9rem', fontWeight: 500 }}>
              Qu'est-ce que FranceConnect ?
            </a>
          </div>
        </div>
      </div>

      <div className="card" style={{ marginTop: '2rem', padding: 0, overflow: 'hidden', border: 'none', boxShadow: 'var(--shadow-sm)' }}>
        <div style={{ backgroundColor: '#fff', borderBottom: '1px solid var(--border-color)', padding: '1rem 2rem' }}>
          <h2 style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            AUTRES ESPACES
          </h2>
        </div>
        <div className="flex gap-4 p-8 justify-center" style={{ padding: '2rem' }}>
           <button className="btn btn-outline" style={{ border: 'none', backgroundColor: '#edf2f7', width: '200px' }}>Tuteur</button>
           <button className="btn btn-outline" style={{ border: 'none', backgroundColor: '#edf2f7', width: '200px' }}>Pensions alimentaires</button>
        </div>
      </div>
    </motion.div>
  );
};

export default LoginSelector;
