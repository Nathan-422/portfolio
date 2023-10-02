import ProfilePicture from '../../assets/nathan-and-ru.jpg'
import LCLogo from '../../assets/launchcode_logo.svg'

export interface IAboutProps {}

export default function About(props: IAboutProps) {
  const introContent = {
    title: "Hello, I'm Nathan",
    bodyText: [
      "I'm a recent graduate from Lauchcode (a 501(c)3 bootcamp here in St Louis). I have a foundation to work on, but I'm certainly aware I have a lot to learn.",
      'I do have a background in video production. I freelanced as a video editor and am used to managing projects. I like the creative work, but not the instability of freelancing hence the career change.',
    ],
  }
  const stackContent = {
    techStack: 'Stack',
    bodyText: [
      'I work in a Spring, Angular stack for now. I knew some Java fundementals before Launchcode, but developed those skills further in Launchcode.',
    ],
  }
  const learningContent = {
    currentFocus:
      "I'm learning React at the moment, as well as AWS, CI/CD workflows, containerization, and expanding my grasp on design patterns.",
  }
  return (
    <>
      <section className="flex flex-col space-y-6 mx-auto p-2">
        <h1 className="text-5xl">{introContent.title}</h1>
        <img
          src={ProfilePicture}
          alt="A picture of Nathan. He is bent over the camera with long curly hair around his face. A cat rests on his back looking at something out of frame."
          className="rounded-full shadow-lg border-8 border-white"
        />
        <div className="bg-cyan-50 p-3 mb-6 rounded-md shadow-md">
          <p className="mb-2">{introContent.bodyText[0]}</p>
          <img src={LCLogo} alt="Logo for launchcode" className="my-2" />
          <p className="">{introContent.bodyText[1]}</p>
          <p className="">{introContent.bodyText[2]}</p>
        </div>
        <h2 className="text-4xl">{stackContent.techStack}</h2>
        <div
          className="bg-cyan-50 p-3 mb-6 rounded-md shadow-md flex lg:block gap-2"
          id="tech-stack-card"
        >
          <div className="flex flex-col lg:flex-row w-36 lg:w-48 lg:mx-auto gap-2">
            <figure
              className="min-w-full lg:w-1/2 bg-white rounded-full"
              id="java-logo"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                alt="Java logo"
              />
            </figure>
            <figure className="min-w-full lg:w-1/2" id="spring-logo">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
                alt="Logo of the Spring framework"
              />
            </figure>
          </div>
          <p>{stackContent.bodyText[0]}</p>
        </div>
        <p>{learningContent.currentFocus}</p>
        <p>
          For part of Launchcode's capstone project, my team and I developed a
          persistent, monolithic, RESTful api utilizing an MVC pattern, built with
          Spring Boot. It was a useful project to combine the techniques and skills I
          learned in the class while finding and filling the gaps in my knowledge. To
          be particular, the backend concepts I got to delve deeper into were
          authentication, authorization, and API design.
        </p>
        {/* <div className="flex flex-row justify-around w-full">
        <p>My backend projects have been built out with Java using the Spring Boot framework. I first learned a bit of Java in college, then started using it in earnest for building web apps in Launchcode.</p> */}
      </section>
    </>
  )
}
