"use client"


import React, { PropsWithChildren, useEffect, useRef, useState } from 'react'
import {
    useWindowSize,
    useWindowWidth,
    useWindowHeight,
  } from '@react-hook/window-size'
import { Cross, X } from 'lucide-react';
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
   isFullMode?:boolean;
    children: React.ReactNode;
}
const ModalRoot = ({ children, isOpen, onClose ,isFullMode}: ModalProps) => {




    const ref = useRef<HTMLDivElement | null|any >(null)


    useEffect(() => {
        function handleOutsideClick(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event?.target)) {
                onClose()
            }

        }
        if (isOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };


    }, [isOpen, onClose])



    React.useEffect(() => {
        if (isOpen) {
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = `${scrollbarWidth}px`;
        } else {
            document.body.style.overflow = 'unset';
            document.body.style.paddingRight = '0px';
        }

        return () => {
            document.body.style.overflow = 'unset';
            document.body.style.paddingRight = '0px';
        };
    }, [isOpen]);



    const [width, height] = useWindowSize()

   
    
    const classs=` background-color: rgb(0 0 0 / 0.5);`


    return (
        <>
            {isOpen && <div className="fixed top-0 right-0  left-0 inset-0  z-[9999] flex items-center justify-center bg-opacity-40" style={{
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            }}>
                <div ref={ref} className={`bg-white  rounded-2xl  ${width <768? "w-screen h-full mt-10  rounded-t-2xl rounded-b-none md:!rounded-2xl max-md:py-3.5 ":"xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-2/3 w-full  mx-4 px-6 py-3.5"} shadow-lg overflow-y-auto  md:max-h-[96vh] max-h-screen hide-scrollbar transition-transform `}>
                    <div className='flex items-center  justify-end mb-2.5 '>
                        <button className='h-10 w-10 hover:bg-gray-100 text-gra transition-all rounded-full flex items-center justify-center'>
                            <X  onClick={onClose} size={24} className='text-gray-500' />
                    </button>

                    </div>
                    {children}
                </div>
            </div>}
        </>
    )
}

export default ModalRoot