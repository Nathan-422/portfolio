import ProfilePicture from '../../assets/nathan-and-ru.jpg'
import LCLogo from '../../assets/launchcode_logo.svg'

export interface IAboutProps {}


export default function About(props: IAboutProps) {
  const introContent = {
    title: ['Hello, ', "I'm Nathan"],
    bodyText: [
      "I'm a recent graduate from Lauchcode (a non-profit bootcamp here in St Louis). I've been learning web development for about a year, and developing apps with Spring, Angular, and React. I'm definitely aware that I still have tons to learn, but I have a solid foundation to work with as I pursue enterprise full-stack development.",
      "My background is in video production. I made educational content for a museum in Boston for a couple years before moving back to St Louis, freelancing as a video editor. It was fun work and I learned to manage projects well, but I'm looking for a career with more stability at this point.",
      "Why you should hire me, beyond the standard fast learner, passionate about tech, that you'll hear from everyone is that I work well on a team. I work hard to get to know my co-workers. I pride myself on getting to know their strengths, their blind spots, how they work, and what they like doing. Understanding my team allows me to contribute how I'll be most effective.",
      'Furthermore, my preference is for working on diverse teams. I truely believe that our differences empower us to learn and grow.',
    ],
  }
  const stackContent = {
    techStack: 'Stack',
    bodyText: [
      'I work in a Spring, Angular stack at the moment. I had Java and OOP fundementals in college. I stayed up on those concepts and that helped me get comfortable using Spring for backend development in Launchcode. ',
      'My experience with frontend development was a couple web-design classes in college that made heavy use of Dreamweaver. In Launchcode, we learned server rendered templating with Thymeleaf then transitioned to SPAs with Angular.',
    ],
  }
  const learningContent = {
    header: 'Learning',
    currentFocus: [
      "I'm learning React at the moment, as well as AWS, CI/CD workflows, containerization, and expanding my grasp on design patterns.",
      "My immidiate goal is to start working in full-stack development. Ultimately, I think I'd rather work on backend projects, but I don't have the perspective to say that with confidence now.",
    ],
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
      <article className="[&>h2]:wrapper [&>h2]:mb-4 [&>h2]:mt-8 [&>h2]:text-5xl [&>section]:mb-4 [&>section]:shadow-sm">
        <div className="grid grid-cols-wrapper md:grid-cols-splitwrapper md:items-center md:justify-items-center  [&>*]:my-4">
          <h1 className="col-start-2 text-5xl md:mx-auto md:text-6xl md:font-semibold">
            {introContent.title[0]}
            <br />
            {introContent.title[1]}
          </h1>
          <img
            src={ProfilePicture}
            alt="A picture of Nathan. He is bent over the camera with long curly hair around his face. A cat rests on his back looking at something out of frame."
            className="col-start-2 mx-auto w-full max-w-[400px] rounded-full border-8 border-white shadow-lg md:col-start-3"
          />
        </div>
        <section className="relative grid grid-cols-wrapper">
          <div className="before:grid-left-bg-fill after:grid-right-bg-fill col-start-2 grid bg-cyan-100 py-4 [&>*]:my-4 ">
            <p className="">{introContent.bodyText[0]}</p>
            <img
              src={LCLogo}
              alt="Logo for launchcode"
              className="max-w-lg md:mx-auto"
            />
            <p className="">{introContent.bodyText[1]}</p>
          </div>
        </section>
        <h2 className="">{stackContent.techStack}</h2>
        <section className="relative grid grid-cols-wrapper">
          <div
            className="before:grid-left-bg-fill after:grid-right-bg-fill col-start-2 flex flex-wrap gap-4 bg-amber-300 py-4 [&>*]:my-4"
            id="tech-stack-card"
          >
            {stackContent.bodyText.map((content, i) => {
              return (
                <p
                  key={'devStack-' + i}
                  className={i + 1 !== 2 ? 'order-' + (i + 1) : 'order-' + (i + 2)}
                >
                  {content}
                </p>
              )
            })}
            <div className="order-2 flex min-w-full flex-wrap gap-4 md:flex-nowrap">
              {Object.entries(devIconLinks).map(([key, value]) => {
                return (
                  <figure
                    className="flex aspect-square w-full max-w-[30%] justify-center rounded-full bg-white align-middle "
                    id={key + '-logo'}
                    key={key}
                  >
                    <img src={value.link} alt={value.altText} className="w-3/5 " />
                  </figure>
                )
              })}
            </div>
          </div>
        </section>
        <h2 className="">{learningContent.header}</h2>
        <section className="relative grid grid-cols-wrapper">
          <div className="before:grid-left-bg-fill after:grid-right-bg-fill col-start-2 bg-pink-500 py-4 text-white [&>*]:my-4">
            {learningContent.currentFocus.map((content, i) => {
              return <p key={'currentFocus' + i}>{content}</p>
            })}
          </div>
        </section>
        {/* <p className="col-start-2">
          For part of Launchcode's capstone project, my team and I developed a
          persistent, monolithic, RESTful api utilizing an MVC pattern, built with
          Spring Boot. It was a useful project to combine the techniques and skills I
          learned in the class while finding and filling the gaps in my knowledge. To
          be particular, the backend concepts I got to delve deeper into were
          authentication, authorization, and API design.
        </p> */}
        {/* <div className="flex flex-row justify-around w-full">
          <p>My backend projects have been built out with Java using the Spring Boot framework. I first learned a bit of Java in college, then started using it in earnest for building web apps in Launchcode.</p> */}
      </article>
    </>
  )
}
