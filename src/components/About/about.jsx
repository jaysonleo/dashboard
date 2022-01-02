import "./about.scss";

export default function About() {
  return (
    <>
      <div id="about" className="w-full h-screen bg-center bg-no-repeat bg-cover">
        <div className="w-full h-screen bg-emerald-900 flex justify-center items-center">
          <div className="xl:mx-52 md:mx-8 sm:mx-4 text-white">
            <h1 className="font-bold text-8xl mb-4">About.</h1>
            <h2 className="font-bold text-3xl mb-12">
            I have been working in technology since 2015. I started my career with Angular and .NET stack under Microsoft.
            Despite of my experience, I am still eager to learn more because our industry is very fast-paced, 
            and I consider myself as someone who still has a lot to learn. I am up-to date with the 
            new technologies and also a team player that is willing to give my full attention to a 
            project.
            </h2>
            <h2 className="font-bold text-3xl mb-12">
              Recently, I started my journey focused on
              front-end development, specifically React framework. I am also
              very interested with UI and UX designs.
            </h2>
            <div className="mx-4 text-center text-white justify-center items-center">
              <h1 className="font-bold text-8xl mb-4">Tech Stack</h1>
              <div></div>
            </div>
            <div className="mx-4 text-center text-white justify-center items-center">
              <h1 className="font-bold text-8xl mb-4"></h1>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
