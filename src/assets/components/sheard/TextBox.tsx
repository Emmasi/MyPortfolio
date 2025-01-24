type HeroProps = {
  ProfileImge: string;
  isBtn: boolean;
};

export default function TextBox({ ProfileImge, isBtn }: HeroProps) {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-8">
        <div className="md:p-12 md:w-1/2">
          <h1 className="text-4xl font-bold text-gray-800 leading-tight py-4">
            Hi, I'm <span className="text-customBlue">Emma Olsson</span>
          </h1>
          <p className="text-gray-600 leading-relaxed mb-4">
            I am a passionate and versatile developer with a strong foundation in creating accessible and user-friendly
            web applications. I have completed two two-year educational programs: one in Frontend Development and another
            in .NET Programming, equipping me with a broad skill set to work with both modern frontend and backend
            technologies.
          </p>
          <p className="text-gray-600 leading-relaxed">
            I also have extensive knowledge and hands-on experience in web accessibility. My goal is to develop solutions
            that are inclusive and adhere to current accessibility standards, such as WCAG, ensuring an optimal experience
            for all users.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            With my combination of technical expertise and accessibility experience, I am well-prepared to contribute to
            projects that demand both user focus and high technical quality.
          </p>
          {isBtn && (
            < div className="mt-6">
              <a
                href="/Emma_Olsson_-_Frontend_Developer.pdf"
                download="Emma_Olsson_CV.pdf"
                className="bg-customBlue text-white py-3 px-6 rounded-lg font-medium shadow hover:bg-blue-600 transition duration-300"
              >
                Download CV
              </a>
            </div>
          )
          }
        </div>
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src={ProfileImge}
            alt="Image of Emma"
            className="rounded-lg shadow-lg max-w-full md:max-w-sm h-auto"
          />
        </div>
      </div>
    </section >
  );
}
