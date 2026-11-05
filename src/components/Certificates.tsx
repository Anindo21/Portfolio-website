import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Award, ExternalLink, X, Loader2, CheckCircle2, ChevronDown } from 'lucide-react';
import { Language } from '../types';
import { certificatesData } from '../data';

interface CertificatesProps {
  language: Language;
}

export default function Certificates({ language }: CertificatesProps) {
  const [selectedCertId, setSelectedCertId] = useState<string | null>(null);
  const [iframeLoading, setIframeLoading] = useState(true);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleSkipSection = () => {
    const nextElem = document.getElementById('education');
    if (nextElem) {
      nextElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Helper to extract the embed url and type
  const getCertTypeAndUrl = (url: string | undefined) => {
    if (!url) return { embedUrl: '', isEmbeddable: false, type: 'none' };

    // 1. Local path starting with /certificates/
    if (url.startsWith('/certificates/') || url.startsWith('certificates/')) {
      const formattedUrl = url.startsWith('/') ? url : `/${url}`;
      let finalUrl = encodeURI(formattedUrl);
      if (finalUrl.toLowerCase().endsWith('.pdf')) {
        finalUrl += '#toolbar=0&navpanes=0';
      }
      return { embedUrl: finalUrl, isEmbeddable: true, type: 'local' };
    }

    // 2. External badges (Credly, LinkedIn, Databricks etc.)
    return { embedUrl: url, isEmbeddable: false, type: 'external' };
  };

  const selectedCert = certificatesData.find((c) => c.id === selectedCertId);
  const previewData = selectedCert ? getCertTypeAndUrl(selectedCert.credentialUrl) : null;

  // Handle loading state reset when switching certificates
  useEffect(() => {
    if (selectedCertId) {
      setIframeLoading(true);
    }
  }, [selectedCertId]);

  // Handle scroll lock and Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedCertId(null);
      }
    };

    if (selectedCertId) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedCertId]);

  return (
    <section id="certificates" className="py-24 px-6 max-w-6xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4"
      >
        <div>
          <span className="text-[10px] uppercase tracking-[0.25em] text-sky-600 dark:text-sky-400 font-bold">
            {language === 'en' ? '05 — CERTIFICATIONS' : '05 — ZERTIFIZIERUNGEN'}
          </span>
          <h2 className="font-sans text-3xl md:text-4xl font-black uppercase tracking-tight text-slate-900 dark:text-white mt-1">
            {language === 'en' ? 'CERTIFICATES' : 'ZERTIFIKATE'}
          </h2>
        </div>

        {/* Skip Section Quick Action */}
        <button
          onClick={handleSkipSection}
          className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg transition-all duration-300 cursor-pointer hover:border-sky-500/30 shrink-0 self-start md:self-auto"
          title={language === 'en' ? 'Skip to Education section' : 'Zum Abschnitt Ausbildung springen'}
        >
          <span>{language === 'en' ? 'Skip Section' : 'Abschnitt überspringen'}</span>
          <ChevronDown className="w-4 h-4 text-sky-500 animate-bounce" />
        </button>
      </motion.div>

      {/* Helper cue bar */}
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-4 px-1 font-mono">
        <span className="flex items-center gap-1.5">
          <Award className="w-3.5 h-3.5 text-sky-500" />
          {certificatesData.length} {language === 'en' ? 'Verified Credentials' : 'Verifizierte Zertifikate'}
        </span>
        <span className="hidden sm:inline-block text-[11px] text-slate-400 dark:text-slate-500">
          {language === 'en' ? 'Scroll inside box to view all' : 'In der Box scrollen für alle Zertifikate'}
        </span>
      </div>

      {/* Scrollable Certificates Container */}
      <div className="relative border border-slate-200 dark:border-white/10 rounded-2xl bg-slate-50/50 dark:bg-[#07090e]/50 backdrop-blur-sm p-4 md:p-6 shadow-inner">
        <div className="max-h-[600px] overflow-y-auto px-1 py-1 custom-scrollbar space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificatesData.map((cert, index) => {
              const { isEmbeddable } = getCertTypeAndUrl(cert.credentialUrl);
              
              return (
                <motion.div
                  key={cert.id}
                  id={`cert-card-${cert.id}`}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.4), ease: "easeOut" }}
                  className="bg-white dark:bg-[#0c0c0c] border border-slate-200 dark:border-white/5 p-6 rounded-xl hover:border-sky-500/20 dark:hover:border-white/20 hover:shadow-xl dark:hover:shadow-none transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      {/* Header inside card: Year on left, Ribbon icon on right */}
                      <div className="flex justify-between items-center mb-6">
                        <span className="text-xs font-semibold text-sky-600 dark:text-sky-400 bg-sky-500/5 dark:bg-sky-500/10 border border-sky-500/15 dark:border-sky-500/20 px-3 py-1 rounded">
                          {cert.year}
                        </span>
                        <Award className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight leading-snug mb-1">
                        {cert.title[language]}
                      </h3>

                      {/* Issuer */}
                      <p className="text-sm font-semibold text-sky-600 dark:text-sky-400 mb-4">
                        {cert.issuer}
                      </p>

                      {/* Separator line */}
                      <hr className="border-slate-100 dark:border-white/5 mb-4" />

                      {/* Description */}
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                        {cert.description[language]}
                      </p>
                    </div>

                    {/* Action Area */}
                    <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between mt-auto gap-2">
                      {cert.credentialUrl ? (
                        <>
                          {isEmbeddable ? (
                            <button
                              onClick={() => setSelectedCertId(cert.id)}
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 dark:text-sky-400 hover:text-sky-500 dark:hover:text-sky-300 transition-colors cursor-pointer group"
                            >
                              <span>{language === 'en' ? 'Verify Credential' : 'Zertifikat prüfen'}</span>
                              <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </button>
                          ) : (
                            <a
                              href={cert.credentialUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 dark:text-sky-400 hover:text-sky-500 dark:hover:text-sky-300 transition-colors cursor-pointer group"
                            >
                              <span>{language === 'en' ? 'Verify Credential' : 'Zertifikat prüfen'}</span>
                              <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </a>
                          )}
                        </>
                      ) : (
                        <span className="text-[11px] font-medium text-slate-400 dark:text-slate-600 italic">
                          {language === 'en' ? 'Verification link pending' : 'Verifizierung ausstehend'}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Jump Button inside container */}
        <div className="pt-4 border-t border-slate-200/60 dark:border-white/5 mt-4 flex justify-center">
          <button
            onClick={handleSkipSection}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors cursor-pointer"
          >
            <span>{language === 'en' ? 'Next Section: Education' : 'Nächster Abschnitt: Ausbildung'}</span>
            <ChevronDown className="w-3.5 h-3.5 text-sky-500" />
          </button>
        </div>
      </div>

      {/* Direct In-App Certificate Lightbox Modal */}
      {selectedCert && previewData && previewData.isEmbeddable && (
        <div
          onClick={() => setSelectedCertId(null)}
          className="fixed inset-0 bg-slate-950/80 dark:bg-slate-950/90 backdrop-blur-md z-50 flex items-center justify-center p-4 cursor-zoom-out animate-fadeIn"
        >
          <div
            ref={modalRef}
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-[#0c0c0c] border border-slate-200 dark:border-white/10 rounded-2xl w-full max-w-5xl h-[85vh] flex flex-col md:flex-row overflow-hidden shadow-2xl relative cursor-default animate-scaleUp"
          >
            {/* Left/Top Area: Certificate Display */}
            <div className="flex-1 bg-slate-50 dark:bg-slate-950/50 relative flex items-center justify-center border-b md:border-b-0 md:border-r border-slate-200 dark:border-white/5 min-h-[50%] md:min-h-0">
              
              {/* Embeddable Iframe (Google Drive / Local PDF or Image) */}
              {iframeLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-slate-500 dark:text-slate-400 z-10">
                  <Loader2 className="w-8 h-8 text-sky-500 animate-spin" />
                  <span className="text-xs font-mono select-none">
                    {language === 'en' ? 'Rendering secure document flow...' : 'Dokumenten-Vorschau wird geladen...'}
                  </span>
                </div>
              )}
              
              {previewData.type === 'local' && previewData.embedUrl.match(/\.(png|jpe?g|gif|svg|webp)$/i) ? (
                <img
                  src={previewData.embedUrl}
                  alt={selectedCert.title[language]}
                  className={`max-w-full max-h-full object-contain p-4 transition-opacity duration-300 ${iframeLoading ? 'opacity-0' : 'opacity-100'}`}
                  onLoad={() => setIframeLoading(false)}
                />
              ) : (
                <iframe
                  src={previewData.embedUrl}
                  className={`w-full h-full border-none transition-opacity duration-300 ${iframeLoading ? 'opacity-0' : 'opacity-100'}`}
                  onLoad={() => setIframeLoading(false)}
                  title={selectedCert.title[language]}
                  allow="autoplay"
                />
              )}
            </div>

            {/* Right/Bottom Area: Information Panel */}
            <div className="w-full md:w-80 bg-slate-50/50 dark:bg-[#09090b] p-6 md:p-8 flex flex-col justify-between select-text overflow-y-auto">
              <div className="space-y-6">
                <div>
                  <span className="text-[9px] uppercase tracking-[0.25em] text-sky-600 dark:text-sky-400 font-extrabold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{language === 'en' ? 'VERIFIED CREDENTIAL' : 'VERIFIZIERTES ZERTIFIKAT'}</span>
                  </span>
                  <h3 className="font-sans text-xl font-bold tracking-tight text-slate-900 dark:text-white mt-2 leading-tight">
                    {selectedCert.title[language]}
                  </h3>
                  <p className="text-sm font-semibold text-sky-655 dark:text-sky-400 mt-1">
                    {selectedCert.issuer}
                  </p>
                </div>

                <hr className="border-slate-200 dark:border-white/5" />

                <div className="space-y-4">
                  <div>
                    <h4 className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                      {language === 'en' ? 'Year Issued' : 'Ausstellungsjahr'}
                    </h4>
                    <p className="text-sm text-slate-800 dark:text-slate-200 font-mono mt-0.5">{selectedCert.year}</p>
                  </div>

                  <div>
                    <h4 className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                      {language === 'en' ? 'Details & Syllabus' : 'Details & Lehrplan'}
                    </h4>
                    <p className="text-xs text-slate-650 dark:text-slate-400 leading-relaxed mt-1.5">
                      {selectedCert.description[language]}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/5">
                <button
                  onClick={() => setSelectedCertId(null)}
                  className="w-full py-2.5 px-4 bg-slate-200/50 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 rounded-lg text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-all text-center select-none cursor-pointer"
                >
                  {language === 'en' ? 'Close Viewer' : 'Vorschau schließen'}
                </button>
              </div>
            </div>

            {/* Float Absolute Close Button */}
            <button
              onClick={() => setSelectedCertId(null)}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/80 dark:bg-slate-950/60 hover:bg-white dark:hover:bg-slate-950/90 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all shadow-lg cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

