'use client'
import { use, useState } from 'react';
import { GetServerSideProps } from 'next';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { MyDataPageWrapper, TableWrapper } from '@/app/styles/layout';

type DataType = {
  Field1: string;
  Field2: string;
  Field3: string;
  Field4: string;
  Field5: string;
  Field6: string;
  Field7: string;
  Field8: string;
};

type HomePageProps = {
  data: DataType[];
};

const myData = [
    {
        Field1: 'Empresa 1',
        Field2: 'Actividad 1',
        Field3: 'Residuo 1',
        Field4: 'Cantidad 1',
        Field5: 'Costo 1',
        Field6: 'Contacto 1',
        Field7: 'Correo 1',
        Field8: 'Direccion 1',
    },
    {
        Field1: 'Empresa 2',
        Field2: 'Actividad 2',
        Field3: 'Residuo 2',
        Field4: 'Cantidad 2',
        Field5: 'Costo 2',
        Field6: 'Contacto 2',
        Field7: 'Correo 2',
        Field8: 'Direccion 2',
    },
    {
        Field1: 'Empresa 3',
        Field2: 'Actividad 3',
        Field3: 'Residuo 3',
        Field4: 'Cantidad 3',
        Field5: 'Costo 3',
        Field6: 'Contacto 3',
        Field7: 'Correo 3',
        Field8: 'Direccion 3',
    },
    ];

    const residuos =
    {
        'Cartón': '200 kilogramos',
        'Vidrio Cristalino': '500 kilogramos',
        'Vidrio de Color': '500 kilogramos',
        'Papel de Blanco': '50 kilogramos',
        'Papel de Color': '100 kilogramos',
        'Plástico Polietileno tereftalato PET': '200 kilogramos',
        'Plástico Polietileno de Alta Densidad HDPE': '400 kilogramos',
        'Plástico Polietileno de Baja Densidad LDPE': '60 kilogramos',
        'Polipropileno PP': '100 kilogramos',
        'Aluminio': '500 kilogramos',
        'Bronce': '200 kilogramos',
        'Cobre': '200 kilogramos',
      };

    const costos = {
  'Cartón': '0,40 Bs.',
  'Vidrio Cristalino': '0,20 Bs.',
  'Vidrio de Color': '0,20 Bs.',
  'Papel de Blanco': '0,50 Bs.',
  'Papel de Color': '0,20 Bs.',
  'Plástico Polietileno tereftalato PET': '0,80 Bs.',
  'Plástico Polietileno de Alta Densidad HDPE': '2,70 Bs.',
  'Plástico Polietileno de Baja Densidad LDPE': '2,30 Bs.',
  'Polipropileno PP': '0,50 Bs.',
  'Aluminio': '6,00 Bs.',
  'Bronce': '6,00 Bs.',
  'Cobre': '6,00 Bs.',
};

export default function HomePage({ data }: HomePageProps) {
    const [selectedIndex, setSelectedIndex] = useState(0);

  
  return (
    <MyDataPageWrapper>
        <p className='Title'>Empresas Generadoras</p>
        <TableWrapper>
        <thead>
            <tr>
            <th>Nombre de la empresa</th>
            <th>Actividad Economica / Sector</th>
            <th>Tipo de residuo</th>
            <th>Cantidad</th>
            <th>Costo</th>
            <th>Numero de Contacto</th>
            <th>Correo</th>
            <th>Direccion</th>
            </tr>
        </thead>
        <tbody>
            {myData.map((item, index) => (
            <tr key={index}>
                <td>{item.Field1}</td>
                <td>{item.Field2}</td>
                <td>
                <select
                    onChange={(e) => {
                    const selectedResiduo = e.target.value;
                    const index = Object.keys(residuos).indexOf(selectedResiduo);
                    setSelectedIndex(index);
                    }}
                >
                    {Object.keys(residuos).map((residuo, index) => (
                    <option key={index} value={residuo} selected={residuo === item.Field3}>
                        {residuo}
                    </option>
                    ))}
                </select>
                </td>
                <td>
                    <p>{Object.values(residuos)[selectedIndex]}</p>
                </td>
                <td>{Object.values(costos)[selectedIndex]}</td>
                <td>{item.Field6}</td>
                <td>{item.Field7}</td>
                <td>{item.Field8}</td>
            </tr>
            ))}
        </tbody>
        </TableWrapper>
    </MyDataPageWrapper>
  );
}

/* export const getServerSideProps: GetServerSideProps = async () => {
if (!firebase.apps.length) {
    firebase.initializeApp({
        // your config here
    });
}

const db = firebase.firestore();
const data: DataType[] = [];

const snapshot = await db.collection('yourCollection').get();
snapshot.docs.forEach((doc) => {
    data.push(doc.data() as DataType);
});

return {
    props: {
        data,
    },
};
}; */