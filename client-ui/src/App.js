import { useState } from 'react'
import {ActionGroup, Button, defaultTheme, Flex, Heading, Item, Provider, TextField} from '@adobe/react-spectrum';

function App() {
  let [themeColor, setThemeColor] = useState(new Set(['light'])); // theme color, default is light
  let [input, setInput] = useState(''); // user input
  let [roman, setRoman] = useState(''); // roman numeral

  let error;
  if (isNaN(input)) {
    // show error if input is not a number
    error = 'Input must be a positive number.';
  } else if (input.length > 0 && (Number(input) <= 0 || Number(input) > 3999)) {
    // show error if input number is not wihtin the range 1-3999
    error = 'Input must be in range of 1-3999.';
  };

  const handleSubmit = async() => {
    if (error || !input || input.length === 0) {
      setRoman(''); // reset roman if input is invalid
      alert('Invalid input.'); // popup alert if input is invalid
    } else {
      const url = `/romannumeral?query=${input}`
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`); // log error if request failed
        }
        const data = await response.json();
        if (data && data.output) {
          setRoman(data.output) // update roman with success request
        };
      } catch (error) {
        console.error(error.message); // error handling
      }
    };
    setInput(''); // reset input after clicking convert button
  };

  return (
    <>
      <Provider theme={defaultTheme} colorScheme={[...themeColor][0]}>
        <Flex direction="column" gap="size-100" justifySelf="center">
          <Heading level={2}>Roman numeral converter</Heading>
          <TextField
            label="Enter a number"
            validationState={!!error ? 'invalid' : undefined}
            errorMessage={error}
            value={input}
            height="size-1000"
            onChange={setInput} />
          <Button variant="primary" width="size-3000" onPress={handleSubmit}>Convert to roman numeral</Button>
          <Heading level={3}>{`Roman numeral: ${roman}`}</Heading>
          <ActionGroup
            selectionMode="single"
            selectedKeys={themeColor}
            onSelectionChange={setThemeColor}
          >
            <Item key="light">Light mode</Item>
            <Item key="dark">Dark mode</Item>
          </ActionGroup>
        </Flex>
      </Provider>
    </>
  )
}

export default App;
