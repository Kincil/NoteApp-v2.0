import { useState } from 'react';

const useInput = (defaultValue = '') => {
  const [value, setValue] = useState(defaultValue);

  const handleOnChange = (event) => setValue(event.target.value);

  return [value, handleOnChange];
};

export default useInput;
