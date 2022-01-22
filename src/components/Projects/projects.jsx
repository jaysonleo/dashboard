import React from "react";

export default function Projects() {
    let project_image1 = require('../../asset/covid-tracker.PNG')
    let project_title1 = 'Coronavirus Tracker';
    let project_stack1 = ['Angular', 'Angular Material', 'SCSS']
    let project_desc1 = 'A detailed coronavirus tracker that showcases the power of SPA (Single Page Application) and Chart.js.'
  return (
    <>
      <h1 className="text-emerald-900">Featured Projects</h1>
      <div class="container">
        <div class="flex flex-wrap -mx-4 justify-center">
          <div class="w-full md:w-1/2 xl:w-1/3 px-4">
            <div class="bg-white rounded-lg overflow-hidden mb-10 shadow-2xl py-4 px-1">
              <img
                src={project_image1}
                alt="image"
                class="w-full"
              />
              <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                <h3>
                  <a
                    href="https://focused-clarke-54e0f3.netlify.app/"
                    class="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                  >
                    {project_title1}
                  </a>
                </h3>
                <div className='flex gap-4 items-center'>
                {project_stack1.map(stack =>(
                    <p className='rounded-full border-black border-2 py-1 px-1.5 text-xs'>{stack}</p>
                ))}
                </div>
                <p class="text-base text-body-color leading-relaxed mb-7">
                  {project_desc1}
                </p>
                <a
                    target="_blank"
                    href="https://focused-clarke-54e0f3.netlify.app/"
                    class="
                     inline-block
                     py-2
                     px-7
                     border border-[#E5E7EB]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     "
                >
                  View Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
