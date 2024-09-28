import React from "react";

const Home = () => {
  return (
    <>
      <div className="bg-cream font-roboto min-h-screen flex items-center   justify-center">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-16">
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold">Get Into</h1>
            <h2 className="text-6xl font-bold text-orange-500">
              Dream College
            </h2>
            <p className="mt-4 text-lg font-medium">
              Affordable SAT, ACT, PSAT and AP Test Prep
              <br />
              That Raises Test Scores.
            </p>
            <button className="mt-8 px-6 py-3 bg-black text-white text-lg font-bold rounded">
              Book Free Session
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <img
                src="https://assets-wp.boundless.com/uploads/2020/10/AdobeStock_65442438-2-scaled.jpeg"
                alt="Person with colorful lighting"
                className="w-32 h-32 rounded-full"
              />
              <div className="absolute top-0 right-0 w-8 h-8 bg-yellow-200 rounded-full"></div>
            </div>
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1282140880/photo/happy-asian-female-college-student-smiling-at-camera-on-yellow-background-and-copy-space.jpg?s=612x612&w=0&k=20&c=24liclh4T3PC3u7_uHzERooS1cHczjcSa7TKLP_N-aM="
                alt="Smiling person with polka dot shirt"
                className="w-32 h-32 rounded-full"
              />
              <div className="absolute top-0 right-0 w-8 h-8 bg-yellow-200 rounded-full"></div>
            </div>
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1257203752/photo/beautiful-young-woman-with-long-brunette-hair-posing-over-the-colorful-background.jpg?s=612x612&w=0&k=20&c=m4tvWbmVPKFd_1I1aVtlqR96Y7Wdw4srsqcCgceEMHU="
                alt="Person with short hair looking to the side"
                className="w-32 h-32 rounded-full"
              />
              <div className="absolute top-0 right-0 w-8 h-8 bg-yellow-200 rounded-full"></div>
            </div>
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1222372717/photo/indian-young-girl-stock-images.jpg?s=612x612&w=0&k=20&c=OYtnDHPUcBMzT_CYBKETl1_f5DFOCHfXo3hY0R9pinM="
                alt="Person with long hair smiling"
                className="w-32 h-32 rounded-full"
              />
              <div className="absolute top-0 right-0 w-8 h-8 bg-yellow-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto text-center mb-8">
          <h1 className="text-4xl font-bold text-orange-500">Lurnigo Blog</h1>
          <p className="text-gray-600 mt-2">
            Let's see why SAT has achieved an edge. Have a detailed view of our
            student projects, success stories and more.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://img.freepik.com/free-photo/group-international-students-standing-together-park-university-african-caucasian-girls-indian-boy-talking-outdoors_1157-49740.jpg"
              alt="Group of students celebrating SAT results"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-orange-500 mb-2">
                Summary of SAT 2023 Results
              </h2>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet.
              </p>
              <a href="#" className="text-gray-800 font-bold">
                Read More
              </a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://i.guim.co.uk/img/media/00342dcd321632a9068bf9eac4278bf5dbb188a9/0_374_5616_3370/500.jpg?quality=85&auto=format&fit=max&s=3705057fd953a9552d393239873160de"
              alt="Students celebrating their performance in SAT"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-orange-500 mb-2">
                Our performance in SAT 2023
              </h2>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet.
              </p>
              <a href="#" className="text-gray-800 font-bold">
                Read More
              </a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://s39613.pcdn.co/wp-content/uploads/2016/06/iStock_94825851_MEDIUM.160622.jpg"
              alt="Two people discussing SAT 2023 Toppers Talk"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-orange-500 mb-2">
                SAT 2023 Toppers Talk
              </h2>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet.
              </p>
              <a href="#" className="text-gray-800 font-bold">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-[#FFF8F2] py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#FF6F3C]">
            What's Unique with Lurnigo
          </h1>
          <p className="text-lg text-gray-700 mt-4">
            With Lurnigo you can completely re-write your career. No prior
            specific background/experience needed. Only willingness to put in
            efforts is required. We prioritize on teaching excellence above all
            else.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 mt-8">
          <div className="text-center">
            <img
              src="https://images-platform.99static.com//_sRNa5Eotjd5HVfW27f8GR4VR5c=/350x211:850x711/fit-in/500x500/99designs-contests-attachments/88/88755/attachment_88755846"
              alt="Icon representing live online classes"
              className="mx-auto mb-4"
              width="100"
              height="100"
            />
            <h2 className="text-xl font-semibold">Live Online Classes</h2>
            <p className="text-gray-600 mt-2">
              Live interactive classes, on your comfort of location
            </p>
          </div>
          <div className="text-center">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/teacher-solving-doubts-of-students-illustration-download-in-svg-png-gif-file-formats--online-question-confused-people-pack-illustrations-4817214.png"
              alt="Icon representing 1:1 doubt solving"
              className="mx-auto mb-4"
              width="100"
              height="100"
            />
            <h2 className="text-xl font-semibold">1:1 Doubt Solving</h2>
            <p className="text-gray-600 mt-2">
              Personal Doubt solving classes, 1:1 mentoring for Different exams.
            </p>
          </div>
          <div className="text-center">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/doubt-solving-in-online-business-class-illustration-download-svg-png-gif-file-formats--education-problem-training-pack-marketing-branding-illustrations-3543508.png"
              alt="Icon representing weekly online tests"
              className="mx-auto mb-4"
              width="100"
              height="100"
            />
            <h2 className="text-xl font-semibold">Weekly Online Tests</h2>
            <p className="text-gray-600 mt-2">
              Daily practice paper after every class, and weekly online test for
              each subject.
            </p>
          </div>
          <div className="text-center">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/doubt-solving-in-online-business-class-illustration-download-svg-png-gif-file-formats--education-problem-training-pack-marketing-branding-illustrations-3543508.png"
              alt="Icon representing practice till perfection"
              className="mx-auto mb-4"
              width="100"
              height="100"
            />
            <h2 className="text-xl font-semibold">Practice Till Perfection!</h2>
            <p className="text-gray-600 mt-2">
              Subject wise question banks with varying difficulty levels,
              solutions and previous year question papers.
            </p>
          </div>
          <div className="text-center">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/teacher-solving-doubts-of-students-illustration-download-in-svg-png-gif-file-formats--online-question-confused-people-pack-illustrations-4817214.png"
              alt="Icon representing insights, summary, recommendations"
              className="mx-auto mb-4"
              width="100"
              height="100"
            />
            <h2 className="text-xl font-semibold">
              Insights, Summary, Recommendations
            </h2>
            <p className="text-gray-600 mt-2">
              Meticulous performance tracking to create progress reports and get
              recommendations on topics to focus.
            </p>
          </div>
          <div className="text-center">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/teacher-solving-doubts-of-students-illustration-download-in-svg-png-gif-file-formats--online-question-confused-people-pack-illustrations-4817214.png"
              alt="Icon representing curriculum mapped learning"
              className="mx-auto mb-4"
              width="100"
              height="100"
            />
            <h2 className="text-xl font-semibold">
              Curriculum Mapped Learning
            </h2>
            <p className="text-gray-600 mt-2">
              Meticulous performance tracking to create progress reports and get
              recommendations on topics to focus.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/teacher-solving-doubts-of-students-illustration-download-in-svg-png-gif-file-formats--online-question-confused-people-pack-illustrations-4817214.png"
            alt="Illustration of a person holding a light bulb"
            className="h-64"
            width="200"
            height="300"
          />
        </div>
      </section>
      <div className="container mx-auto py-16 flex flex-col items-center md:flex-row md:justify-between">
        <div className="flex justify-center md:justify-start">
          <img
            src="https://media.istockphoto.com/id/1301419026/photo/university-student-back-to-school.jpg?s=612x612&w=0&k=20&c=SG5jsOQyXbox2f5hLvQOip8889iFWjp-oLBBuBEN1aI="
            alt="Two students, one holding a tablet and the other looking excited"
            className="w-80 h-80 object-cover rounded-full bg-orange-500 p-4"
          />
        </div>
        <div className="mt-8 md:mt-0 md:ml-16 text-center md:text-left">
          <h1 className="text-4xl font-bold">
            Book Your <span className="text-orange-500">Free Demo</span> Session
          </h1>
          <p className="mt-4 text-gray-600">
            Get a free academic counselling session
          </p>
          <form className="mt-8 space-y-4">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="text"
              placeholder="Enter Your Mobile Number (USA Only)"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
              <option>Select Your Class</option>
            </select>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600"
            >
              Book a Free Demo
            </button>
          </form>
        </div>
      </div>
      <div className="flex items-center justify-center min-h-screen bg-[#FFF8F1]">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold text-orange-600 mb-4">
              Classroom In Your Pocket
            </h1>
            <p className="text-gray-600 mb-6">
              Choose Your Courses &amp; Grow Your Career with All New Lurnigo
              App
            </p>
            <div className="flex items-center justify-center md:justify-start mb-6">
              <div className="flex border border-gray-300 rounded-l-md overflow-hidden">
                <select className="bg-white border-none text-gray-600 p-2">
                  <option value="+1">+1</option>
                  {/* Add other country codes as needed */}
                </select>
              </div>
              <input
                type="text"
                placeholder="Enter Your Phone Number"
                className="p-2 border-t border-b border-gray-300 w-64"
              />
              <button className="bg-orange-500 text-white p-2 rounded-r-md">
                Get Started
              </button>
            </div>
            <div>
              <p className="text-orange-600 mb-2">Download App Now</p>
              <div className="flex justify-center md:justify-start">
                <a href="#" className="mr-2">
                  <img
                    src="data:image/png;base64,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"
                    alt="Get it on Play Store"
                    width="150"
                    height="50"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <img
                src="https://www.ikea.com/in/en/images/products/fejka-artificial-potted-plant-in-outdoor-monstera__0614197_pe686822_s5.jpg"
                alt="Plant"
                className="absolute left-0 top-0 w-1/3 h-auto"
                width="300"
                height="200"
              />
              <img
                src="https://media.istockphoto.com/id/1222372717/photo/indian-young-girl-stock-images.jpg?s=612x612&w=0&k=20&c=OYtnDHPUcBMzT_CYBKETl1_f5DFOCHfXo3hY0R9pinM="
                alt="Desktop Screen"
                className="w-full h-auto"
                width="600"
                height="400"
              />
              <img
                src="https://cdn.pixabay.com/photo/2016/11/29/12/30/phone-1869510_640.jpg"
                alt="Tablet Screen"
                className="absolute left-1/4 top-1/4 w-1/3 h-auto"
                width="300"
                height="200"
              />
              <img
                src="https://cdn.pixabay.com/photo/2016/11/29/12/30/phone-1869510_640.jpg"
                alt="Mobile Screen"
                className="absolute left-1/2 top-1/2 w-1/6 h-auto"
                width="150"
                height="300"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
