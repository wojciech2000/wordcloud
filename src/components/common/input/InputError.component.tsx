import React from "react";
import clsx from "clsx";

import Text from "components/common/text/Text.component";

interface IInputError {
  errorMessage?: string;
  className?: string;
}

const InputError: React.FC<IInputError> = ({ errorMessage, className }) => (
  <Text size="12" color="error" className={clsx("absolute bottom-0 left-0", className)}>
    {errorMessage}
  </Text>
);

export default InputError;
