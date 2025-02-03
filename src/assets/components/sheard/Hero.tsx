export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-100 via-gray-100 to-blue-100 py-20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold text-gray-800 md:text-5xl lg:text-6xl leading-tight">
            Welcome to <span className="text-customBlue">My Website and Portfolio</span>
          </h1>
          <p className="mt-6 text-gray-600 text-lg md:text-xl leading-relaxed">
            Hi, I'm Emma Olsson – a passionate Frontend Developer with expertise in .NET, React, Next.js, TypeScript, and C#. 
            Let's create something amazing together!
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <a
              href="/MyPortfolio/Emma_Olsson_-_Frontend_Developer1.pdf"
              download="Emma_Olsson_CV.pdf"
              className="bg-customBlue text-white py-3 px-8 rounded-lg text-lg font-medium shadow hover:bg-blue-600 transition duration-300"
            >
              Download CV
            </a>
            <a
              href="#references"
              className="text-customBlue border border-customBlue py-3 px-8 rounded-lg text-lg font-medium hover:bg-customBlue hover:text-white transition duration-300"
            >
              Se references
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
