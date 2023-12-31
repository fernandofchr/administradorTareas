/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UsuariosCreateFormInputValues = {
    nombre?: string;
    apellidoM?: string;
    apellidoP?: string;
    correo?: string;
    rol?: string;
};
export declare type UsuariosCreateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    apellidoM?: ValidationFunction<string>;
    apellidoP?: ValidationFunction<string>;
    correo?: ValidationFunction<string>;
    rol?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UsuariosCreateFormOverridesProps = {
    UsuariosCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    apellidoM?: PrimitiveOverrideProps<TextFieldProps>;
    apellidoP?: PrimitiveOverrideProps<TextFieldProps>;
    correo?: PrimitiveOverrideProps<TextFieldProps>;
    rol?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UsuariosCreateFormProps = React.PropsWithChildren<{
    overrides?: UsuariosCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UsuariosCreateFormInputValues) => UsuariosCreateFormInputValues;
    onSuccess?: (fields: UsuariosCreateFormInputValues) => void;
    onError?: (fields: UsuariosCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UsuariosCreateFormInputValues) => UsuariosCreateFormInputValues;
    onValidate?: UsuariosCreateFormValidationValues;
} & React.CSSProperties>;
export default function UsuariosCreateForm(props: UsuariosCreateFormProps): React.ReactElement;
