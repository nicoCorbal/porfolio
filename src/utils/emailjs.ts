import emailjs from '@emailjs/browser';

const SERVICE_ID   = import.meta.env.PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID  = import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY   = import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY;

export const initEmailJS = () => {
  emailjs.init(PUBLIC_KEY);
};

export const sendEmail = (templateParams: Record<string, unknown>) =>
  emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);