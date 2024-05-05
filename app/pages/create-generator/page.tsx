"use client";
import React, {useContext, useState} from 'react';
import { Generador } from '@/app/models/generadores';
import { FirestoreController } from '@/app/services/firestoreService';
import AppContext from '@/app/context/AppContext';
import { WrapperGenerator } from './create-generator-styled';
import { useRouter } from 'next/navigation';

const CreateGenerator = () => {
    const firestore = new FirestoreController();
    const [generator, setGenerator] = useState<Generator>();
    const router = useRouter();
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await firestore.crearGenerador(
            'uid',
            e.currentTarget.nombreEmpresa.value,
            e.currentTarget.correo.value,
            e.currentTarget.telefono.value,
            parseFloat(e.currentTarget.lat.value),
            parseFloat(e.currentTarget.lng.value),
            ['sector1', 'sector2'],
            parseFloat(e.currentTarget.min.value),
            'foto'
        ).then(() => {
            console.log('Generador creado');
            router.push('/my-data');
        });
    }

    return <WrapperGenerator>
        <p>Crear Empresa Generadora</p>
        <form onSubmit={handleSubmit}>
            <div className='group__input'>
                <label>Nombre de la Empresa</label>
                <input type='text' name='nombreEmpresa'/>
            </div>
            <div className='group__input'>
                <label>Correo</label>
                <input type='email' name='correo'/>
            </div>
            <div className='group__input'>
                <label>Numero de Contacto</label>
                <input type='text' name='telefono'/>
            </div>
            <div className='group__input'>
                <label>Ubicacion</label>
                <input type='number' name='lat'/>
                <input type='number' name='lng'/>
            </div>
            <div className='group__input'>
                <label>Sectores</label>
                <select>
                    <option value=''>Sector 1</option>
                    <option value=''>Sector 2</option>
                    <option value=''>Sector 3</option>
                </select>
            </div>
            <div className='group__input'>
                <label>Cantidad Minima</label>
                <input type='number' name='min'/>
            </div>
            <div className='group__input'>
                <label>Foto de residuo</label>        
                <input type='file' name='foto'/>
            </div>
            <button type='submit'>Crear Generador</button>
        </form>
    </WrapperGenerator>;
}

export default CreateGenerator;