class Contact {
  id: number;

  name: string;

  email: string;

  phone: string;

  constructor(id: number, name: string, email: string, phone: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
}

export default Contact;
