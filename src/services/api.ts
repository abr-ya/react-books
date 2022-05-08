export const getAllBooks = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_SERVER}/books`);
  if (!response.ok) throw new Error("Something went wrong.");
  
  return response.json();
};

export const removeBook = async (id: string) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_SERVER}/books/${id}`,
    { method: "DELETE" }
  );

  // response.json().message
  if (!response.ok) throw new Error("Ошибка удаления книги!");

  return true;
};

export const getBook = async ({ queryKey }: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_key, { id }] = queryKey;
  const response = await fetch(`${process.env.REACT_APP_API_SERVER}/books/${id}`);

  // response.json().message
  if (!response.ok) throw new Error("Ошибка получения книги!");

  return response.json();
};

export const updateBook = async ({ id, ...data }: any) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_SERVER}/books/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  // response.json().message
  if (!response.ok) throw new Error("Ошибка обновления книги!");

  return response.json();
};

export const createBook = async ({ ...data }) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_SERVER}/books/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  // response.json().message
  if (!response.ok) throw new Error("Ошибка создания книги!");

  return response.json();
};