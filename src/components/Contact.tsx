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

    function ensureTalkBubble(form: HTMLElement, text: string) {
      let bubble = form.querySelector('.talk-bubble') as HTMLElement | null;
      if (!bubble) {
        bubble = document.createElement('div');
        bubble.className = 'talk-bubble';
        bubble.setAttribute('data-pos', 'top');
        bubble.style.display = 'none';
        form.appendChild(bubble);
      }
      bubble.textContent = text;
      const btn = getBtn(form as HTMLFormElement) as HTMLElement | null;
      if (btn) {
        const rect = btn.getBoundingClientRect();
        const parentRect = form.getBoundingClientRect();
        const left = Math.max(8, rect.left - parentRect.left);
        const top = Math.max(0, rect.top - parentRect.top - 56);
        bubble.style.left = `${left}px`;
        bubble.style.top = `${top}px`;
      }
      bubble.style.display = 'block';
      clearTimeout((bubble as any)._hideT);
      (bubble as any)._hideT = setTimeout(() => { if (bubble) bubble.style.display = 'none'; }, 3500);
    }

    function nudge(el: HTMLElement | null) {
      if (!el) return;
      el.classList.remove('field-nudge');
      void (el as any).offsetWidth;
      el.classList.add('field-nudge');
    }

    function applySparkles(btn: HTMLButtonElement, ready: boolean) {
      let wrap = btn.querySelector('.edge-sparkles') as HTMLElement | null;
      if (ready) {
        if (!wrap) {
          wrap = document.createElement('div');
          wrap.className = 'edge-sparkles';
          for (let i = 0; i < 6; i++) wrap.appendChild(document.createElement('i'));
          btn.appendChild(wrap);
        }
        if (!(wrap as any)._interval) {
          const cycle = () => {
            const rect = btn.getBoundingClientRect();
            const w = rect.width; const h = rect.height;
            const dots = Array.from(wrap!.querySelectorAll('i')) as HTMLElement[];
            dots.forEach((dot) => {
              const p = Math.random();
              let x = 0, y = 0;
              if (p < 0.25) { x = Math.random() * w; y = 0; }
              else if (p < 0.5) { x = w; y = Math.random() * h; }
              else if (p < 0.75) { x = Math.random() * w; y = h; }
              else { x = 0; y = Math.random() * h; }
              dot.style.left = `${x}px`;
              dot.style.top = `${y}px`;
              dot.classList.remove('show');
              setTimeout(() => dot.classList.add('show'), Math.random() * 250);
              setTimeout(() => dot.classList.remove('show'), 1200 + Math.random() * 600);
            });
          };
          (wrap as any)._interval = setInterval(cycle, 1500);
          cycle();
        }
      } else {
        if (wrap && (wrap as any)._interval) { clearInterval((wrap as any)._interval); (wrap as any)._interval = null; }
        wrap?.remove();
      }
    }

    function updateProgress(form: HTMLFormElement) {
      const btn = getBtn(form) as HTMLButtonElement | null;
      if (!btn) return;
      btn.classList.add('btn-ink');
      const fields = Array.from(form.querySelectorAll('input[type="text"], input[type="email"], textarea')) as (HTMLInputElement | HTMLTextAreaElement)[];
      const total = fields.length;
      const filled = fields.reduce((acc, el) => acc + (el.value.trim().length > 0 ? 1 : 0), 0);
      const pct = Math.round((filled / Math.max(1, total)) * 100);
      (btn.style as any).setProperty('--p', String(pct));
      const ready = pct >= 100;
      if (ready) btn.setAttribute('data-ready', 'true'); else btn.removeAttribute('data-ready');
      if (btn instanceof HTMLButtonElement) applySparkles(btn, ready);
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

      const sync = () => updateProgress(form);
      form.addEventListener('input', sync);
      sync();

      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const nameEl = document.getElementById('name');
        const emailEl = document.getElementById('email');
        const phoneEl = document.getElementById('phone');
        const messageEl = document.getElementById('message');

        const payload = {
          name: (nameEl as HTMLInputElement | null)?.value?.trim() ?? '',
          email: (emailEl as HTMLInputElement | null)?.value?.trim() ?? '',
          phone: (phoneEl as HTMLInputElement | null)?.value?.trim() ?? '',
          message: (messageEl as HTMLTextAreaElement | null)?.value?.trim() ?? '',
          meta: { page: location.href, userAgent: navigator.userAgent, form: 'contact' },
        };

        const fieldsMissing: HTMLElement[] = [];
        if (!payload.name) fieldsMissing.push(nameEl as HTMLElement);
        if (!payload.email) fieldsMissing.push(emailEl as HTMLElement);
        if (!payload.phone) fieldsMissing.push(phoneEl as HTMLElement);
        if (!payload.message) fieldsMissing.push(messageEl as HTMLElement);

        const allEmpty = fieldsMissing.length === 4;
        const ready = fieldsMissing.length === 0;

        const btn = getBtn(form) as HTMLButtonElement | null;
        const old = btn ? btn.textContent : null;

        if (!ready) {
          if (allEmpty) {
            ensureTalkBubble(form, 'Parece que aún no has escrito nada. Cuéntanos un poco para poder ayudarte.');
          }
          fieldsMissing.forEach((el) => nudge(el));
          return; // do not POST until 100%
        }

        if (btn) { btn.disabled = true; btn.setAttribute('aria-busy', 'true'); btn.textContent = 'Enviando…'; }

        try {
          const result = await postJSON(CONTACT_ENDPOINT, payload);
          if (result.ok) {
            showNotice(notice, '¡Gracias por ponerte en contacto con nosotros! Has dado el primer paso en tu camino a alimentar tu ser espiritual. Te responderemos pronto.', 'ok');
            if (btn) { btn.textContent = 'Enviado'; }
          } else {
            if (btn) { btn.disabled = false; btn.removeAttribute('aria-busy'); btn.textContent = old || 'Enviar Mensaje'; }
          }
        } catch {
          if (btn) { btn.disabled = false; btn.removeAttribute('aria-busy'); btn.textContent = old || 'Enviar Mensaje'; }
        }
      });
    })();

    // PRAYER
    (function wirePrayer() {
      const form = $('#prayerForm') as HTMLFormElement | null;
      const notice = $('#prayerNotice');
      if (!form) return;
      form.setAttribute('novalidate', '');

      const sync = () => updateProgress(form);
      form.addEventListener('input', sync);
      sync();

      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const nameEl = document.getElementById('prayer-name');
        const messageEl = document.getElementById('prayer-request');

        const payload = {
          name: (nameEl as HTMLInputElement | null)?.value?.trim() ?? '',
          message: (messageEl as HTMLTextAreaElement | null)?.value?.trim() ?? '',
          meta: { page: location.href, userAgent: navigator.userAgent, form: 'prayer' },
        };

        const missing: HTMLElement[] = [];
        if (!payload.name) missing.push(nameEl as HTMLElement);
        if (!payload.message) missing.push(messageEl as HTMLElement);

        const allEmpty = missing.length === 2;
        const ready = missing.length === 0;

        const btn = getBtn(form) as HTMLButtonElement | null;
        const old = btn ? btn.textContent : null;

        if (!ready) {
          if (allEmpty) {
            ensureTalkBubble(form, 'Tu mensaje está vacío. Escríbenos tu petición y con gusto oraremos por ti.');
          }
          missing.forEach((el) => nudge(el));
          return; // no POST until 100%
        }

        if (btn) { btn.disabled = true; btn.setAttribute('aria-busy', 'true'); btn.textContent = 'Enviando…'; }

        try {
          const result = await postJSON(PRAYER_ENDPOINT, payload);
          if (result.ok) {
            showNotice(notice, 'Tu petición ha sido recibida. No hay nada más poderoso que la oración. No estás solo/a — estamos contigo y estaremos orando por ti.', 'ok');
            if (btn) { btn.textContent = 'Enviado'; }
          } else {
            if (btn) { btn.disabled = false; btn.removeAttribute('aria-busy'); btn.textContent = old || 'Enviar Petición'; }
          }
        } catch {
          if (btn) { btn.disabled = false; btn.removeAttribute('aria-busy'); btn.textContent = old || 'Enviar Petición'; }
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
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8 form-contact">
            <h3 className="text-2xl font-semibold mb-6 text-stone-800">
              Envíanos un Mensaje
            </h3>
            <form id="contactForm" className="space-y-4 talk-anchor" noValidate>
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
              <form id="prayerForm" className="space-y-4 talk-anchor" noValidate>
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