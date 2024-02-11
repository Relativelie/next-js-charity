'use server';

import { saveContact } from './contact';
import { ContactEntity, ContactStatus, Inputs } from './models';

export async function sendContactForm(
  formData: Inputs,
  status: ContactStatus = ContactStatus.PENDING
) {
  const data = new ContactEntity(formData, status);
  if (!data.isValid) {
    throw new Error('Something went wrong. Please try again.');
  }
  saveContact(data);
}
