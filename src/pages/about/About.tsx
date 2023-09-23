export interface IAboutProps {
}

export default function About (props: IAboutProps) {
    
  return (
    <>
    <section className="flex flex-col space-y-6 mx-auto p-2">
      <h1 className="text-4xl">Professionally</h1>
			<p>Hello, I'm Nathan. </p>
			<p>A quick preface: I won't waste your time with embellishments. I'm an aspiring full-stack developer. I went through a bootcamp, so I have a baseline for developing web application, but obviously I still have to learn about development. What I am is an avid learner, constantly absorbing new patterns and technologies. There is an experience gap to close before I'm up to full speed, but I'm working on that every day.</p>
      <h2 className="text-3xl">Focus</h2>
      <p>I'm a full-stack web developer based in St. Louis, MO.</p>
      <p>My tech career started in 2022 with Launchcode's web-development bootcamp. The program taught a mix of development skills: single page applications, RESTful APIs, Relational databases, unit testing, core language skills, and most importantly collaborative development in an agile environment.</p>
      <p>My current focus is learning React development, but my next priorities are cloud deployment in AWS, CI/CD pipelines, and database skill refinement.</p>
      <h3 className="text-xl">Backend</h3>
      <p>Java was the language where I started. I first learned a bit in college, then later fleshed out my fundamentals in University of Helsinki's open online Java program. In 2022, I went through Launchcode's web development course where I started using Java and Spring Boot to build RESTful APIs.</p>
      <p>For part of Launchcode's capstone project, my team and I developed a persistent, monolithic, RESTful api utilizing an MVC pattern, built with Spring Boot. It was a useful project to combine the techniques and skills I learned in the class while finding and filling the gaps in my knowledge. To be particular, the backend concepts I got to delve deeper into were authentication, authorization, and API design.</p>
      <h3 className="text-xl">Frontend</h3>
       
      <h2 className="text-2xl">Background</h2>
      <h3 className="text-xl">Education</h3>
      <p>Lauchcode</p>
      <p>Principia College</p>
      <h3 className="text-xl">Notable projects</h3>
      <h4 className="text-l">Aspen Global Change Institute: Archive Editing</h4>
      <p></p>
      <h4 className="text-l">Taste Buddies</h4>
      

      {/* <div className="flex flex-row justify-around w-full">
        <figure className="min-w-[6rem]">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
        </figure>
        <figure className="min-w-[6rem]">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Logo of the Spring framework"/>
        </figure>
      </div>
      <p>My backend projects have been built out with Java using the Spring Boot framework. I first learned a bit of Java in college, then started using it in earnest for building web apps in Launchcode.</p> */}

    </section>
    </>
  );
}
