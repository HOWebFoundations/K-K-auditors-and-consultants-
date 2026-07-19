import type { Field } from 'payload';

/** Turn a title into a URL-safe slug. */
export function slugify(input: string | undefined | null): string {
  return (input || '')
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * A stable, non-localized slug used for the public URL of a record.
 * URLs are shared across locales (the site uses one slug per record), so this
 * field is intentionally NOT localized. Auto-derives from `from` when blank.
 */
export const slugField = (from = 'title'): Field => ({
  name: 'slug',
  type: 'text',
  required: true,
  unique: true,
  index: true,
  admin: {
    position: 'sidebar',
    description: 'URL segment. Auto-filled from the title — edit only if you must.',
  },
  hooks: {
    beforeValidate: [
      ({ value, data }) => value || slugify((data as Record<string, unknown>)?.[from] as string),
    ],
  },
});

/** A repeatable list of plain strings, stored as an array of { value } rows. */
export const stringList = (
  name: string,
  opts: { label?: string; localized?: boolean; description?: string } = {},
): Field => ({
  name,
  type: 'array',
  label: opts.label,
  localized: opts.localized ?? true,
  admin: { description: opts.description },
  fields: [{ name: 'value', type: 'textarea', required: true }],
});

/** A localized rich-text-ish paragraph list (used for intro/body copy). */
export const paragraphs = (name: string, label?: string): Field =>
  stringList(name, { label: label ?? name, localized: true });
