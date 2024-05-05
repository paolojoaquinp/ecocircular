import { DocumentData, Firestore, QueryDocumentSnapshot, getDocs, getFirestore, orderBy, query, where } from 'firebase/firestore';
import { app, storage } from './firebase';
import { Generador } from '@/app/models/generadores';
import { addDoc,
         orderBy as any,
         doc,
         onSnapshot,
         collection,
         serverTimestamp } from "firebase/firestore";
import { getDownloadURL, getStorage,ref, uploadBytesResumable } from 'firebase/storage';

export class FirestoreController {
    private db: Firestore;
    /* private storage: FirebaseStorage; */
    
    constructor() {
        this.db = getFirestore(app);
    }

    async crearGenerador(
        uid: string,
        nombreEmpresa: string,
        correo: string,
        telefono: string,
        lat: number,
        lng: number,
        sectores: string[],
        min: number,
        foto: string
    ) {
        try {
            const docRef = await addDoc(collection(this.db, "generadores"), {
              uid: uid,
              nombreEmpresa: nombreEmpresa,
              correo: correo,
              telefono: telefono,
              lat: lat,
              lng: lng,
              sectores: sectores,
              min: min,
              foto: foto,
              /* categorias: categorias, */
              fecha: serverTimestamp(),
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }

    async consultarTodosGeneradores() : Promise<Generador[]> {
        try {
            const q = query(
                collection(this.db, 'generadores'),
                orderBy("nombreEmpresa", "asc"),
                orderBy('fecha', 'asc'),
                /* orderBy('titulo', 'asc') */
              );
          
              const querySnapshot = await getDocs(q);
              const postsData: Generador[] = [];
          
              querySnapshot.forEach((post) => {
                const doc = new Generador(post.data() as any);
                postsData.push(doc);
              });
          
              return postsData;
        } catch (error) {
            console.error('Error al consultar los posts:', error);
            throw error;
        }
    }
    async consultarPostPerUser(emailUser: string) : Promise<Generador[]> {
        try {
            const q = query(
                collection(this.db, 'generadores'),
                where('correo', '==', emailUser),
                /* orderBy('titulo', 'asc') */
              );
          
              const querySnapshot = await getDocs(q);
              const postsData: Generador[] = [];
          
              querySnapshot.forEach((post) => {
                const doc = new Generador(post.data() as any);
                postsData.push(doc);
              });
          
              return postsData;
        } catch (error) {
            console.error('Error al consultar los posts:', error);
            throw error;
        }
    }

    async subirImagenPost(file: any, uid:string, hanlderLoading: any) {
      try {
        const storage = getStorage();
        const refStorage = ref(storage, `imgsPosts/${uid}/${file.name}`);
        const task = uploadBytesResumable(refStorage, file);
    
        task.on('state_changed', 
          // Durante la subida
          (snapshot) => {
            const porcentaje = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(`Porcentaje: ${porcentaje}`);
            hanlderLoading(porcentaje);
          },
          // Si ocurre un error
          (err) => {
            console.error(`Error subiendo archivo => ${err.message}`);
          },
          // Una vez se haya completado
          () => {
              getDownloadURL(refStorage)
              .then(url => {
                console.log(url)
                sessionStorage.setItem('imgNewPost', url)
              })
              .catch(err => {
                console.log("Error al subir archivos,:",err);
              })
          }
        );
      } catch (error) {
        console.error('Error al subir la imagen:', error);
        throw error;
      }
    }

}