// Single source of truth for site-wide constants.
// Used by the nav (Work With Me panel + mobile drawer) and any future component
// (Footer, About contact CTA, etc.) that needs to surface contact info.

export const siteConfig = {
  name: 'Matheu Arenivas',
  email: 'arenivasmatheu@gmail.com',
  resumeHref: '/resume.pdf', // drop resume.pdf into /public
  linkedinHref: 'https://www.linkedin.com/in/matthew-arenivas-505b47255/',
} as const