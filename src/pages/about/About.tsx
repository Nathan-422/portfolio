export interface IAboutProps {
}

export default function About (props: IAboutProps) {
    
  return (
    <>
    <section className="flex flex-col justify-center space-y-6 mx-6 lg:mx-6 xl:mx-72">
      <h1 className="text-3xl">Professionally</h1>
      <p>A quick promise. I'll be honest and frank. I won't waste your time with embellishments. There's a lot I still have to learn about software development, but I do have ten years of experience in project-based video-production and a perpetual learner's mindset.</p>
      <h2 className="text-3xl lg:text-4xl">Focus</h2>
      <p>I'm a full-stack web developer based in St. Louis, MO.</p>
      <p>My tech career started in 2022 with Launchcode's web-development bootcamp. The program taught a mix of development skills: single page applications, RESTful APIs, Relational databases, unit testing, core language skills, and most importantly collaborative development in an agile environment.</p>
      <p>My current focus is learning React development, but my next priorities are cloud deployment in AWS, CI/CD pipelines, and database skill refinement.</p>
      <p>My professional aspirations are to move into Java API development.</p>
      <h2 className="text-2xl">Backend</h2>
      <div className="flex flex-row justify-around w-100 sm:h-12 md:h-16 lg:h-20 xl:h-36 max-h-24">
        <figure className="aspect-square max-h-60 ">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
        </figure>
        <figure className="aspect-square max-h-60 ">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Logo of the Spring framework"/>
        </figure>
      </div>
      <p>My backend projects have been built out with Java using the Spring Boot framework. I first learned a bit of Java in college, then started using it in earnest for building web apps in Launchcode.</p>

    </section>
    </>
  );
}
