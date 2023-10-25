// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { TareaSecundaria, TareaPrincipal, Usuarios } = initSchema(schema);

export {
  TareaSecundaria,
  TareaPrincipal,
  Usuarios
};