import { emailRegex, phoneRegex } from '@/lib/utils/regexConstants';

export interface Inputs {
  name: string;
  email: string;
  phone: string;
}

export enum ContactStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  REJECTED = 'rejected',
}

export interface StatusTable {
  id: number;
  name: ContactStatus;
}

export class ContactEntity {
  name: string;
  email: string;
  phone: string;
  status: ContactStatus;

  constructor(data: Inputs, status: ContactStatus) {
    this.name = data.name;
    this.email = data.email;
    this.phone = data.phone;
    this.status = status;
  }

  get isValid() {
    return (
      this.name &&
      this.email &&
      this.phone &&
      this.validateEmail(this.email) &&
      this.validatePhone(this.phone)
    );
  }

  get values() {
    return {
      name: this.name,
      email: this.email,
      phone: this.phone,
      status: this.status,
    };
  }

  validateEmail(email: string) {
    return emailRegex.test(String(email).toLowerCase());
  }

  validatePhone(phone: string) {
    return phoneRegex.test(String(phone).toLowerCase());
  }
}
