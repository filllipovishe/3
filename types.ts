
export interface Doctor {
  name: string;
  role: string;
  exp: string;
  image: string;
}

export interface PriceItem {
  label: string;
  price: string;
}

export interface PriceGroup {
  title: string;
  items: PriceItem[];
  moreCount?: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}
