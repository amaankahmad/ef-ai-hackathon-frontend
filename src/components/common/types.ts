export interface validateProps {
  name: string;
  email: string;
  whatDoYouWantToLearn: string;
  whatOtherToLearn: string;
  errorMessage: string;
  exists: boolean;
}

export interface Roadmap {
  link: string;
  personal: boolean;
  rating?: number;
  title: string;
  topic_names: string;
  description: string;
}