/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { Usuarios } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function UsuariosCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    nombre: "",
    apellidoM: "",
    apellidoP: "",
    correo: "",
    rol: "",
  };
  const [nombre, setNombre] = React.useState(initialValues.nombre);
  const [apellidoM, setApellidoM] = React.useState(initialValues.apellidoM);
  const [apellidoP, setApellidoP] = React.useState(initialValues.apellidoP);
  const [correo, setCorreo] = React.useState(initialValues.correo);
  const [rol, setRol] = React.useState(initialValues.rol);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setNombre(initialValues.nombre);
    setApellidoM(initialValues.apellidoM);
    setApellidoP(initialValues.apellidoP);
    setCorreo(initialValues.correo);
    setRol(initialValues.rol);
    setErrors({});
  };
  const validations = {
    nombre: [],
    apellidoM: [],
    apellidoP: [],
    correo: [],
    rol: [],
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
          nombre,
          apellidoM,
          apellidoP,
          correo,
          rol,
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
          await DataStore.save(new Usuarios(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "UsuariosCreateForm")}
      {...rest}
    >
      <TextField
        label="Nombre"
        isRequired={false}
        isReadOnly={false}
        value={nombre}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre: value,
              apellidoM,
              apellidoP,
              correo,
              rol,
            };
            const result = onChange(modelFields);
            value = result?.nombre ?? value;
          }
          if (errors.nombre?.hasError) {
            runValidationTasks("nombre", value);
          }
          setNombre(value);
        }}
        onBlur={() => runValidationTasks("nombre", nombre)}
        errorMessage={errors.nombre?.errorMessage}
        hasError={errors.nombre?.hasError}
        {...getOverrideProps(overrides, "nombre")}
      ></TextField>
      <TextField
        label="Apellido m"
        isRequired={false}
        isReadOnly={false}
        value={apellidoM}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              apellidoM: value,
              apellidoP,
              correo,
              rol,
            };
            const result = onChange(modelFields);
            value = result?.apellidoM ?? value;
          }
          if (errors.apellidoM?.hasError) {
            runValidationTasks("apellidoM", value);
          }
          setApellidoM(value);
        }}
        onBlur={() => runValidationTasks("apellidoM", apellidoM)}
        errorMessage={errors.apellidoM?.errorMessage}
        hasError={errors.apellidoM?.hasError}
        {...getOverrideProps(overrides, "apellidoM")}
      ></TextField>
      <TextField
        label="Apellido p"
        isRequired={false}
        isReadOnly={false}
        value={apellidoP}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              apellidoM,
              apellidoP: value,
              correo,
              rol,
            };
            const result = onChange(modelFields);
            value = result?.apellidoP ?? value;
          }
          if (errors.apellidoP?.hasError) {
            runValidationTasks("apellidoP", value);
          }
          setApellidoP(value);
        }}
        onBlur={() => runValidationTasks("apellidoP", apellidoP)}
        errorMessage={errors.apellidoP?.errorMessage}
        hasError={errors.apellidoP?.hasError}
        {...getOverrideProps(overrides, "apellidoP")}
      ></TextField>
      <TextField
        label="Correo"
        isRequired={false}
        isReadOnly={false}
        value={correo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              apellidoM,
              apellidoP,
              correo: value,
              rol,
            };
            const result = onChange(modelFields);
            value = result?.correo ?? value;
          }
          if (errors.correo?.hasError) {
            runValidationTasks("correo", value);
          }
          setCorreo(value);
        }}
        onBlur={() => runValidationTasks("correo", correo)}
        errorMessage={errors.correo?.errorMessage}
        hasError={errors.correo?.hasError}
        {...getOverrideProps(overrides, "correo")}
      ></TextField>
      <TextField
        label="Rol"
        isRequired={false}
        isReadOnly={false}
        value={rol}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              apellidoM,
              apellidoP,
              correo,
              rol: value,
            };
            const result = onChange(modelFields);
            value = result?.rol ?? value;
          }
          if (errors.rol?.hasError) {
            runValidationTasks("rol", value);
          }
          setRol(value);
        }}
        onBlur={() => runValidationTasks("rol", rol)}
        errorMessage={errors.rol?.errorMessage}
        hasError={errors.rol?.hasError}
        {...getOverrideProps(overrides, "rol")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
