type AuthFormProps = {
  onSubmit: () => void;
};

const useAuthFormProps = ({ onSubmit }: AuthFormProps) => {
  const onSubmitClick = () => {
    onSubmit();
  };

  return {
    onSubmitClick
  };
};

export { useAuthFormProps };
