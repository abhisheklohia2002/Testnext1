import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function Cards(props: any) {
  console.log(props.data.id);
  const router = useRouter;
  return (
    <>
      <div
        key={props.data.id}
        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 "
      >
        <img
          className="rounded-t-lg h-48 relative left-28"
          src={props.data.image}
          alt={props.data.title}
        />

        <div className="p-5">
          <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.data.title}
          </h1>

          <h1 className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {props.data.description}
          </h1>
          <Link
            href={`product/${props.data.id}`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
      ;
    </>
  );
}
