import React, { FC } from "react";
import { useForm } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";

import { MPLP, STORAGE_KEY } from "../const";

export const Form: FC = () => {
  const { register, handleSubmit, watch, setValue, formState } = useForm({
    defaultValues: {
      foo: "",
      bar: "",
    },
  });

  useFormPersist(STORAGE_KEY, {
    watch,
    setValue,
  });

  const onSubmit = (_data) => {
    if (MPLP.confirmUrl) {
      location.href = MPLP.confirmUrl;
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <label>
        foo:
        <input {...register("foo")} />
      </label>

      <label>
        bar (required):
        <input {...register("bar", { required: "必須！" })} />
        {formState.errors.bar && <span>{formState.errors.bar.message}</span>}
      </label>

      <button type="submit">送信</button>
    </form>
  );
};
