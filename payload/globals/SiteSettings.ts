import type { GlobalConfig } from 'payload';
import { isEditor } from '../access';

/**
 * Site-wide identity, contact details (NAP) and footer copy. This is what the
 * partners edit to change the address, phones, email or the footer disclaimer.
 * NAP fields are single-value (one office, one set of numbers); translatable
 * copy is localized.
 */
export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site settings',
  admin: { group: 'Site' },
  access: { read: () => true, update: isEditor },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Identity',
          fields: [
            { name: 'name', type: 'text' },
            { name: 'legalName', type: 'text' },
            { name: 'tagline', type: 'text', localized: true },
            { name: 'description', type: 'textarea', localized: true },
          ],
        },
        {
          label: 'Contact',
          fields: [
            { name: 'addressLine1', type: 'text' },
            { name: 'addressLine2', type: 'text' },
            { name: 'city', type: 'text' },
            { name: 'country', type: 'text' },
            { name: 'poBox', type: 'text' },
            { name: 'phone', type: 'text' },
            { name: 'phoneSecondary', type: 'text' },
            { name: 'mobile', type: 'text' },
            { name: 'email', type: 'email' },
            { name: 'hours', type: 'text', localized: true },
            { name: 'mapUrl', type: 'text' },
            { name: 'facebook', type: 'text' },
            { name: 'linkedin', type: 'text' },
          ],
        },
        {
          label: 'Footer',
          fields: [
            { name: 'footerDesc', type: 'textarea', localized: true },
            { name: 'footerDisclaimer', type: 'textarea', localized: true },
            { name: 'footerRights', type: 'text', localized: true },
            { name: 'builtBy', type: 'text', localized: true, admin: { description: 'e.g. "by" — the credit connector.' } },
          ],
        },
      ],
    },
  ],
};
