import { personalInfo } from '../data/portfolio';

export const whatsappNumber = personalInfo.whatsapp.replace(/\D/g, '');

export const whatsappUrl = (message?: string) =>
  `https://wa.me/${whatsappNumber}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

export const emailUrl = (subject?: string, body?: string) => {
  const params = new URLSearchParams();
  if (subject) params.set('subject', subject);
  if (body) params.set('body', body);
  const query = params.toString();
  return `mailto:${personalInfo.email}${query ? `?${query}` : ''}`;
};
