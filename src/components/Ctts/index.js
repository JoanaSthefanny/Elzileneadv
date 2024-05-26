import React from 'react';
import './Ctts.css';

const contatosData = [
  { type: 'WhatsApp', link: 'https://api.whatsapp.com/send?1=pt_BR&phone=5588994643503', image: '/img/Vetors/wpp.svg', text: '(88) 9 9464-3503' },
  { type: 'Instagram', link: 'https://www.instagram.com/adv.elzilenecosta/', image: '/img/Vetors/instagram.svg', text: '@adv.elzilenecosta' },
  { type: 'Email', link: 'mailto:elzileneadvogada@gmail.com', image: '/img/Vetors/email.svg', text: 'elzileneadvogada@gmail.com' }
];

const Ctts = () => {
  return (
    <div className="ctts">
      <h2>Contatos</h2>
      <div className="contatos">
        {contatosData.map((contato, index) => (
          <div key={index} className="contato">
            <img src={contato.image} alt={contato.type} />
            <a href={contato.link} className='Link-ctts' target='_blank' rel='noopener noreferrer'>{contato.text}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ctts;