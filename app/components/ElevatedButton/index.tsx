// make an elevetaed button component for chat in my main page

import React from "react";
import { WrapperElevatedBUtton } from "./elevated-button";

type DefinitionProperties = {
    children: React.ReactNode;
    onClick: () => void;
};

const ElevatedButton = ({ children, onClick} : DefinitionProperties) => {
  return <WrapperElevatedBUtton
            onClick={onClick}
        >
            {children}
        </WrapperElevatedBUtton>;
};


export default ElevatedButton;