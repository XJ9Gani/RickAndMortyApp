import { SearchInput, FormContainer } from "../styles/Input";
import useStore from "../store";
import { useTheme } from "../use-hook";
export default function SearchForm({ title }) {
  const { setSearchQuery, theme } = useStore();

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <FormContainer onSubmit={handleSubmit}>
      <SearchInput placeholder={title} state={theme} onChange={handleChange} />
    </FormContainer>
  );
}
