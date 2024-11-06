import { SearchInput, FormContainer } from "../styles/Input";
import useStore from "../store";
export default function SearchForm({ title }) {
  const { setSearchQuery } = useStore();

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <FormContainer onSubmit={handleSubmit}>
      <SearchInput placeholder={title} onChange={handleChange} />
    </FormContainer>
  );
}
