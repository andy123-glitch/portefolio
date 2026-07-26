import { Send } from 'lucide-react';
import Block from '../components/Block';
import BlockTitle from '../components/BlockTitle';
import SubTitle from '../components/SubTitle';
import Button from '../components/Button';

export default function Contact() {
    const inputClassName =
        'p-3 rounded-md w-full border border-border bg-secondary/40 text-secondary-foreground focus-visible:ring-primary';
  return (
    <Block id="contact">
      <SubTitle>Contact</SubTitle>
      <BlockTitle>Travaillons ensemble</BlockTitle>
      <p className="text-justify text-sm text-secondary-foreground lg:text-base">
        Vous avez un projet en tête ? N'hésitez pas à me contacter pour en discuter. Je suis ouvert
        à de nouvelles opportunités et collaborations.
      </p>
      <form className="mt-4 flex flex-col gap-4" action="https://formspree.io/f/mnqvkwqk" method="POST">
        <div className="flex flex-col gap-4 lg:flex-row">
          <input
            className={inputClassName}
            type="text"
            name="name"
            placeholder="Nom"
            required
          />
          <input
            className={inputClassName}
            type="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <input
          className={inputClassName + ' block'}
          type="text"
          name="subject"
          placeholder="Sujet"
          required
        />
        <textarea
          className={inputClassName }
          name="message"
          placeholder="Message"
          required
            rows={5}
        ></textarea>
        <Button type="submit">
          Envoyer le message <Send size={16} />
        </Button>
      </form>
    </Block>
  );
}
