import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';
import { Language } from '../types';
import { portfolioMetadata } from '../data';

interface ContactProps {
  language: Language;
}

export default function Contact({ language }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: "83742512-ebd3-43a9-ba6c-adeea92408d3",
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "Portfolio Contact Form Submission",
          message: formData.message
        })
      });

      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        setErrorMessage(
          language === 'en'
            ? result.message || "Failed to send message. Please try again."
            : result.message || "Fehler beim Senden. Bitte versuchen Sie es erneut."
        );
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setErrorMessage(
        language === 'en'
          ? "An unexpected error occurred. Please try again later."
          : "Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es später noch einmal."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto relative z-10">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-[10px] uppercase tracking-[0.25em] text-sky-600 dark:text-sky-400 font-bold">
          {language === 'en' ? '07 - CONTACT' : '07 - KONTAKT'}
        </span>
        <h2 className="font-sans text-3xl md:text-4xl font-black uppercase tracking-tight text-slate-900 dark:text-white mt-1">
          {language === 'en' ? 'GET IN TOUCH' : 'KONTAKT AUFNEHMEN'}
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm leading-relaxed">
          {language === 'en'
            ? "Have a project in mind, a job opportunity, or simply want to chat? Drop me a line!"
            : "Haben Sie ein Projekt im Kopf, ein Stellenangebot oder möchten Sie sich einfach austauschen? Schreiben Sie mir!"}
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Contact Info Card */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-50 dark:bg-[#0c0c0c] border border-slate-200 dark:border-white/5 p-6 rounded-xl space-y-6">
            <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight uppercase">
              {language === 'en' ? 'Contact Information' : 'Kontaktinformationen'}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {language === 'en'
                ? "I am currently looking for exciting full-time positions or freelance projects. I am highly interested in roles such as AI Engineer, Generative AI Developer, Cloud DevOps Engineer, Solutions Architect, IT Consultant, IT Project Manager, or similar roles."
                : "Ich bin derzeit auf der Suche nach spannenden Vollzeitstellen oder freiberuflichen Projekten. Mein besonderes Interesse gilt Positionen wie AI Engineer, Generative AI Developer, Cloud DevOps Engineer, Solutions Architect, IT Consultant, IT Project Manager oder ähnlichen Rollen."}
            </p>

            <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-white/5">
              {/* Email link */}
              <a
                href={`mailto:${portfolioMetadata.email}`}
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 border border-transparent hover:border-slate-200 dark:hover:border-white/10 transition-all duration-300 group"
              >
                <div className="p-3 bg-sky-500/5 dark:bg-white/5 text-sky-600 dark:text-sky-400 rounded-lg border border-sky-500/10 dark:border-white/10 group-hover:bg-sky-500 group-hover:text-white dark:group-hover:text-black transition-all duration-300">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <p className="text-[9px] uppercase font-bold tracking-widest text-slate-400 dark:text-slate-500">Email</p>
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors truncate">
                    {portfolioMetadata.email}
                  </p>
                </div>
              </a>

              {/* Phone Link */}
              <a
                href={`tel:${portfolioMetadata.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 border border-transparent hover:border-slate-200 dark:hover:border-white/10 transition-all duration-300 group"
              >
                <div className="p-3 bg-emerald-500/5 dark:bg-white/5 text-emerald-600 dark:text-emerald-400 rounded-lg border border-emerald-500/10 dark:border-white/10 group-hover:bg-emerald-500 group-hover:text-white dark:group-hover:text-black transition-all duration-300">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[9px] uppercase font-bold tracking-widest text-slate-400 dark:text-slate-500">Phone</p>
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {portfolioMetadata.phone}
                  </p>
                </div>
              </a>

              {/* Location display */}
              <div className="flex items-center gap-4 p-3 rounded-lg bg-transparent border border-transparent">
                <div className="p-3 bg-pink-500/5 dark:bg-white/5 text-pink-500 dark:text-pink-400 rounded-lg border border-pink-500/10 dark:border-white/10">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[9px] uppercase font-bold tracking-widest text-slate-400 dark:text-slate-500">Location</p>
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 font-sans">
                    {portfolioMetadata.location[language]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Column */}
        <div className="lg:col-span-7">
          <div className="bg-slate-50 dark:bg-[#0c0c0c] border border-slate-200 dark:border-white/5 p-6 md:p-8 rounded-xl relative overflow-hidden shadow-sm dark:shadow-none">
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 blur-3xl rounded-full pointer-events-none" />

            {isSubmitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 dark:text-emerald-400 rounded-full flex items-center justify-center animate-bounce shadow-lg shadow-emerald-500/10">
                  <Check className="w-6 h-6" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                    {language === 'en' ? 'Message Sent Successfully!' : 'Nachricht erfolgreich gesendet!'}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm">
                    {language === 'en'
                      ? "Thank you! Your message has been sent. I will get back to you shortly."
                      : "Vielen Dank! Ihre Nachricht wurde gesendet. Ich werde mich in Kürze bei Ihnen melden."}
                  </p>
                </div>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-4 py-2 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 rounded text-xs font-bold uppercase transition duration-200 cursor-pointer"
                >
                  {language === 'en' ? 'Send another' : 'Neue Nachricht senden'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                  <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight uppercase">
                    {language === 'en' ? 'Send a Message' : 'Nachricht senden'}
                  </h3>
                  <p className="text-xs text-slate-400 dark:text-slate-500">
                    {language === 'en' ? 'Fields marked with * are required' : 'Mit * gekennzeichnete Felder sind Pflichtfelder'}
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      {language === 'en' ? 'Your Name *' : 'Ihr Name *'}
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 rounded-lg text-sm text-slate-950 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-700 focus:outline-none focus:border-sky-500 transition-all duration-200"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      {language === 'en' ? 'Your Email *' : 'Ihre E-Mail *'}
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 rounded-lg text-sm text-slate-950 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-700 focus:outline-none focus:border-sky-500 transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {language === 'en' ? 'Subject' : 'Betreff'}
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder={language === 'en' ? "Collaboration / Job Opportunity" : "Zusammenarbeit / Stellenangebot"}
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 rounded-lg text-sm text-slate-950 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-700 focus:outline-none focus:border-sky-500 transition-all duration-200"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {language === 'en' ? 'Message *' : 'Nachricht *'}
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder={language === 'en' ? "Write your message here..." : "Schreiben Sie Ihre Nachricht hier..."}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 rounded-lg text-sm text-slate-950 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-700 focus:outline-none focus:border-sky-500 transition-all duration-200 resize-none"
                  />
                </div>

                {errorMessage && (
                  <div className="p-3.5 bg-red-500/10 border border-red-500/20 text-red-500 dark:text-red-400 rounded-lg text-xs font-semibold leading-relaxed">
                    {errorMessage}
                  </div>
                )}

                <button
                  id="submit-contact"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-sky-600 dark:bg-white hover:bg-sky-700 dark:hover:bg-sky-400 disabled:bg-slate-300 dark:disabled:bg-slate-800 text-white dark:text-black disabled:text-slate-500 font-bold rounded-lg flex items-center justify-center gap-2 transition duration-200 cursor-pointer text-xs uppercase tracking-wider border border-sky-600 dark:border-white/10 shadow-md hover:shadow-lg shadow-sky-600/10 dark:shadow-none"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? (language === 'en' ? 'Sending...' : 'Wird gesendet...') : (language === 'en' ? 'Send Message' : 'Nachricht senden')}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
