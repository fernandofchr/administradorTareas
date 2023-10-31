/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { TareaPrincipal } from "../models";
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
export declare type TareaPrincipalUpdateFormInputValues = {
    titulo?: string;
    descripcion?: string;
    fechaVencimiento?: string;
};
export declare type TareaPrincipalUpdateFormValidationValues = {
    titulo?: ValidationFunction<string>;
    descripcion?: ValidationFunction<string>;
    fechaVencimiento?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TareaPrincipalUpdateFormOverridesProps = {
    TareaPrincipalUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    titulo?: PrimitiveOverrideProps<TextFieldProps>;
    descripcion?: PrimitiveOverrideProps<TextFieldProps>;
    fechaVencimiento?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TareaPrincipalUpdateFormProps = React.PropsWithChildren<{
    overrides?: TareaPrincipalUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    tareaPrincipal?: TareaPrincipal;
    onSubmit?: (fields: TareaPrincipalUpdateFormInputValues) => TareaPrincipalUpdateFormInputValues;
    onSuccess?: (fields: TareaPrincipalUpdateFormInputValues) => void;
    onError?: (fields: TareaPrincipalUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TareaPrincipalUpdateFormInputValues) => TareaPrincipalUpdateFormInputValues;
    onValidate?: TareaPrincipalUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TareaPrincipalUpdateForm(props: TareaPrincipalUpdateFormProps): React.ReactElement;
