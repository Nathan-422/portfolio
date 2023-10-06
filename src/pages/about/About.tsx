import ProfilePicture from '../../assets/nathan-and-ru.jpg'
import LCLogo from '../../assets/launchcode_logo.svg'

export interface IAboutProps {}

export default function About(props: IAboutProps) {
  const introContent = {
    title: ["Hello, ", "I'm Nathan",],
    bodyText: [
      "I'm a recent graduate from Lauchcode (a non-profit bootcamp here in St Louis). With that, I have a foundation in full-stack development, but I know I still have a lot to learn.",
      'My background is in video production. I freelanced as a video editor and am used to managing projects. It was fun work, but at this point I\'m looking for a career with more stability.',
			'Why you should hire me, beyond the standard fast learner, passionate about tech, that you\'ll hear from everyone is that I work well on a team. I work hard to get to know my co-workers. I pride myself on getting to know their strengths, their blind spots, how they work, and what they like doing. Understanding my team allows me to contribute how I\'ll be most effective.',
			'Furthermore, my preference is for working on diverse teams. I truely believe that our differences empower us to learn and grow.'
    ],
  }
  const stackContent = {
    techStack: 'Stack',
    bodyText: [
      'I work in a Spring, Angular stack at the moment. I had some Java and OOP fundementals before Launchcode which helped me get comfortable using Spring Boot for backend development in the class.',
      'My experience with frontend development was a couple web-design classes in college that made heavy use of Dreamweaver. In Launchcode, we learned server rendered templating with Thymeleaf then transitioned to SPAs with Angular.',
    ],
  }
  const learningContent = {
    header: 'Learning',
    currentFocus: [
      "I'm learning React at the moment, as well as AWS, CI/CD workflows, containerization, and expanding my grasp on design patterns.",
			'My immidiate goal is to start working in full-stack development. Ultimately, I think I\'d rather work on backend projects, but I don\'t have the perspective to say that with confidence now.' 
		]
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
    mySQL: {
      link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      altText: 'MySQL logo',
    },
    angular: {
      link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg',
      altText: 'Angular framework logo',
    },
    react: {
      link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      altText: 'React library logo',
    },
    tailwind: {
      link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
      altText: 'TailwindCSS logo',
    },
  }
  return (
    <>
      <article className="[&>section]:mb-4 [&>section]:shadow-sm ">
        <div className="mb-4 grid grid-cols-wrapper items-center md:justify-items-center  md:grid-cols-splitwrapper">
          <h1 className="mx-auto col-start-2 text-5xl md:col-start-2 md:text-right">
            {introContent.title[0]}<br />{introContent.title[1]}
          </h1>
          <img
            src={ProfilePicture}
            alt="A picture of Nathan. He is bent over the camera with long curly hair around his face. A cat rests on his back looking at something out of frame."
            className="col-start-2 mx-auto max-w-sm rounded-full border-8 border-white shadow-lg md:col-start-3"
          />
        </div>
        <section className="relative grid grid-cols-wrapper">
          <div className="before:grid-left-bg-fill after:grid-right-bg-fill col-start-2 grid bg-cyan-100 py-4">
            <p className="">{introContent.bodyText[0]}</p>
            <img src={LCLogo} alt="Logo for launchcode" className="max-w-lg" />
            <p className="">{introContent.bodyText[1]}</p>
          </div>
        </section>
        <h2 className="wrapper mb-4 mt-8 text-4xl">{stackContent.techStack}</h2>
        <section className="relative grid grid-cols-wrapper">
          <div
            className="before:grid-left-bg-fill after:grid-right-bg-fill col-start-2 gap-2 bg-amber-300 py-4 lg:flex lg:flex-wrap"
            id="tech-stack-card"
          >
            <div className="float-right flex min-w-[4rem] flex-col gap-2 lg:min-w-full lg:flex-row">
              {Object.entries(devIconLinks).map(([key, value]) => {
                return (
                  <figure
                    className="h-full w-full rounded-lg border-8 border-white bg-white lg:rounded-2xl"
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
                <p key={'devStack-' + i} className="max-w-[90%] lg:max-w-none">
                  {content}
                </p>
              )
            })}
          </div>
        </section>
        <h2 className="wrapper mb-4 mt-8 text-4xl">{learningContent.header}</h2>
        <section className="relative grid grid-cols-wrapper">
          <div className="before:grid-left-bg-fill after:grid-right-bg-fill col-start-2 bg-pink-500 py-4 text-white">
            {learningContent.currentFocus.map((content, i) => {
              return (
                <p key={'currentFocus' + i}>
                  {content}
                </p>
              )
						})}
          </div>
        </section>
        <p className="col-start-2">
          For part of Launchcode's capstone project, my team and I developed a
          persistent, monolithic, RESTful api utilizing an MVC pattern, built with
          Spring Boot. It was a useful project to combine the techniques and skills I
          learned in the class while finding and filling the gaps in my knowledge. To
          be particular, the backend concepts I got to delve deeper into were
          authentication, authorization, and API design.
        </p>
        {/* <div className="flex flex-row justify-around w-full">
          <p>My backend projects have been built out with Java using the Spring Boot framework. I first learned a bit of Java in college, then started using it in earnest for building web apps in Launchcode.</p> */}
      </article>
    </>
  )
}
