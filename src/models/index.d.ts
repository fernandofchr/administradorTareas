import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerTareaSecundaria = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TareaSecundaria, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly estatus?: string | null;
  readonly descripcion?: string | null;
  readonly tareaprincipalID: string;
  readonly usuariosID: string;
  readonly fechaVencimiento?: string | null;
  readonly comentarios?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTareaSecundaria = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TareaSecundaria, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly estatus?: string | null;
  readonly descripcion?: string | null;
  readonly tareaprincipalID: string;
  readonly usuariosID: string;
  readonly fechaVencimiento?: string | null;
  readonly comentarios?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TareaSecundaria = LazyLoading extends LazyLoadingDisabled ? EagerTareaSecundaria : LazyTareaSecundaria

export declare const TareaSecundaria: (new (init: ModelInit<TareaSecundaria>) => TareaSecundaria) & {
  copyOf(source: TareaSecundaria, mutator: (draft: MutableModel<TareaSecundaria>) => MutableModel<TareaSecundaria> | void): TareaSecundaria;
}

type EagerTareaPrincipal = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TareaPrincipal, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly titulo?: string | null;
  readonly descripcion?: string | null;
  readonly fechaVencimiento?: string | null;
  readonly TareaSecundarias?: (TareaSecundaria | null)[] | null;
  readonly responsable?: Usuarios | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly tareaPrincipalResponsableId?: string | null;
}

type LazyTareaPrincipal = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TareaPrincipal, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly titulo?: string | null;
  readonly descripcion?: string | null;
  readonly fechaVencimiento?: string | null;
  readonly TareaSecundarias: AsyncCollection<TareaSecundaria>;
  readonly responsable: AsyncItem<Usuarios | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly tareaPrincipalResponsableId?: string | null;
}

export declare type TareaPrincipal = LazyLoading extends LazyLoadingDisabled ? EagerTareaPrincipal : LazyTareaPrincipal

export declare const TareaPrincipal: (new (init: ModelInit<TareaPrincipal>) => TareaPrincipal) & {
  copyOf(source: TareaPrincipal, mutator: (draft: MutableModel<TareaPrincipal>) => MutableModel<TareaPrincipal> | void): TareaPrincipal;
}

type EagerUsuarios = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Usuarios, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre?: string | null;
  readonly apellidoM?: string | null;
  readonly apellidoP?: string | null;
  readonly correo?: string | null;
  readonly rol?: string | null;
  readonly TareaSecundarias?: (TareaSecundaria | null)[] | null;
  readonly TareaPrincipal?: TareaPrincipal | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly usuariosTareaPrincipalId?: string | null;
}

type LazyUsuarios = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Usuarios, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre?: string | null;
  readonly apellidoM?: string | null;
  readonly apellidoP?: string | null;
  readonly correo?: string | null;
  readonly rol?: string | null;
  readonly TareaSecundarias: AsyncCollection<TareaSecundaria>;
  readonly TareaPrincipal: AsyncItem<TareaPrincipal | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly usuariosTareaPrincipalId?: string | null;
}

export declare type Usuarios = LazyLoading extends LazyLoadingDisabled ? EagerUsuarios : LazyUsuarios

export declare const Usuarios: (new (init: ModelInit<Usuarios>) => Usuarios) & {
  copyOf(source: Usuarios, mutator: (draft: MutableModel<Usuarios>) => MutableModel<Usuarios> | void): Usuarios;
}