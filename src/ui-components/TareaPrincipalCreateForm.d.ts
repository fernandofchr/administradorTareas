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
export declare type TareaPrincipalCreateFormInputValues = {
    titulo?: string;
    descripcion?: string;
    fechaVencimiento?: string;
};
export declare type TareaPrincipalCreateFormValidationValues = {
    titulo?: ValidationFunction<string>;
    descripcion?: ValidationFunction<string>;
    fechaVencimiento?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TareaPrincipalCreateFormOverridesProps = {
    TareaPrincipalCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    titulo?: PrimitiveOverrideProps<TextFieldProps>;
    descripcion?: PrimitiveOverrideProps<TextFieldProps>;
    fechaVencimiento?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TareaPrincipalCreateFormProps = React.PropsWithChildren<{
    overrides?: TareaPrincipalCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TareaPrincipalCreateFormInputValues) => TareaPrincipalCreateFormInputValues;
    onSuccess?: (fields: TareaPrincipalCreateFormInputValues) => void;
    onError?: (fields: TareaPrincipalCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TareaPrincipalCreateFormInputValues) => TareaPrincipalCreateFormInputValues;
    onValidate?: TareaPrincipalCreateFormValidationValues;
} & React.CSSProperties>;
export default function TareaPrincipalCreateForm(props: TareaPrincipalCreateFormProps): React.ReactElement;
