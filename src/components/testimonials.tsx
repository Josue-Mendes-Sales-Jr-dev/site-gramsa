"use client";
import Image from "next/image";
// Remover importações não utilizadas
// import Img from "../../images/gramsa1.jpeg";
// import Img01 from "../../images/mina4.avif";
// import Img02 from "../../images/mina3.jpg";

import { useEffect } from "react";

const Testimonials = () => {
  useEffect(() => {
    const init = async () => {
      const { testimonials, initTWE } = await import("tw-elements");
      initTWE({ testimonials });
    };
    init();
  }, []);

  return (
    <>
      <div className="mx-auto text-center w-[80vw] md:max-w-xl lg:max-w-3xl py-20">
        <p className="mb-6 pb-2 text-neutral-600 dark:text-neutral-300 md:mb-12 md:pb-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
          amet numquam iure provident voluptate esse quasi, veritatis totam
          voluptas nostrum quisquam eum porro a pariatur veniam.
        </p>
      </div>

      <div className="grid gap-6 text-center md:grid-cols-3 lg:gap-12 pb-20">
        <div className="mb-12 md:mb-0 w-[22rem]">
          <div className="mb-6 flex justify-center">
            <Image
              alt="imagem"
              src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg"
              width={128}
              height={128}
              className="w-32 rounded-full shadow-lg dark:shadow-black/30"
            />
          </div>
          <h5 className="mb-4 text-xl font-semibold">Maria Smantha</h5>
          <h6 className="mb-4 font-semibold text-primary dark:text-primary-400">
            Web Developer
          </h6>
          <p className="mb-4 text-neutral-600 dark:text-neutral-300">
            <span className="inline-block pe-2 [&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512"
              >
                <path
                  d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"
                />
              </svg>
            </span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
            id officiis hic tenetur quae quaerat ad velit ab hic tenetur.
          </p>
          <ul className="mb-0 flex items-center justify-center">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5 text-yellow-500"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
            {/* ... outros ícones de estrela ... */}
          </ul>
        </div>

        {/* Repetir o mesmo formato para os outros depoimentos */}

        <div className="mb-12 md:mb-0 w-[22rem]">
          <div className="mb-6 flex justify-center">
            <Image
              alt="imagem"
              src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg"
              width={128}
              height={128}
              className="w-32 rounded-full shadow-lg dark:shadow-black/30"
            />
          </div>
          <h5 className="mb-4 text-xl font-semibold">Lisa Cudrow</h5>
          <h6 className="mb-4 font-semibold text-primary dark:text-primary-400">
            Graphic Designer
          </h6>
          <p className="mb-4 text-neutral-600 dark:text-neutral-300">
            <span className="inline-block pe-2 [&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512"
              >
                <path
                  d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"
                />
              </svg>
            </span>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid commodi.
          </p>
          <ul className="mb-0 flex items-center justify-center">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5 text-yellow-500"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
            {/* ... outros ícones de estrela ... */}
          </ul>
        </div>
        <div className="mb-12 md:mb-0 w-[22rem]">
          <div className="mb-6 flex justify-center">
            <Image
              alt="imagem"
              src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg"
              width={128}
              height={128}
              className="w-32 rounded-full shadow-lg dark:shadow-black/30"
            />
          </div>
          <h5 className="mb-4 text-xl font-semibold">Lisa Cudrow</h5>
          <h6 className="mb-4 font-semibold text-primary dark:text-primary-400">
            Graphic Designer
          </h6>
          <p className="mb-4 text-neutral-600 dark:text-neutral-300">
            <span className="inline-block pe-2 [&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512"
              >
                <path
                  d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"
                />
              </svg>
            </span>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid commodi.
          </p>
          <ul className="mb-0 flex items-center justify-center">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5 text-yellow-500"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
            {/* ... outros ícones de estrela ... */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
