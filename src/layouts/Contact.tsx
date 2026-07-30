import { Loader, Send } from 'lucide-react';
import Block from '../components/Block';
import BlockTitle from '../components/BlockTitle';
import SubTitle from '../components/SubTitle';
import Button from '../components/Button';
import { useState } from 'react';

export default function Contact() {
  const [sending, setSending] = useState(false); //
  const [isSent, setIsSent] = useState(false);

  const inputClassName =
    'p-3 rounded-md w-full border border-border bg-secondary/40 text-secondary-foreground focus-visible:ring-primary';

  const handleSubmit = () => {
    setSending(true);
    setIsSent(false);

    setTimeout(() => {
      setSending(false);
      setIsSent(true);

      setTimeout(() => setIsSent(false), 3000);
    }, 1000);
  };

  return (
    <Block id="contact">
      <SubTitle>Contact</SubTitle>
      <BlockTitle>Travaillons ensemble</BlockTitle>
      <p className="text-sm text-secondary-foreground lg:text-base">
        Vous avez un projet en tête ? N'hésitez pas à me contacter pour en discuter. Je suis ouvert
        à de nouvelles opportunités et collaborations.
      </p>

      <div className="flex gap-4 flex-col mt-4">
        <div className="flex flex-col gap-4 lg:flex-row">
          <input
            className={inputClassName}
            type="text"
            name="name"
            placeholder="Nom"
            required
            aria-label="Votre nom"
          />
          <input
            className={inputClassName}
            type="email"
            name="email"
            placeholder="E-mail"
            required
            aria-label="Votre adresse e-mail"
          />
        </div>

        <input
          className={inputClassName + ' block'}
          type="text"
          name="subject"
          placeholder="Sujet"
          required
          aria-label="Sujet du message"
        />

        <textarea
          className={inputClassName}
          name="message"
          placeholder="Message"
          required
          rows={5}
          aria-label="Votre message"
        ></textarea>

        <Button
          type="submit"
          onClick={handleSubmit}
          variant={sending ? 'secondary' : 'primary'}
          disabled={sending}
          className={`${sending ? 'cursor-wait' : 'cursor-pointer'}`}
        >
          {sending ? "Message en cours d'envoi..." : 'Envoyer le message'}
          {sending ? <Loader size={16} className="animate-spin" /> : <Send size={16} />}
        </Button>

        <p
          className={` mb-3 text-center text-primary transition-all duration-500 ease-in-out ${
            isSent
              ? 'translate-y-0 opacity-100 z-10'
              : '-translate-y-10 opacity-0 -z-10 pointer-events-none'
          }`}
        >
          Le message a bien été envoyé !
        </p>
      </div>
    </Block>
  );
}
