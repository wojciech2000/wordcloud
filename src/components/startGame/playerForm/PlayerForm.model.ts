import { SchemaOf, string as YupString, object as YupObject } from "yup";

export interface IPlayerForm {
  nick: string;
}

export type IPlayerFormField = keyof IPlayerForm;
export type IPlayerFormFieldValue<T extends IPlayerFormField> = IPlayerForm[T];

export const playerFormSchemaShape: {
  [property in IPlayerFormField]: SchemaOf<IPlayerFormFieldValue<property>>;
} = {
  nick: YupString().required().min(3),
};

export const playerFormSchema = YupObject().shape(playerFormSchemaShape);
