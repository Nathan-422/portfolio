import { Card } from "../../components/card/Card";
import { java, typescript } from "../../assets/icons";

export interface IAboutProps {
}

export default function About (props: IAboutProps) {
  
  const content = [
    {
      body: "A quick promise. I'll be honest and frank. I won't waste your time with embellishments. There's a lot I still have to learn about software development, but I do have ten years of experience in project-based video-production and a perpetual learner's mindset."
    },
    {
      body: "I'm a full-stack web developer based in St. Louis, MO. My tech career started in 2022 with Launchcode's web-development bootcamp. The program taught a mix of development skills: single page applications, RESTful APIs, Relational databases, unit testing, core language skills, and most importantly collaborative development in an agile environment. My current focus is learning React development, but my next priorities are cloud deployment in AWS, CI/CD pipelines, and database skill refinement. My professional aspirations are to move into Java API development."
    },
  ]

  
  return (
    <>
    <img src={java} alt="Java logo"/>
    <img src={typescript} alt="Typescript logo" />

    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 2674.9 417" className="logo">
      <g style={{fill: "6cb52d"}}>
        <path style={{fill: "6cb52d"}} className="st0" d="M366.9,29c-5.8,14.1-13.3,26.6-21.6,37.8c-36.6-37.3-87.8-61-144.3-61C90,5.8-0.7,96-0.7,207.4 c0,58.2,24.9,110.6,64.4,147.6l7.5,6.7c34.9,29.5,80.3,47.4,129.7,47.4c106,0,193.3-82.7,200.8-187.1 C407.7,171.3,392.3,106.4,366.9,29z M92.9,356.7c-5.8,7.5-16.6,8.3-24.1,2.5s-8.3-16.6-2.5-24.1s16.6-8.3,24.1-2.5 C97.5,338.4,98.7,349.2,92.9,356.7z M365.7,296.4c-49.5,66.1-155.9,43.7-223.7,47c0,0-12.1,0.8-24.1,2.5c0,0,4.6-2.1,10.4-4.2 c47.8-16.6,70.3-20,99.4-34.9c54.5-27.9,108.9-89,119.8-152.2c-20.8,60.7-84,113.1-141.4,134.3c-39.5,14.6-110.6,28.7-110.6,28.7 l-2.9-1.7c-48.2-23.7-49.9-128.5,38.3-162.2c38.7-15,75.3-6.7,117.3-16.6c44.5-10.4,96.1-43.7,116.8-87.3 C388.1,120.1,416.4,229,365.7,296.4z"></path>
      </g>
      <g>
        <path className="st1" d="M92.9,356.7c-5.8,7.5-16.6,8.3-24.1,2.5s-8.3-16.6-2.5-24.1s16.6-8.3,24.1-2.5 C97.5,338.4,98.7,349.2,92.9,356.7z"></path>
        <path className="st3" d="M365.7,296.4c-49.5,66.1-155.9,43.7-223.7,47c0,0-12.1,0.8-24.1,2.5c0,0,4.6-2.1,10.4-4.2 c47.8-16.6,70.3-20,99.4-34.9c54.5-27.9,108.9-89,119.8-152.2c-20.8,60.7-84,113.1-141.4,134.3c-39.5,14.6-110.6,28.7-110.6,28.7 l-2.9-1.7c-48.2-23.7-49.9-128.5,38.3-162.2c38.7-15,75.3-6.7,117.3-16.6c44.5-10.4,96.1-43.7,116.8-87.3 C388.1,120.1,416.4,229,365.7,296.4z"></path>
      </g>
    </svg>  

    <div className="flex flex-col justify-center space-y-6">
      {content.map((item) => {
          return (
            <Card 
            {...item}
            key={crypto.randomUUID()}>
              {item.body}
            </Card>	
          )
        })}
      </div>
    </>
  );
}
