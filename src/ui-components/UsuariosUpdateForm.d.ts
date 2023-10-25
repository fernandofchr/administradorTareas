/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Usuarios } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UsuariosUpdateFormInputValues = {
    nombre?: string;
    apellidoM?: string;
    apellidoP?: string;
    role?: string;
};
export declare type UsuariosUpdateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    apellidoM?: ValidationFunction<string>;
    apellidoP?: ValidationFunction<string>;
    role?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UsuariosUpdateFormOverridesProps = {
    UsuariosUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    apellidoM?: PrimitiveOverrideProps<TextFieldProps>;
    apellidoP?: PrimitiveOverrideProps<TextFieldProps>;
    role?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UsuariosUpdateFormProps = React.PropsWithChildren<{
    overrides?: UsuariosUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    usuarios?: Usuarios;
    onSubmit?: (fields: UsuariosUpdateFormInputValues) => UsuariosUpdateFormInputValues;
    onSuccess?: (fields: UsuariosUpdateFormInputValues) => void;
    onError?: (fields: UsuariosUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UsuariosUpdateFormInputValues) => UsuariosUpdateFormInputValues;
    onValidate?: UsuariosUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UsuariosUpdateForm(props: UsuariosUpdateFormProps): React.ReactElement;
