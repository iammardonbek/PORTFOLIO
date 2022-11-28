import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { about } from "../../portfolio";
import { TypeAnimation } from "react-type-animation";
import "./About.css";

const About = () => {
  const { name, role, description, resume, social } = about;
  console.log("render");
  return (
    <div className="about center">
      {name && (
        <h1 className="">
          Hi, I am{" "}
          <p className="about__name animate__animated animate__lightSpeedInRight">
            {name}
          </p>
        </h1>
      )}

      {role && (
        <TypeAnimation
          className="about__role"
          sequence={[`A ${role}.`, 1000, ""]}
          speed={1} // Must be in range between 1 and 99!
          wrapper="h2"
          repeat={Infinity}
        />
      )}
      <p className="about__desc">{description && description}</p>

      <div className="about__contact center">
        {resume && (
          <a href={resume}>
            <span type="button" className="btn btn--outline">
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label="github"
                className="link link--icon"
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label="linkedin"
                className="link link--icon"
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default About;
