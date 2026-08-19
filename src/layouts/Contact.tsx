import emailjs from '@emailjs/browser';
import { Loader, Send } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import Block from '../components/Block';
import BlockTitle from '../components/BlockTitle';
import Button from '../components/Button';
import SubTitle from '../components/SubTitle';

type FormStatus = 'idle' | 'success' | 'error';

const emailJsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<FormStatus>('idle');

  const inputClassName =
    'p-3 rounded-md w-full border border-border bg-secondary/40 text-secondary-foreground focus-visible:ring-primary';

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    if (formData.get('website')) {
      setStatus('success');
      form.reset();
      return;
    }

    if (!emailJsConfig.serviceId || !emailJsConfig.templateId || !emailJsConfig.publicKey) {
      setStatus('error');
      return;
    }

    setSending(true);
    setStatus('idle');

    try {
      await emailjs.send(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        {
          from_name: formData.get('name'),
          reply_to: formData.get('email'),
          subject: formData.get('subject'),
          message: formData.get('message'),
        },
        {
          publicKey: emailJsConfig.publicKey,
          limitRate: { id: 'portfolio-contact-form', throttle: 30_000 },
        }
      );

      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    } finally {
      setSending(false);
    }
  }

  return (
    <Block id="contact">
      <SubTitle>Contact</SubTitle>
      <BlockTitle>Travaillons ensemble</BlockTitle>
      <p className="text-sm text-secondary-foreground lg:text-base">
        Vous avez un projet en tête ? N'hésitez pas à me contacter pour en discuter. Je suis ouvert
        à de nouvelles opportunités et collaborations.
      </p>

      <form className="flex gap-4 flex-col mt-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 lg:flex-row">
          <input
            className={inputClassName}
            type="text"
            name="name"
            placeholder="Nom"
            required
            minLength={2}
            maxLength={100}
            autoComplete="name"
            aria-label="Votre nom"
          />
          <input
            className={inputClassName}
            type="email"
            name="email"
            placeholder="E-mail"
            required
            maxLength={254}
            autoComplete="email"
            aria-label="Votre adresse e-mail"
          />
        </div>

        <input
          className={inputClassName}
          type="text"
          name="subject"
          placeholder="Sujet"
          required
          minLength={3}
          maxLength={150}
          aria-label="Sujet du message"
        />

        <textarea
          className={inputClassName}
          name="message"
          placeholder="Message"
          required
          minLength={10}
          maxLength={5_000}
          rows={5}
          aria-label="Votre message"
        />

        <input
          className="sr-only"
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <Button
          type="submit"
          variant={sending ? 'secondary' : 'primary'}
          disabled={sending}
          className={sending ? 'cursor-wait' : 'cursor-pointer'}
        >
          {sending ? "Message en cours d'envoi..." : 'Envoyer le message'}
          {sending ? <Loader size={16} className="animate-spin" /> : <Send size={16} />}
        </Button>

        <p className="min-h-6 text-center text-sm" aria-live="polite">
          {status === 'success' && (
            <span className="text-primary">Le message a bien été envoyé !</span>
          )}
          {status === 'error' && (
            <span className="text-red-400">
              L’envoi a échoué. Vérifiez votre connexion et réessayez plus tard.
            </span>
          )}
        </p>
      </form>
    </Block>
  );
}
