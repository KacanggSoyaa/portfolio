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

export interface InquiryDetails {
  name: string;
  email: string;
  service: string;
  budget: string;
  message: string;
}

export const buildInquiryLinks = (details: InquiryDetails) => ({
  whatsapp: whatsappUrl(
    `Hi Danis! My name is ${details.name || 'there'}. I would like to inquire about ${details.service}. Details: ${details.message || 'Looking for a project consultation.'}`
  ),
  email: emailUrl(
    `Project Inquiry: ${details.service} (${details.name})`,
    `Hi Danis,\n\nName: ${details.name}\nEmail: ${details.email}\nService: ${details.service}\nBudget: ${details.budget}\n\nProject Details:\n${details.message}\n`
  ),
});
