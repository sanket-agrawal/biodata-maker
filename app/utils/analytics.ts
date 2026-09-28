// Google Analytics 4 utility — tracks events for conversion optimization
// Replace GA_MEASUREMENT_ID with your actual GA4 ID in .env

type GtagEvent = {
  action: string;
  category: string;
  label?: string;
  value?: number;
};

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

// Log page views
export const pageview = (url: string) => {
  if (typeof window === 'undefined' || !GA_MEASUREMENT_ID) return;
  window.gtag('config', GA_MEASUREMENT_ID, { page_path: url });
};

// Log custom events
export const event = ({ action, category, label, value }: GtagEvent) => {
  if (typeof window === 'undefined' || !GA_MEASUREMENT_ID) return;
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Pre-built conversion events
export const trackTemplateSelect = (templateName: string, templateId: number, isFree: boolean) => {
  event({
    action: 'select_template',
    category: 'engagement',
    label: `${templateName} (ID: ${templateId}) - ${isFree ? 'Free' : 'Premium'}`,
  });
};

export const trackDownload = (format: string, templateName: string, isPaid: boolean) => {
  event({
    action: 'download_biodata',
    category: 'conversion',
    label: `${format.toUpperCase()} - ${templateName} - ${isPaid ? 'Paid' : 'Free'}`,
    value: isPaid ? 1 : 0,
  });
};

export const trackPaymentInitiated = (templateName: string, amount: number) => {
  event({
    action: 'begin_checkout',
    category: 'ecommerce',
    label: templateName,
    value: amount,
  });
};

export const trackPaymentSuccess = (templateName: string, amount: number, paymentId: string) => {
  event({
    action: 'purchase',
    category: 'ecommerce',
    label: `${templateName} | ${paymentId}`,
    value: amount,
  });
};

export const trackPaymentFailed = (templateName: string, reason: string) => {
  event({
    action: 'payment_failed',
    category: 'ecommerce',
    label: `${templateName} | ${reason}`,
  });
};

export const trackFormStep = (step: number, stepName: string) => {
  event({
    action: 'form_step',
    category: 'engagement',
    label: `Step ${step}: ${stepName}`,
    value: step,
  });
};

export const trackWhatsAppShare = (templateName: string) => {
  event({
    action: 'share_whatsapp',
    category: 'engagement',
    label: templateName,
  });
};

export const trackExitIntent = (action: 'shown' | 'claimed' | 'dismissed') => {
  event({
    action: `exit_intent_${action}`,
    category: 'engagement',
    label: action,
  });
};