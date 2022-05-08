import { Box, Button } from "rebass/styled-components";
// @ts-ignore
import { Label, Input } from "@rebass/forms/styled-components";
import { useForm } from "react-hook-form";
import { ThreeDots as Loader } from "react-loader-spinner";
import { IBookForm } from "../interfaces";

const BookForm = ({ defaultValues, onFormSubmit, isLoading }: IBookForm) => {
  const { register, handleSubmit } = useForm({ defaultValues });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    onFormSubmit(data);
  })

  return (
    <form onSubmit={onSubmit}>
      <Box sx={{ marginBottom: 3 }}>
        <Label htmlFor="title">Title</Label>
        <Input ref={register} id="title" name="title" type="text" />
      </Box>
      <Box sx={{ marginBottom: 3 }}>
        <Label htmlFor="author">Author</Label>
        <Input ref={register} id="author" name="author" type="text" />
      </Box>
      <Button variant="primary" mr={2}>
        { isLoading ? <Loader color="#fff" height={10} /> : "Submit" }
      </Button>
    </form>
  );
};

export default BookForm;
