import { useEffect, useState } from 'react';
import {
  Checkbox,
  SearchBar,
  SelectInput,
} from './components/Miscellaneous/13.SimplifyTheCallbackProps';
import { Button } from './components/Miscellaneous/11.Clsx-Comprehensive/Button/Button';

function App() {
  const [searchText, setSearchText] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [isAgreeToTerms, setIsAgreeToTerms] = useState(false);

  const handleSearch = (text: string) => {
    setSearchText(text);
  };

  useEffect(() => {
    console.log('fetch the data');
    // Call the API and fetch the data
  }, [searchText]);

  useEffect(() => {
    console.log(selectedOption);
  }, [selectedOption]);

  useEffect(() => {
    console.log(isAgreeToTerms);
  }, [isAgreeToTerms]);

  return (
    <div>
      {/* <ParentComponent /> */}
      {/* <ParentComponent /> */}
      {/* <ParentComponent /> */}
      {/* <SearchBar onChange={handleSearch} />
      <SelectInput onChange={setSelectedOption} />
      <Checkbox onToggle={setIsAgreeToTerms} /> */}
      <Button color='secondary' disabled>
        Delete
      </Button>
    </div>
  );
}

export default App;
