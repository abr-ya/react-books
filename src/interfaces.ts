export interface IBook {
  author: string;
  title: string;
  id: string;
}

export interface IBookForm {
  defaultValues: IBook;
  onFormSubmit: (data: IBook) => void;
  isLoading: boolean;
}
