
export default function Repositories() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">GitHub Repon</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Advent of Code 2024</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
            Advent of Code (AoC) is an annual programming challenge that starts on December 1st 
            and runs until December 25th. It is like a digital advent calendar, where each day 
            unlocks a new challenge. I have chosen to code this challenge in JavaScript.
            </p>
            <a
              href="https://github.com/Emmasi/advent-of-code-2024"
              className="inline-block bg-customBlue text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-600 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to repo
            </a>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">BookingPage</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
            This project is a booking system built using the Google Calendar API, where users can 
            create, manage, and view bookings directly in their Google Calendar. 
            The system is designed to be efficient and user-friendly, with both a backend 
            and a frontend working together to handle the bookings.
            </p>
            <a
              href="https://github.com/Emmasi/BookingPage"
              className="inline-block bg-customBlue text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-600 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to repo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
