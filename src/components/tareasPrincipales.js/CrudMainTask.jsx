import React,{useEffect, useState} from 'react'
import { DataStore } from 'aws-amplify';
import { TareaPrincipal, TareaSecundaria, Usuarios } from '../../models';


    //Metodo conuslta: 
    export const listTareas = async ()=>{
      const models = await DataStore.query(TareaPrincipal);
      console.log(models);
    }
  //Metodo Creador
   export const nuevaTarea = async (tarea, user) => {
    try { 
      const newTask = await DataStore.save(new TareaPrincipal({
		"titulo": tarea.titulo,
		"descripcion": tarea.descripcion,
		"fechaVencimiento": tarea.fechaVencimiento,
    "tareaPrincipalResponsableId":user[0].id,
		"TareaSecundarias": []
	    }))
    }catch(error){
    console.log(error);
    }
  }
    //Metodo Actualizador
 export const actualizarTarea = async (campo, valor) => {
  try {
    const original = await DataStore.query(TareaPrincipal, 12123);
    await DataStore.save(
      TareaPrincipal.copyOf(original, (updated) => {
        updated[campo] = valor;
      })
    );
  } catch (error) {
  }
}
  //Metodo que elimina
  export const eliminarTarea= async (tareaID)=>{
    const modelToDelete = await DataStore.query(TareaPrincipal, tareaID);
    DataStore.delete(modelToDelete);
  }


  export const nuevaTareaSecundaria = async ({tarea, tareaid,  usuarios}) => {
    try { 
      const newTask = await DataStore.save(
        new TareaSecundaria({
          "estatus": tarea.estatus,
          "descripcion": tarea.descripcion,
          "tareaprincipalID": tareaid,
          "usuariosID": usuarios.id,
          "fechaVencimiento": tarea.fechaVencimiento,
          "comentarios": tarea.comentarios
        })
    );
    }catch(error){
    console.log(error);
    }
  }



  //Actualizar Tareas Secundarias

  export const actualizarTareaSecundaria = async (campo, valor) => {
    try {
      const original = await DataStore.query(TareaSecundaria, 12123);
      await DataStore.save(
        TareaSecundaria.copyOf(original, (updated) => {
          updated[campo] = valor;
        })
      );
    } catch (error) {
    }
  }

//Nuevo usuario
  export const nuevoUsuario = async (usuario) => {
    try { 
      const newTask = await DataStore.save(new Usuarios({
        nombre: usuario.nombre,
        apellidoM: usuario.apellidoM,
        apellidoP:usuario.apellidoP,
        correo: usuario.correo,
        rol: usuario.rol,
	    }))
    }catch(error){
    console.log(error);
    }
  }


  

