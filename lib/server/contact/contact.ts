import db from '@/lib/server/db';
import { ContactEntity, StatusTable } from './models';

export function saveContact(contact: ContactEntity) {
  const status = getStatusByName(contact.status);

  return db
    .prepare(
      `INSERT INTO contacts
      (name, email, phone, status) 
    VALUES (
        @name, 
        @email, 
        @phone,
        @status
    )
    `
    )
    .run({ ...contact.values, status: status.id });
}

export function getStatusByName(name: string) {
  return db
    .prepare(`SELECT * FROM statuses WHERE name = ?`)
    .get(name) as StatusTable;
}
