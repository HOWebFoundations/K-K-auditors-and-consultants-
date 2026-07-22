import type { CollectionConfig } from 'payload';

/**
 * Staff accounts for the dashboard. Auth is enabled, so this is also the login
 * collection. Role gates everything else (see payload/access.ts).
 */
export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'role'],
    group: 'Administration',
    description: 'Login accounts. Editors manage content; only HOWF (admin) manages users.',
  },
  access: {
    // Both roles may open the admin panel.
    admin: ({ req }) => Boolean(req.user),
    read: ({ req }) => Boolean(req.user),
    create: ({ req }) => req.user?.role === 'admin',
    update: ({ req, id }) => req.user?.role === 'admin' || req.user?.id === id,
    delete: ({ req }) => req.user?.role === 'admin',
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    {
      name: 'role',
      type: 'select',
      required: true,
      defaultValue: 'editor',
      options: [
        { label: 'Administrator (HOWF)', value: 'admin' },
        { label: 'Editor (K&K partner)', value: 'editor' },
      ],
      admin: {
        description: 'Editors manage all content and media. Only administrators manage users.',
      },
      // Only an admin may change roles (prevents an editor self-promoting).
      access: { update: ({ req }) => req.user?.role === 'admin' },
    },
  ],
};
