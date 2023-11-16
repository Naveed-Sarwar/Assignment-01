import Image from "next/image";
import Panaverse from "@/assets/panaverse.png";
export default function Home() {
  const data = [
    { id: 1, column1: "1", column2: "Naveed", column3: "10" },
    { id: 2, column1: "2", column2: "Asim", column3: "20" },
    { id: 2, column1: "3", column2: "Haad", column3: "30" },
    { id: 1, column1: "4", column2: "Usama", column3: "40" },
    { id: 2, column1: "5", column2: "Bilal", column3: "50" },
  ];
  return (
    <main className="flex min-h-screen flex-col">
      <div className="bg-gradient-to-r from-[#155799] to-[#159957] min-h-screen leading-normal px-24 py-20 text-center text-white font-bold text-5xl">
        Certified Web 3.0 and Metaverse <br /> Developer: A Nationwide Program
        in
        <br /> Karachi, Lahore, Islamabad, and <br /> Peshawar
        <p className="text-lg font-light py-2">
          Getting Ready for the Next Generation and Future of the Internet -
          Join a 13 Trillion Dollar Industry with 5 Billion Users
        </p>
      </div>

      <div className="mx-48 pt-6">
        <p className="font-normal text-[32px] text-[#159957]">
          Certified Web 3.0 and Metaverse Developer: A Nationwide Program in
          Karachi, Lahore, Islamabad, and Peshawar
        </p>
        <Image alt="Panaverse-img" className="mt-4" src={Panaverse} />
        <p className="font-normal text-2xl leading-10 text-[#159957]">
          The Future of the Web is Web 3.0, Metaverse, and Edge Computing.
          Panaverse DAO is a movement to spread these technolgies globally. It
          is community of Web 3 and Metaverse developers, designers, trainers,
          startup founders and service providers.
        </p>
        <p className="text-[#1e6bb8] text-[26px] hover:underline cursor-pointer py-2">
          Admissions Now Open in Karachi, Lahore, Islamabad, and Peshawar
        </p>
        <p className="text-[#606c71] text-base leading-6">
          The internet is without a doubt the most important technological
          development in human history. Web3 and metaverse technologies expand
          the internet as we know it by introducing novel features and
          advancements. Metaverse will make use of all aspects of modern
          technology, including 3D, VR, AR, AI, blockchain, cloud computing,
          voice computing, ambient computing, and more.
          <br />
          <br />
          Citi is the latest Wall Street business to give a positive prognosis
          for Web 3.0 and the Metaverse, terms used to depict a future internet
          vision centred on decentralised technologies and virtual worlds. Citi
          stated in a March 2022 research paper that the metaverse economy might
          have a total addressable market of up to $13 trillion and five billion
          people by 2030.
        </p>

        <p className="font-normal text-2xl py-2 leading-10 text-[#159957]">
          The Program in a Nutshell: Earn While You Learn
        </p>
        <p className="text-[#606c71] text-base leading-6">
          In this brand-new type of curriculum, students will learn how to make
          money and boost exports in the classroom and will begin doing so
          within six months of the program’s beginning. It resembles a cross
          between a corporate venture and an educational project.
        </p>
        <p className="font-normal text-2xl py-2 leading-10 text-[#159957]">
          Program of Studies
        </p>
        <p className="text-[#606c71] text-base leading-6">
          This curriculum is intended for beginners who want to learn software
          development from the ground up. The first two quarters are shared by
          all specialities and are dedicated to studying Object-Oriented
          Programming and cutting-edge Full-Stack Web 2.0 development. It is
          going to be a year-long hybrid programme that includes both onsite and
          online classes and is divided into four quarters of 13 weeks each. The
          emphasis will be on hands-on learning by educating students to produce
          projects. To accommodate everyone, courses will be held primarily on
          weekends or after 6:00 p.m. (Pakistan Time) on weekdays. It employs a
          hybrid teaching format, with core onsite classes complemented by
          online Zoom laboratories and recorded videos.
        </p>
        <p className="font-normal text-2xl py-2 leading-10 text-[#159957]">
          Core Courses (Common in All Specializations)
        </p>
        <p className="text-[#606c71] text-base leading-6">
          Every participant of the program will start by completing the
          following two core courses: Quarter I (Core) CS-101: Object-Oriented
          Programming using TypeScript Quarter II (Core) W2-201: Developing
          Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using
          Next.js 13 and Cloud Development Kit (CDK) for Terraform
        </p>
        <p className="font-normal text-2xl py-2 leading-10 text-[#159957]">
          Specialized Tracks
        </p>
        <p className="text-[#606c71] text-base leading-6">
          After completing the first two quarters the participants will select
          one or more specializations consisting of two courses each:
        </p>
        <p className="font-normal text-2xl py-2 leading-10 text-[#159957]">
          Web 3.0 (Blockchain) and Metaverse Specialization
        </p>
        <p className="text-[#606c71] text-base leading-6">
          This Web 3.0 and Metaverse specialization focuses on developing
          full-stack Web 3.0 and Metaverse experiences for the next generation
          of the internet by specializing in building worlds that merge the best
          of cutting-edge decentralized distributed blockchains with 3D
          metaverse client experiences.
        </p>
        <p className="text-[#1e6bb8] py-2 text-base leading-6 hover:underline cursor-pointer">
          Quarter III W3-351: Developing Smart Contracts and Planet-Scale Web
          3.0 Dapps
        </p>

        <p className="text-[#1e6bb8] py-2 text-base leading-6 hover:underline cursor-pointer">
          Quarter IV MV-361: Developing Planet-Scale Open Virtual and Augmented
          Metaverse Experiences
        </p>
        <p className="font-normal text-2xl py-2 leading-10 text-[#159957]">
          Artificial Intelligence (AI) and Deep Learning Specialization
        </p>
        <p className="text-[#606c71] text-base leading-6">
          The AI and Deep Learning specialization focuses on building and
          deploying intelligent APIs using OpenAI models and building custom
          Deep Learning Tensorflow models.
        </p>
        <p className="text-[#1e6bb8] py-2 text-base leading-6 hover:underline cursor-pointer">
          Quarter III AI-351: Developing Planet-Scale Intelligent APIs and
          Python Programming{" "}
        </p>

        <p className="text-[#1e6bb8] py-2 text-base leading-6 hover:underline cursor-pointer">
          Quarter IV AI-361: Deep Learning and MLOps{" "}
        </p>

        <p className="font-normal text-2xl py-2 leading-10 text-[#159957]">
          Cloud-Native Computing Specialization{" "}
        </p>
        <p className="text-[#606c71] text-base leading-6">
          The Cloud-Native Computing Specialization focuses on Containers,
          Kubernetes, and CDK for Kubernetes.
        </p>
        <p className="text-[#1e6bb8] py-2 text-base leading-6 hover:underline cursor-pointer">
          Quarter III CN-351: Certified Kubernetes Application Developer (CKAD){" "}
        </p>

        <p className="text-[#1e6bb8] py-2 text-base leading-6 hover:underline cursor-pointer">
          Quarter IV CN-361: Developing Multi-Cloud APIs using CDK for Terraform
        </p>

        <p className="font-normal text-2xl py-2 leading-10 text-[#159957]">
          Ambient Computing and IoT Specialization
        </p>
        <p className="text-[#606c71] text-base leading-6">
          The Ambient Computing and IoT Specialization focuses on building Smart
          Homes, Offices, Factories, and Cities using Voice computing, Matter
          and Embedded Devices.
        </p>
        <p className="text-[#1e6bb8] py-2 text-base leading-6 hover:underline cursor-pointer">
          Quarter III AC-351: Ambient Computing with Voice Assistants and Matter
          Devices{" "}
        </p>

        <p className="text-[#1e6bb8] py-2 text-base leading-6 hover:underline cursor-pointer">
          Quarter IV AC-361: Embedded Programming using C and Rust{" "}
        </p>

        <p className="font-normal text-2xl py-2 leading-10 text-[#159957]">
          The Outcome for Participants of the Program
        </p>
        <p className="text-[#606c71] text-base leading-6">
          The graduates of this program will own products (Full-Stack App
          Templates, AR and VR Experiences, and APIs) that are marketed globally
          by the Panaverse DAO and, if they like, will also be able to start off
          by offering services at a rate of $50 per hour ($96,000 per year).
          This would give Pakistani professionals and students a fantastic
          opportunity to better their financial situation while also giving the
          economy a much-needed boost by expanding software exports.
        </p>
        <p className="text-[#1e6bb8] py-2 text-base leading-6 hover:underline cursor-pointer">
          Top 5 ‘Metaverse’ jobs that will rule the future of tech industry
        </p>

        <p className="text-[#1e6bb8] py-2 text-base leading-6 hover:underline cursor-pointer">
          Blockchain Developer Salary - Jun 2022{" "}
        </p>

        <p className="text-[#1e6bb8] py-2 text-base leading-6 hover:underline cursor-pointer">
          Blockchain Developer Salary - Jun 2022{" "}
        </p>

        <p className="text-[#1e6bb8] py-2 text-base leading-6 hover:underline cursor-pointer">
          Web3 Salaries Soar to $750,000 for Rank-and-File Devs{" "}
        </p>
        <p className="text-[#1e6bb8] py-2 text-base leading-6 hover:underline cursor-pointer">
          How To Become Metaverse Developer: Scope, Skills, and Salary{" "}
        </p>

        <p className="font-normal text-2xl py-2 leading-10 text-[#159957]">
          Relevant Information Links
        </p>

        <p className="text-[#1e6bb8] py-2 text-base leading-6 hover:underline cursor-pointer">
          Admission Website
        </p>

        <p className="text-[#1e6bb8] py-2 text-base leading-6 hover:underline cursor-pointer">
          Facebook Group{" "}
        </p>

        <p className="text-[#1e6bb8] py-2 text-base leading-6 hover:underline cursor-pointer">
          YouTube Live Channel{" "}
        </p>

        <p className="text-[#1e6bb8] py-2 text-base leading-6 hover:underline cursor-pointer">
          Twitter{" "}
        </p>
        <br />
        <p className="font-normal text-3xl leading-10 text-[#159957]">
          Detailed Course Syllabus
        </p>
        <p className="font-normal text-2xl py-2 leading-10 text-[#159957]">
          Quarter I (Core)
        </p>
        <p className="font-normal text-2xl py-2 leading-10 text-[#159957]">
          CS-101: Object-Oriented Programming using TypeScript
        </p>
        <p className="text-[#606c71] text-base leading-6">Duration: 13 Weeks</p>
        <p className="text-[#606c71] text-base leading-6">
          Course Description:
        </p>
        <p className="text-[#606c71] text-base leading-6">
          We will start the program by learning the fundamentals of
          Object-Oriented programming using JavaScript and TypeScript. We will
          also understand the latest Web trends i.e. Web 3.0 and Metaverse
          concepts and try to understand their working from the perspective of
          the users.
        </p>
        <p className="text-[#606c71] text-base leading-6">Course Outline:</p>
        <p className="font-normal text-base py-2 leading-10 text-[#159957]">
          HTML and CSS (Homework)
        </p>
        <p className="text-[#1e6bb8] py-2 text-base leading-6 hover:underline cursor-pointer">
          Learn HTML by Hira Khan (Watch Recorded Videos)
        </p>
        <p>Learn CSS Intro by Hira Khan (Watch Recorded Videos)</p>
        <p className="font-normal text-base py-2 leading-10 text-[#159957]">
          Web 3.0 and Metaverse Theory
        </p>
        <p className="text-[#1e6bb8] py-2 text-base leading-6 hover:underline cursor-pointer">
          Introduction to Panaverse DAO{" "}
        </p>
        <p className="text-[#1e6bb8] py-2 text-base leading-6 hover:underline cursor-pointer">
          Web 3.0 User Guide
        </p>
        <p className="text-[#1e6bb8] py-2 text-base leading-6 hover:underline cursor-pointer">
          Virtual and Augmented Metaverse User Guide
        </p>
        <p className="font-normal text-base py-2 leading-10 text-[#159957]">
          Fundamentals of JavaScript (ECMAScript 2022 Language Specification)
        </p>
        <p className="text-[#1e6bb8] py-2 text-base leading-6 hover:underline cursor-pointer">
          Learn JavaScript by Zeeshan Hanif (Watch Recorded Videos)
        </p>
        <p className="text-[#1e6bb8] py-2 text-base leading-6 hover:underline cursor-pointer">
          Chapters 2-6, 13 of JavaScript from Beginner to Professional: Learn
          JavaScript quickly by building fun, interactive, and dynamic web apps,
          games, and pages
        </p>
        <p className="text-[#1e6bb8] py-2 text-base leading-6 hover:underline cursor-pointer">
          JavaScript Book Code{" "}
        </p>
        <p className="text-[#1e6bb8] py-2 text-base leading-6 hover:underline cursor-pointer">
          Getting Started Exercises with JavaScript and Node.js
        </p>

        <p className="text-[#606c71] text-base leading-6">
          Topics Covered in the Quiz: <br />
          Background of JavaScript and How to use JavaScript in Browser
          Variables, Primitive data types Analyzing and modifying data types,
          and Operators (Chapter 2 of JavaScript from Beginner to Professional)
        </p>
        <br />
        <p className="text-[#606c71]  py-1 text-base leading-6">
          1: Intro to Node.js, .mjs files, Modules, NPM, import, export, and
          using external modules with npm:
          https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing
          <br />
          How to accept user input in your Node.js JavaScript programs, this
          will allow us to create interactive Node.js console programs using
          prompt-sync library. The last example in this presentation shows you
          how to use prompt-sync library in your Node.js programs:
          https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing
          Note: After this point, we will do all our class work and exercises
          using Node.js in .mjs files. We will also be able to develop
          interactive Node.js console programs which will greatly help the
          students to learn.{" "}
        </p>
        <p className="text-[#606c71] py-1  text-base leading-6">
          2: Using Arrays and Objects in Node.js Programs (chapter 3 of
          JavaScript from Beginner to Professional)
        </p>

        <p className="text-[#606c71]  py-1 text-base leading-6">
          3: Using if and if else statements, else if statements, Conditional
          ternary operators, and switch statements in Node.js programs (chapter
          4 of JavaScript from Beginner to Professional)
        </p>

        <p className="text-[#606c71] py-1  text-base leading-6">
          4: Using while loop, do while loop, for loop, for in, and for of loop
          in Node.js (chapter 5 of JavaScript from Beginner to Professional)
        </p>

        <p className="text-[#606c71] py-1  text-base leading-6">
          5: Using Basic functions, Function arguments, Return, Variable scope
          in functions, Recursive functions, Nested functions, Anonymous
          functions, and Function callbacks in Node.js (chapter 6 of JavaScript
          from Beginner to Professional)
        </p>
        <p className="text-[#606c71] py-1  text-base leading-6">
          6: Using Concurrency, Callbacks, Promises, async / await, and Event
          loop (chapter 13 of JavaScript from Beginner to Professional)
        </p>

        <p className="text-[#606c71] py-1 text-base leading-6">
          7: JavaScript promises, mastering the asynchronous
        </p>

        <p className="text-[#606c71] py-1 text-base leading-6">
          https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript
        </p>
        <br />
        <iframe
        width="100%"
        height="500"
        src="https://www.youtube.com/embed/TZFiUIRp_8Y"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
<br />
        <p className="font-normal text-2xl py-2 leading-10 text-[#159957]">
          Table{" "}
        </p>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Class
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Roll No
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Marks
              </th>
              {/* Add more header columns as needed */}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap">{item.column1}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.column2}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.column3}</td>

                {/* Add more columns as needed */}
              </tr>
            ))}
          </tbody>
        </table>
        <br />

        <p className="font-normal text-2xl py-2 leading-10 text-[#159957]">
          Contact Us
        </p>

        <form className="max-w-md mx-auto my-8">
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-[#159957] text-sm font-bold mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="w-full px-3 py-2 border  border-[#159957]  rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-[#159957] text-sm font-bold mb-2"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="w-full px-3 py-2 border  border-[#159957]  rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-[#159957] text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-[#159957] rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-[#159957] text-sm font-bold mb-2"
            >
              Message
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2  border-[#159957]  border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-[#159957] text-white px-4 py-2 rounded-md  focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Contact Us{" "}
          </button>
        </form>
      </div>
    </main>
  );
}
