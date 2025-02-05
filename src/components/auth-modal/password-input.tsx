import React, { useState } from 'react';
import {
  Input, InputGroup, InputRightElement, IconButton,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

interface PasswordInputProps {
  setPassword: (password: string) => void;
  onEnter: () => void;
}

function PasswordInput({ setPassword, onEnter }: PasswordInputProps) {
  const [show, setShow] = useState<boolean>(false);
  const handleClick = () => setShow((prev) => !prev);

  return (
    <InputGroup width="70%">
      <Input
        marginTop="10px"
        placeholder="Password"
        size="sm"
        type={show ? 'text' : 'password'}
        onChange={(e) => setPassword(e.target.value)}
        onKeyDown={onEnter}
      />
      <InputRightElement
        marginTop="5.5px"
        // @ts-expect-error: size is an unrecognized chakra attribute
        size="sm"
      >
        <IconButton
          aria-label="Toggle show password"
          colorScheme="gray"
          h="80%"
          icon={show ? <ViewOffIcon /> : <ViewIcon />}
          size="sm"
          variant="link"
          onClick={handleClick}
        />
      </InputRightElement>
    </InputGroup>

  );
}

export default PasswordInput;
