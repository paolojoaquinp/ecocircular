'use client'
import React, { useRef, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { authEmailPass } from '../../services/authService';
import { BfMain, ForgotPasswordContainer, LinkCustomLight } from '@/app/styles/layout';
import Input from '@/app/components/Input';
import AppContext from '@/app/context/AppContext';
import PrimaryButton from '@/app/components/PrimaryButton';



const LoginPage = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const router = useRouter();
    const { 
      initialData,
      emitToast
    } = useContext(AppContext);

    const handleSubmit = async (e: any) =>  {
      e.preventDefault();
      const email = (emailRef.current as any).value;
      const password = (passwordRef.current as any).value;
  
      const rta = await authEmailPass(email,password,initialData.changePhoto);
      if(rta) {
        emitToast('Login con exito');
        router.push('/');
      } else {
        emitToast('Algo salio mal');
      }
      (emailRef.current as any).value = '';
      (passwordRef.current as any).value = '';
    };
    return (
        <div>
          <p>Login</p>
          <form onSubmit={handleSubmit}>
            <Input nameRef={emailRef}    typeInput={'email'} label={'Email'}/>
            <Input nameRef={passwordRef} typeInput={'password'} label={'Contraseña'}/>
            <ForgotPasswordContainer>
              <p>Olvidaste tu contraseña? <span>
                <LinkCustomLight href="/recover-password">
                  Recuperala Aqui
                </LinkCustomLight>  
              </span></p>
            </ForgotPasswordContainer>
            <div className='actions__container'>              
               <PrimaryButton type={"submit"} name={'Login'}/>
             </div>
          </form>
        </div>
    );
};
export default LoginPage;