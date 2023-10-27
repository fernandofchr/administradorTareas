import React,{useEffect, useState} from 'react'
import { DataStore } from 'aws-amplify';
import { TareaPrincipal } from '../../models';

  //Metodo conuslta: 
  export const listTareas = async ()=>{
    const models = await DataStore.query(TareaPrincipal);
    console.log(models);
  }
  //Metodo Creador
   export const nuevaTarea = async (tarea) => {
    try { 
      const newTask = await DataStore.save(new TareaPrincipal({
		"titulo": tarea.titulo,
		"descripcion": tarea.descripcion,
		"fechaVencimiento": tarea.fechaVencimiento,
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
  export const eliminarTarea= async ()=>{
    const modelToDelete = await DataStore.query(TareaPrincipal, 123456789);
    DataStore.delete(modelToDelete);
  }
  

