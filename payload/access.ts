import type { Access } from 'payload';

/**
 * Access control for the K&K content dashboard.
 *
 * Two roles (see Users collection):
 *  - admin  : HOWF. Full control — users, schema is code anyway, everything.
 *  - editor : K&K partners (Elie, Jihad). Create/edit/publish all content and
 *             media in every locale, but cannot manage users. Layout, schema,
 *             navigation structure and styles live in code, so they are out of
 *             reach by construction.
 */

export const isAdmin: Access = ({ req }) => req.user?.role === 'admin';

/** Any authenticated staff member (admin or editor). */
export const isEditor: Access = ({ req }) => Boolean(req.user);

/**
 * Public read of published content only; logged-in staff see drafts too.
 * Returns a query constraint for anonymous visitors (drafts stay hidden).
 */
export const publishedOrStaff: Access = ({ req }) => {
  if (req.user) return true;
  return { _status: { equals: 'published' } };
};
