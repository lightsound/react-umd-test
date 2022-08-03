import { useForm, UseFormProps } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";

import { STORAGE_KEY } from "./const";

type Form = {
  name: string;
  email: string;
};

export const usePersistForm = (props?: UseFormProps<Form>) => {
  const { watch, setValue, ...rest } = useForm<Form>({
    defaultValues: { name: "", email: "" },
    ...props,
  });
  useFormPersist(STORAGE_KEY, { watch, setValue });

  return { watch, setValue, ...rest };
};
