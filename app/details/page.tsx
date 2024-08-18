import Image from "next/image";
import { FaShareAlt } from "react-icons/fa";

export default function page() {
  return (
    <>
      {/* <div className="h-[75px] shadow-md"></div> */}
      <div className="relative flex justify-center items-center bg-[url('/rootdevs/team-banner.png')] w-full object-cover h-[50vh] lg:h-[80vh] bg-cover bg-center bg-no-repeat ">
        <div className="absolute inset-0 bg-[#151440AD]"></div>
        <h1 className="uppercase text-[#ff0000] z-10 text-xl sm:text-3xl lg:text-4xl xl:text-6xl font-bold">
          join our team
        </h1>
      </div>

      <div className="py-12 w-full">
        <div className="max-w-[1400px] w-full mx-auto px-4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex gap-5 items-center">
              <h2 className="font-bold text-lg md:text-2xl lg:text-[1.7rem] ">
                Software Engineer (Flutter)
              </h2>
              <span className="bg-[#00003F] p-[10px] rounded-full cursor-pointer hidden lg:flex">
                <FaShareAlt className="text-white text-lg" />
              </span>
            </div>
            <div>
              <Image
                className="cursor-pointer w-[5rem] md:w-[7rem] align-middle"
                src="/rootdevs/apply.png"
                width={100}
                height={100}
                alt="apply-image"
              />
            </div>
          </div>
          <div className="border border-[#a59898] rounded-[10px] grid grid-cols-2 lg:grid-cols-4 ">
            <div className="p-4 border-b lg:border-0">
              <p className="font-light">Experience</p>
              <h4 className="text-sm md:text-xl font-semibold md:font-bold mt-1 ">
                Minimum 6 months to 1.5 Year&apos;s
              </h4>
            </div>
            <div className="border-b lg:border-l lg:border-b-0  border-l-[#a59898] p-4">
              <p className="font-light">Work Level</p>
              <h4 className="text-sm md:text-xl font-semibold md:font-bold mt-1">
                Intermediate
              </h4>
            </div>
            <div className="lg:border-l border-[#a59898] p-4">
              <p className="font-light">Employee Type</p>
              <h4 className="text-sm md:text-xl font-semibold md:font-bold mt-1">
                Full Time Job
              </h4>
            </div>
            <div className="p-4 lg:border-l border-[#a59898]">
              <p className="font-light">Offer Salary</p>
              <h4 className="text-sm md:text-xl font-semibold md:font-bold mt-1">
                BDT - 25k/35k
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#F7FAFD]  py-5">
        <div className="grid grid-flow-row lg:grid-cols-[40%,60%] px-4 max-w-[1400px] mx-auto">
          <div className="grid justify-items-center items-center">
            <Image
              className="cursor-pointer w-[80%] object-cover  align-middle"
              src="/rootdevs/overview.png"
              width={500}
              height={500}
              alt="apply-image"
            />
          </div>
          <div className="flex flex-col gap-y-4 ">
            <h2 className="text-2xl font-bold">Overview</h2>
            <p className="text-sm tracking-wide leading-6">
              Are you a talented and passionate Flutter developer with
              experience in both Android and iOS app development? If so, We are
              looking for a Software Engineer (Flutter) to work with our team
              for developing Android & iOS mobile applications.
            </p>

            <h4 className="text-sm font-semibold">Job Requirements:</h4>
            <ul className="list-disc ml-5 text-sm tracking-wide leading-6">
              <li>
                6 months to 1.5 year(s) professional experience in mobile
                application development.
              </li>
              <li>
                Must have two or more iOS/Android apps developed with Flutter.
                Deployed on the AppStore/Google Play.
              </li>
              <li>
                Solid understanding of the Flutter framework and Dart
                programming language.
              </li>
              <li>Experience in both Android and iOS app development.</li>
              <li>Knowledge of mobile app architecture and design patterns.</li>
              <li>
                Familiarity with RESTful APIs and third-party integration.
              </li>
              <li>Strong problem-solving and debugging skills.</li>
              <li>Familiar with Architectural Patterns like MVP or MVVM.</li>
            </ul>

            <h4 className="text-sm font-semibold">Nice-to-Have:</h4>
            <ul className="list-disc ml-5 text-sm tracking-wide leading-6">
              <li>
                Knowledge of state management solutions in Flutter (Provider,
                GetX, Riverpod, Bloc, etc.).
              </li>
              <li>Experience with Firebase or other backend services.</li>
              <li>Familiarity with version control systems (Git, GitHub).</li>
              <li>Continuous integration and delivery (CI/CD) experience.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="py-5">
        <div className="grid grid-flow-row lg:grid-cols-[40%,60%] px-4 max-w-[1400px] mx-auto">
          <div className="grid justify-items-center items-center">
            <Image
              className="cursor-pointer w-[80%] object-cover  align-middle"
              src="/rootdevs/overview.png"
              width={500}
              height={500}
              alt="apply-image"
            />
          </div>
          <div className="flex flex-col gap-y-4 ">
            <h4 className="text-sm font-semibold">Job Requirements:</h4>
            <ul className="list-disc ml-5 text-sm tracking-wide leading-6">
              <li>
                6 months to 1.5 year(s) professional experience in mobile
                application development.
              </li>
              <li>
                Must have two or more iOS/Android apps developed with Flutter.
                Deployed on the AppStore/Google Play.
              </li>
              <li>
                Solid understanding of the Flutter framework and Dart
                programming language.
              </li>
              <li>Experience in both Android and iOS app development.</li>
              <li>Knowledge of mobile app architecture and design patterns.</li>
              <li>
                Familiarity with RESTful APIs and third-party integration.
              </li>
              <li>Strong problem-solving and debugging skills.</li>
              <li>Familiar with Architectural Patterns like MVP or MVVM.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
