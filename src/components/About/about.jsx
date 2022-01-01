export default function About() {
  return (
    <>
      <div
        id="about"
        className="w-full h-screen bg-center bg-no-repeat bg-cover"
      >
        <div className="w-full h-screen bg-emerald-900 flex justify-center items-center">
          <div className="mx-4 mx-80 text-white">
            <h1 className="font-bold text-8xl mb-4">About.</h1>
            <h2 className="font-bold text-3xl mb-12">
              I'm a full stack developer from the Philippines, and I have been
              blessed to work with international companies throughout my career.{" "}
            </h2>
            <h2 className="font-bold text-3xl mb-12">
              {" "}
              Recently, I started my journey focused on learning more about
              front-end development, specifically React framework. I am also
              very interested with UI and UX designs.{" "}
            </h2>
            <div className="mx-4 text-center text-white justify-center items-center">
            <h1 className="font-bold text-8xl mb-4">Tech Stack</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
