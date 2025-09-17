import React, { useEffect } from 'react';
import { MailIcon, PhoneIcon, MessageSquareIcon } from 'lucide-react';
export function Contact() {
  useEffect(() => {
    const CONTACT_ENDPOINT = '/api/contact';
    const PRAYER_ENDPOINT = '/api/prayer';

    const $ = (sel: string) => document.querySelector(sel) as HTMLElement | null;

    function getBtn(form: HTMLFormElement) {
      return (form.querySelector('button[type="submit"], input[type="submit"]') as HTMLButtonElement | HTMLInputElement | null);
    }

    function showNotice(el: HTMLElement | null, msg: string, type: 'ok' | 'err') {
      if (!el) return;
      el.classList.remove('ok', 'err');
      el.classList.add(type);
      el.textContent = msg;
    }

    async function postJSON(url: string, data: unknown) {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const text = await res.text();
      let json: any = {};
      try { json = text ? JSON.parse(text) : {}; } catch {}
      return { ok: res.ok && json?.ok !== false, status: res.status, json };
    }

    // CONTACT
    (function wireContact() {
      const form = $('#contactForm') as HTMLFormElement | null;
      const notice = $('#contactNotice');
      if (!form) return;
      form.setAttribute('novalidate', '');

      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const payload = {
          name: (document.getElementById('name') as HTMLInputElement | null)?.value?.trim() ?? '',
          email: (document.getElementById('email') as HTMLInputElement | null)?.value?.trim() ?? '',
          phone: (document.getElementById('phone') as HTMLInputElement | null)?.value?.trim() ?? '',
          message: (document.getElementById('message') as HTMLTextAreaElement | null)?.value?.trim() ?? '',
          meta: { page: location.href, userAgent: navigator.userAgent, form: 'contact' },
        };

        const btn = getBtn(form);
        const old = btn ? (btn as HTMLButtonElement).textContent : null;
        if (btn) { (btn as HTMLButtonElement).disabled = true; btn.setAttribute('aria-busy', 'true'); (btn as HTMLButtonElement).textContent = 'Enviando…'; }

        try {
          const result = await postJSON(CONTACT_ENDPOINT, payload);
          if (result.ok) {
            showNotice(notice, '¡Gracias por ponerte en contacto con nosotros! Has dado el primer paso en tu camino a alimentar tu ser espiritual. Te responderemos pronto.', 'ok');
            if (btn) { (btn as HTMLButtonElement).textContent = 'Enviado'; }
          } else {
            showNotice(notice, 'No pudimos procesar tu mensaje en este momento. Intenta nuevamente en unos minutos.', 'err');
            if (btn) { (btn as HTMLButtonElement).disabled = false; btn.removeAttribute('aria-busy'); (btn as HTMLButtonElement).textContent = old || 'Enviar Mensaje'; }
          }
        } catch {
          showNotice(notice, 'Hubo un problema de conexión. Intenta nuevamente.', 'err');
          if (btn) { (btn as HTMLButtonElement).disabled = false; btn.removeAttribute('aria-busy'); (btn as HTMLButtonElement).textContent = old || 'Enviar Mensaje'; }
        }
      });
    })();

    // PRAYER
    (function wirePrayer() {
      const form = $('#prayerForm') as HTMLFormElement | null;
      const notice = $('#prayerNotice');
      if (!form) return;
      form.setAttribute('novalidate', '');

      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const payload = {
          name: (document.getElementById('prayer-name') as HTMLInputElement | null)?.value?.trim() ?? '',
          message: (document.getElementById('prayer-request') as HTMLTextAreaElement | null)?.value?.trim() ?? '',
          meta: { page: location.href, userAgent: navigator.userAgent, form: 'prayer' },
        };

        const btn = getBtn(form);
        const old = btn ? (btn as HTMLButtonElement).textContent : null;
        if (btn) { (btn as HTMLButtonElement).disabled = true; btn.setAttribute('aria-busy', 'true'); (btn as HTMLButtonElement).textContent = 'Enviando…'; }

        try {
          const result = await postJSON(PRAYER_ENDPOINT, payload);
          if (result.ok) {
            showNotice(notice, 'Tu petición ha sido recibida. No hay nada más poderoso que la oración. No estás solo/a — estamos contigo y estaremos orando por ti.', 'ok');
            if (btn) { (btn as HTMLButtonElement).textContent = 'Enviado'; }
          } else {
            showNotice(notice, 'No pudimos procesar tu petición ahora. Intenta más tarde.', 'err');
            if (btn) { (btn as HTMLButtonElement).disabled = false; btn.removeAttribute('aria-busy'); (btn as HTMLButtonElement).textContent = old || 'Enviar Petición'; }
          }
        } catch {
          showNotice(notice, 'Hubo un problema de conexión. Intenta nuevamente.', 'err');
          if (btn) { (btn as HTMLButtonElement).disabled = false; btn.removeAttribute('aria-busy'); (btn as HTMLButtonElement).textContent = old || 'Enviar Petición'; }
        }
      });
    })();
  }, []);

  return <section id="contacto" className="py-16 bg-stone-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-stone-800">
          Contáctanos
        </h2>
        <div className="flex flex-col lg:flex-row max-w-6xl mx-auto">
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
            <h3 className="text-2xl font-semibold mb-6 text-stone-800">
              Envíanos un Mensaje
            </h3>
            <form id="contactForm" className="space-y-4" noValidate>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">
                  Nombre Completo
                </label>
                <input type="text" id="name" className="w-full px-4 py-2 border border-stone-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500" placeholder="Tu nombre" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">
                  Correo Electrónico
                </label>
                <input type="email" id="email" className="w-full px-4 py-2 border border-stone-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500" placeholder="tu@email.com" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-1">
                  Teléfono (opcional)
                </label>
                <input type="tel" id="phone" className="w-full px-4 py-2 border border-stone-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500" placeholder="Tu número de teléfono" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">
                  Mensaje
                </label>
                <textarea id="message" rows={4} className="w-full px-4 py-2 border border-stone-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500" placeholder="¿En qué podemos ayudarte?"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-md font-medium transition-colors">
                  Enviar Mensaje
                </button>
              </div>
            </form>
            <div className="form-notice" id="contactNotice" aria-live="polite"></div>
          </div>
          <div className="lg:w-1/2 lg:pl-8">
            <h3 className="text-2xl font-semibold mb-6 text-stone-800">
              Peticiones de Oración
            </h3>
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <p className="text-stone-700 mb-4">
                Nos encantaría orar por ti. Comparte tus peticiones de oración
                con nosotros y nuestro equipo de intercesión estará orando por
                tus necesidades.
              </p>
              <form id="prayerForm" className="space-y-4" noValidate>
                <div>
                  <label htmlFor="prayer-name" className="block text-sm font-medium text-stone-700 mb-1">
                    Nombre (opcional)
                  </label>
                  <input type="text" id="prayer-name" className="w-full px-4 py-2 border border-stone-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500" placeholder="Tu nombre" />
                </div>
                <div>
                  <label htmlFor="prayer-request" className="block text-sm font-medium text-stone-700 mb-1">
                    Petición de Oración
                  </label>
                  <textarea id="prayer-request" rows={4} className="w-full px-4 py-2 border border-stone-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500" placeholder="Comparte tu petición de oración"></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full bg-stone-600 hover:bg-stone-700 text-white py-2 px-4 rounded-md font-medium transition-colors">
                    Enviar Petición
                  </button>
                </div>
              </form>
              <div className="form-notice" id="prayerNotice" aria-live="polite"></div>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
              <h4 className="text-lg font-semibold mb-4 text-stone-800">
                También puedes contactarnos por:
              </h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <PhoneIcon className="text-amber-700 mr-3" size={20} />
                  <a href="tel:+528979801693" aria-label="Llamar al +52 897 980 1693" className="text-stone-700 hover:underline">+52 897 980 1693</a>
                </div>
                <div className="flex items-center">
                  <MailIcon className="text-amber-700 mr-3" size={20} />
                  <span className="text-stone-700">
                    contacto@centrocristianogosen.org
                  </span>
                </div>
                <div className="flex items-center">
                  <MessageSquareIcon className="text-amber-700 mr-3" size={20} />
                  <a href="https://wa.me/528979801693" target="_blank" rel="noopener noreferrer" className="text-stone-700 hover:underline" aria-label="Enviar WhatsApp al +52 897 980 1693">
                    WhatsApp: +52 897 980 1693
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}