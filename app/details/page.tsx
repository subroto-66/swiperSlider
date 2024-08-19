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
        <div className="max-w-7xl w-full mx-auto px-4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex gap-5 items-center">
              <h2 className="font-bold text-base md:text-lg tracking-wide lg:text-2xl ">
                Software Engineer (Flutter)
              </h2>
              <span className="bg-[#00003F] p-[10px] rounded-full  hidden lg:flex">
                <FaShareAlt className="text-white text-lg" />
              </span>
            </div>
            <div>
              <Image
                className=" w-[5rem] md:w-[7rem] align-middle"
                src="/rootdevs/apply.png"
                width={100}
                height={100}
                alt="apply-image"
              />
            </div>
          </div>
          <div className="border border-[#a59898] rounded-[10px] grid grid-cols-2 lg:grid-cols-4 ">
            <div className="p-4 border-b lg:border-0">
              <p className="font-light text-sm">Experience</p>
              <h4 className="text-sm md:text-lg font-semibold md:font-bold mt-1 tracking-normal">
                Minimum 6 months to 1.5 Year&apos;s
              </h4>
            </div>
            <div className="border-b lg:border-l lg:border-b-0  border-l-[#a59898] p-4">
              <p className="font-light text-sm">Work Level</p>
              <h4 className="text-sm md:text-lg font-semibold md:font-bold mt-1 tracking-normal">
                Intermediate
              </h4>
            </div>
            <div className="lg:border-l border-[#a59898] p-4">
              <p className="font-light text-sm">Employee Type</p>
              <h4 className="text-sm md:text-lg font-semibold md:font-bold mt-1 tracking-normal">
                Full Time Job
              </h4>
            </div>
            <div className="p-4 lg:border-l border-[#a59898]">
              <p className="font-light text-sm">Offer Salary</p>
              <h4 className="text-sm md:text-lg font-semibold md:font-bold mt-1 tracking-normal">
                BDT - 25k/35k
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#F7FAFD]  py-5">
        <div className="grid grid-flow-row lg:grid-cols-[40%,60%] px-4 w-full max-w-7xl mx-auto">
          <div className="grid justify-items-center items-center">
            <Image
              className=" w-[23rem] object-cover  align-middle"
              src="/rootdevs/overview.png"
              width={500}
              height={500}
              alt="apply-image"
            />
          </div>
          <div className="flex flex-col gap-y-4 ">
            <h2 className="text-xl font-bold">Overview</h2>
            <p className="text-xs font-normal tracking-wide leading-6">
              Are you a talented and passionate Flutter developer with
              experience in both Android and iOS app development? If so, We are
              looking for a Software Engineer (Flutter) to work with our team
              for developing Android & iOS mobile applications.
            </p>

            <h4 className="text-sm font-semibold">Job Requirements:</h4>
            <ul className="list-disc ml-5  text-xs font-normal tracking-wide leading-6">
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
            <ul className="list-disc ml-5 text-xs font-normal tracking-wide leading-6">
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
      <div className="py-10">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-[60%,40%] px-4 max-w-7xl mx-auto">
          <div className="flex flex-col gap-y-4 ">
            <h4 className="text-xl font-bold">Job Responsibilities</h4>
            <ul className="list-disc ml-5 text-xs font-normal tracking-wide leading-6">
              <li>
                Collaborate with cross-functional teams to define, design, and
                ship new features.
              </li>
              <li>
                Develop high-quality, reusable, and maintainable code for mobile
                applications using Flutter.
              </li>
              <li>
                Conduct code reviews to ensure code quality and adherence to
                best practices.
              </li>
              <li>
                Work closely with UI/UX designers to implement engaging user
                interfaces.
              </li>
              <li>
                Conduct code reviews to ensure code quality and adherence to
                best practices.
              </li>
              <li>
                Debug and optimize existing code for performance and user
                experience improvements.
              </li>
              <li>
                Stay up-to-date with the latest industry trends and
                technologies.
              </li>
            </ul>
          </div>
          <div className="grid justify-items-center items-center ">
            <Image
              className=" w-[23rem] object-cover  align-middle"
              src="/rootdevs/skill.png"
              width={500}
              height={500}
              alt="apply-image"
            />
          </div>
        </div>
      </div>

      <div className=" bg-[#F7FAFD]  py-5">
        <div className="grid grid-cols-1 justify-items-center items-center lg:grid-cols-[40%,60%] px-4 w-full max-w-7xl mx-auto">
          <div className="grid justify-items-center items-center">
            <Image
              className=" w-[23rem] object-cover  align-middle"
              src="/rootdevs/education.png"
              width={500}
              height={500}
              alt="apply-image"
            />
          </div>
          <div className="flex flex-col w-full gap-y-4 ">
            <h2 className="text-xl font-bold">Educational Requirements</h2>
            <h4 className="text-xs font-normal">
              B.Sc / M.Sc in CSE / IT/ CIS or equivalent
            </h4>
            <p className="text-xs tracking-wider leading-6">
              <span className="text-red-400">Note:</span> If your knowledge is
              good enough for the job position but you don’t have any degree,
              you can also apply for this position.
            </p>
          </div>
        </div>
      </div>
      <div className="py-10">
        <div className="flex flex-col-reverse lg:items-center lg:grid lg:grid-cols-[60%,40%] px-4 max-w-7xl mx-auto">
          <div className="flex flex-col gap-y-4 ">
            <h4 className="text-xl font-bold">Compensation & Other Benefits</h4>
            <ul className="list-disc ml-5 text-xs font-normal tracking-wide leading-6">
              <li>Tour allowance, Weekly 2 holidays</li>
              <li>Salary Review: Yearly (2)</li>
              <li>Festival Bonus: 1 (Yearly)</li>
              <li>Friendly work culture</li>
              <li>Enjoy all government holidays</li>
              <li>Tour or Team bonding party</li>
              <li>Unlimited Tea / Coffee</li>
            </ul>
          </div>
          <div className="grid justify-items-center items-center ">
            <Image
              className=" w-[23rem] object-cover  align-middle"
              src="/rootdevs/benefits.png"
              width={500}
              height={500}
              alt="apply-image"
            />
          </div>
        </div>
      </div>

      <div className=" bg-[#F7FAFD]  py-5">
        <div className="flex flex-col px-4 w-full max-w-7xl mx-auto">
          <h4 className="text-xs font-normal mb-5 text-red-600">𝗡𝗼𝘁𝗲𝘀:</h4>
          <ul className="list-disc flex flex-col gap-y-3 ml-5 text-xs font-medium tracking-wide leading-5">
            <li>
              Please don&apos;t apply if you don&apos;t have proper knowledge of
              tricks & techniques.
            </li>
            <li>
              Please don&apos;t apply if you think the time or location is not
              suitable for you.
            </li>
            <li>
              Please don’t apply if you don’t have at least 3-5 professional
              live projects or share your Behance and Dribbble profile.
            </li>
          </ul>
          <p className="text-xs tracking-wider leading-6 mt-4">
            𝑶𝒏𝒍𝒚 𝒔𝒉𝒐𝒓𝒕𝒍𝒊𝒔𝒕𝒆𝒅 𝒄𝒂𝒏𝒅𝒊𝒅𝒂𝒕𝒆𝒔 𝒘𝒊𝒍𝒍 𝒃𝒆 𝒄𝒐𝒏𝒕𝒂𝒄𝒕𝒆𝒅 𝒇𝒐𝒓 𝒕𝒉𝒆 𝒏𝒆𝒙𝒕 𝒔𝒕𝒆𝒑 𝒐𝒇
            𝒕𝒉𝒆 𝒔𝒆𝒍𝒆𝒄𝒕𝒊𝒐𝒏 𝒑𝒓𝒐𝒄𝒆𝒔𝒔. 𝑾𝒆 𝒂𝒓𝒆 𝒕𝒓𝒚𝒊𝒏𝒈 𝒕𝒐 𝒓𝒆𝒅𝒖𝒄𝒆 𝒇𝒂𝒄𝒆 𝒕𝒐 𝒇𝒂𝒄𝒆
            𝒊𝒏𝒕𝒆𝒓𝒂𝒄𝒕𝒊𝒐𝒏 𝒂𝒔 𝒎𝒖𝒄𝒉 𝒂𝒔 𝒑𝒐𝒔𝒔𝒊𝒃𝒍𝒆, 𝒔𝒐 𝒐𝒏𝒍𝒚 𝒕𝒉𝒆 𝒃𝒆𝒔𝒕 𝒄𝒂𝒏𝒅𝒊𝒅𝒂𝒕𝒆𝒔 𝒘𝒊𝒍𝒍 𝒃𝒆
            𝒔𝒉𝒐𝒓𝒕𝒍𝒊𝒔𝒕𝒆𝒅.
          </p>
        </div>
      </div>
    </>
  );
}
