import ProfilePicture from '../../assets/nathan-and-ru.jpg'
import LCLogo from '../../assets/launchcode_logo.svg'

export interface IAboutProps {}

export default function About(props: IAboutProps) {
  const introContent = {
    title: "Hello, I'm Nathan",
    bodyText: [
      "I'm a recent graduate from Lauchcode (a non-profit bootcamp here in St Louis). With that, I have a foundation in full-stack development, but I know I still have a lot to learn.",
      'My background is in video production. I freelanced as a video editor and am used to managing projects. I like the creative work, but not the instability that came with freelancing.',
    ],
  }
  const stackContent = {
    techStack: 'Stack',
    bodyText: [
      'I work in a Spring, Angular stack for now. I had some Java and OOP fundementals before Launchcode which helped me get comfortable using Spring Boot for backend development in the class.',
      'My only experience with frontend development was a couple web-design classes in college that made heavy use of Dreamweaver. In Launchcode, we learned server rendered templating with Thymeleaf then transitioned to SPAs with Angular.',
    ],
  }
  const learningContent = {
    currentFocus:
      "I'm learning React at the moment, as well as AWS, CI/CD workflows, containerization, and expanding my grasp on design patterns.",
  }
  const devIconLinks = {
    java: {
      link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      altText: 'Java language logo',
    },
    spring: {
      link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
      altText: 'Spring framework logo',
    },
  }
  return (
    <>
      <section className="mx-auto mb-4">
        <h1 className="text-5xl">{introContent.title}</h1>
        <img
          src={ProfilePicture}
          alt="A picture of Nathan. He is bent over the camera with long curly hair around his face. A cat rests on his back looking at something out of frame."
          className="rounded-full shadow-lg border-8 border-white"
        />
        <div className="bg-cyan-100 p-3 mb-6 shadow-sm">
          <p className="">{introContent.bodyText[0]}</p>
          <img src={LCLogo} alt="Logo for launchcode" className="max-w-lg" />
          <p className="">{introContent.bodyText[1]}</p>
        </div>
        <h2 className="text-4xl">{stackContent.techStack}</h2>
        <div
          className="bg-amber-300 p-3 mb-6 shadow-sm flex flex-wrap gap-2"
          id="tech-stack-card"
        >
          <div className="min-w-[4rem] flex flex-col lg:flex-row lg:min-w-min lg:mx-auto gap-2">
            {Object.entries(devIconLinks).map(([key, value]) => {
              return (
                <figure
                  className="min-w-full lg:min-w-full bg-white rounded-2xl border-8 border-white"
                  id={key + '-logo'}
                  key={key}
                >
                  <img src={value.link} alt={value.altText} />
                </figure>
              )
            })}
          </div>
          {stackContent.bodyText.map((content, i) => {
            return (
              <p key={'devStack-' + i} className="max-w-[75%] lg:max-w-none">
                {content}
              </p>
            )
          })}
        </div>
        <div className="bg-pink-500">
          <p>{learningContent.currentFocus}</p>
        </div>
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
