/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { TareaPrincipal } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function TareaPrincipalUpdateForm(props) {
  const {
    id: idProp,
    tareaPrincipal: tareaPrincipalModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    titulo: "",
    descripcion: "",
    fechaVencimiento: "",
  };
  const [titulo, setTitulo] = React.useState(initialValues.titulo);
  const [descripcion, setDescripcion] = React.useState(
    initialValues.descripcion
  );
  const [fechaVencimiento, setFechaVencimiento] = React.useState(
    initialValues.fechaVencimiento
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = tareaPrincipalRecord
      ? { ...initialValues, ...tareaPrincipalRecord }
      : initialValues;
    setTitulo(cleanValues.titulo);
    setDescripcion(cleanValues.descripcion);
    setFechaVencimiento(cleanValues.fechaVencimiento);
    setErrors({});
  };
  const [tareaPrincipalRecord, setTareaPrincipalRecord] = React.useState(
    tareaPrincipalModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(TareaPrincipal, idProp)
        : tareaPrincipalModelProp;
      setTareaPrincipalRecord(record);
    };
    queryData();
  }, [idProp, tareaPrincipalModelProp]);
  React.useEffect(resetStateValues, [tareaPrincipalRecord]);
  const validations = {
    titulo: [],
    descripcion: [],
    fechaVencimiento: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          titulo,
          descripcion,
          fechaVencimiento,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(
            TareaPrincipal.copyOf(tareaPrincipalRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "TareaPrincipalUpdateForm")}
      {...rest}
    >
      <TextField
        label="Titulo"
        isRequired={false}
        isReadOnly={false}
        value={titulo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              titulo: value,
              descripcion,
              fechaVencimiento,
            };
            const result = onChange(modelFields);
            value = result?.titulo ?? value;
          }
          if (errors.titulo?.hasError) {
            runValidationTasks("titulo", value);
          }
          setTitulo(value);
        }}
        onBlur={() => runValidationTasks("titulo", titulo)}
        errorMessage={errors.titulo?.errorMessage}
        hasError={errors.titulo?.hasError}
        {...getOverrideProps(overrides, "titulo")}
      ></TextField>
      <TextField
        label="Descripcion"
        isRequired={false}
        isReadOnly={false}
        value={descripcion}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              titulo,
              descripcion: value,
              fechaVencimiento,
            };
            const result = onChange(modelFields);
            value = result?.descripcion ?? value;
          }
          if (errors.descripcion?.hasError) {
            runValidationTasks("descripcion", value);
          }
          setDescripcion(value);
        }}
        onBlur={() => runValidationTasks("descripcion", descripcion)}
        errorMessage={errors.descripcion?.errorMessage}
        hasError={errors.descripcion?.hasError}
        {...getOverrideProps(overrides, "descripcion")}
      ></TextField>
      <TextField
        label="Fecha vencimiento"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={fechaVencimiento}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              titulo,
              descripcion,
              fechaVencimiento: value,
            };
            const result = onChange(modelFields);
            value = result?.fechaVencimiento ?? value;
          }
          if (errors.fechaVencimiento?.hasError) {
            runValidationTasks("fechaVencimiento", value);
          }
          setFechaVencimiento(value);
        }}
        onBlur={() => runValidationTasks("fechaVencimiento", fechaVencimiento)}
        errorMessage={errors.fechaVencimiento?.errorMessage}
        hasError={errors.fechaVencimiento?.hasError}
        {...getOverrideProps(overrides, "fechaVencimiento")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || tareaPrincipalModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || tareaPrincipalModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
