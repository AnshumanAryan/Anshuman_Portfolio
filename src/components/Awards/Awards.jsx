import { awards } from "../../constants" 

const Awards = () => {
    return (
        <section
      id="awards"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
    <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">AWARDS AND RECOGNITION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Highlights of my achievements and recognitions earned along the way
        </p>
      </div>
      <div className="relative">
              {/* Vertical line */}
              <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>
      
              {/* Experience Entries */}
              {awards.map((award, index) => (
                <div
                  key={award.id}
                  className={`flex flex-col sm:flex-row items-center mb-16 ${
                    index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
                  }`}
                >
                  {/* Timeline Circle */}
                  {/* <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
                    <img
                      src={experience.img}
                      alt={experience.company}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div> */}
      
                  {/* Content Section */}
                  <div
                    className={`w-full sm:max-w-md rounded-2xl shadow-2xl bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                      index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
                    } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
                  >
                   <img src={award.img} alt='award'/> 
                  </div>
                </div>
              ))}
            </div>
    </section>
    )
}

export default Awards;