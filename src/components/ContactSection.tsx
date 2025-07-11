
import React from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useForm } from '@formspree/react';

const ContactSection = () => {
  const { t } = useLanguage();
  const [state, handleSubmit] = useForm('xqknqpzn');

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
            {t('contact')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('contactDescription')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Let's Connect
              </h3>
              
              <div className="space-y-4">
                <a
                  href="mailto:ciraganenicole@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-violet-50 transition-all duration-300 group"
                >
                  <div className="p-3 bg-violet-100 text-violet-500 rounded-full group-hover:bg-violet-500 group-hover:text-white transition-all duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Email</p>
                    <p className="text-gray-600">ciraganenicole@gmail.com</p>
                  </div>
                </a>
                
                <a
                  href="https://github.com/ciraganenicole"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-violet-50 transition-all duration-300 group"
                >
                  <div className="p-3 bg-violet-100 text-violet-500 rounded-full group-hover:bg-violet-500 group-hover:text-white transition-all duration-300">
                    <Github className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">GitHub</p>
                    <p className="text-gray-600">@ciraganenicole</p>
                  </div>
                </a>
                
                <a
                  href="https://www.linkedin.com/in/ciraganenicole/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-violet-50 transition-all duration-300 group"
                >
                  <div className="p-3 bg-violet-100 text-violet-500 rounded-full group-hover:bg-violet-500 group-hover:text-white transition-all duration-300">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">LinkedIn</p>
                    <p className="text-gray-600">ciraganenicole</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {state.succeeded ? (
              <div className="p-6 bg-green-50 text-green-700 rounded-xl text-center font-medium">
                {t('send') + ' ✔️'}<br />Merci pour votre message !
              </div>
            ) : (
              <>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('name_field')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300"
                    placeholder="Votre nom"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('email_field')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300"
                    placeholder="votre@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('message_field')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Votre message..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-violet-500 text-white px-8 py-4 rounded-xl font-medium hover:bg-violet-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  <Send className="w-5 h-5" />
                  {state.submitting ? t('send') + '...' : t('send')}
                </button>
                {state.errors && (
                  <div className="text-red-600 text-sm mt-2">
                    {Array.isArray(state.errors)
                      ? state.errors.map((err, idx) => <div key={idx}>{String(err.message)}</div>)
                      : <div>{typeof state.errors === 'object' && 'message' in state.errors ? String(state.errors.message) : String(state.errors)}</div>
                    }
                  </div>
                )}
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
