export type Sale = {
  id: number;
  description: string;
  country: string;
  quantity: number;
  date: Date;
  unitPrice: number;
  username: string;
};

export type Column = {
  name: string;
  label: string;
  type: 'number' | 'date' | 'text';
};
