import React from 'react'

function JEEmain() {
  return (
    <div>
        <div className='py-10'>
        <a 
  className="inline-block rounded-full border border-indigo-600 p-3 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
  href="/"
>
  
<h1>Back</h1>
  <svg
    className="h-5 w-5 rtl:rotate-180"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M14 5l7 7m0 0l-7 7m7-7H3"
    />
  </svg>
        </a>
        
        </div>
        
        <div className='py-10'>
        <article className="rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8">
  <div className="flex items-start sm:gap-8">
    <div
      className="hidden sm:grid sm:h-20 sm:w-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 "
      aria-hidden="true"
    >
      <img src="/images/ntaimg.jpg" alt="" />
    </div>

    <div>
      <strong
        className="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white"
      >
        Apply Now
      </strong>

      <h3 className="mt-4 text-lg font-medium sm:text-xl">
        <a href="" className="hover:underline"> JEE Main 2023 </a>
      </h3>

      <p className="mt-1 text-sm text-gray-700">
       Exam Date: 23 March, 2023
       <br />
       Applicants: 20 Lakh+
      </p>

      <div className="mt-4 sm:flex sm:items-center sm:gap-2">
        <div className="flex items-center gap-1 text-gray-500">
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>

          <p className="text-xs font-medium">180:00 minutes</p>
        </div>

        <span className="hidden sm:block" aria-hidden="true">&middot;</span>

        <p className="mt-2 text-xs font-medium text-gray-500 sm:mt-0">
          Featuring <a href="#" className="underline hover:text-gray-700">Visit</a>,
          <a href="#" className="underline hover:text-gray-700">NTA</a> website
          <a href="#" className="underline hover:text-gray-700">.</a>
        </p>
      </div>
    </div>
  </div>
</article>
        </div>

        <div>
        <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
  

  <div className="p-4 sm:p-6">
    <a href="#">
      <h3 className="text-lg font-medium text-gray-900">
        Exam Description:
      </h3>
    </a>

    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
    JEE Main is a standardized test conducted across different states in India.
    <br />
The exam is held at an undergraduate level to offer admissions to some of the best engineering and technical institutions that are Government funded or privately-owned.
<br />
The exam conducting authority considers the best NTA score in preparing the ranks/merit list.
<br />
    </p>


    <a href="#">
      <h3 className="text-lg font-medium text-gray-900">
        Eligibility:
      </h3>
    </a>

    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
    Age Limit - No age limit <br />
Qualifying Exam - Class 12/Equivalent Exam <br />
Percentage - At least 75% in class 12/equivalent exam <br />
Year of Passing - 2021, 2022 or appearing in 2023 <br />
Number of attempts - Candidate can appear in JEE Main for 3 consecutive years after passing their class 12/equivalent exam <br />
    </p>


    <a href="#">
      <h3 className="text-lg font-medium text-gray-900">
        Important Details:
      </h3>
    </a>

    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
    JEE Main 2023 January Session: NTA released the JEE Main 2023 session 1 will be conducted between 24th January and 1st February, 2023. <br />
JEE Main 2023 April Session: NTA released the JEE Main 2023 session 1 will be conducted between 1st April, 2023 and 15th April, 2023.
    </p>

    <a href="#" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
      Find out more

      <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
        &rarr;
      </span>
    </a>
  </div>
</article>
        </div>
      
        <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium"></h1>
    </div>
  )
}

export default JEEmain