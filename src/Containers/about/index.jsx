import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../Components/PageHeaderContent";
import { Animate } from "react-simple-animate";
import './styles.scss';

import { DiApple, DiAndroid } from 'react-icons/di'
import { FaDev, FaDatabase} from 'react-icons/fa'
const personalDetails = [
    {
        label: "Name",
        value: "Anjumara.Shaik"
    },
    {
        label: "Age",
        value: "23"
    },
    {
        label: "Address",
        value: "India"
    },
    {
        label: "Email",
        value: "shaikanjumara6@gmail,com"
    },
    {
        label: "Contact No",
        value: "+91 8185004230"
    },
];
const jobSummary =
    ' A highly motivated and detailed-oriented Front-End Developer with a strong foundation in web development technologies such as HTML,CSS,JavaScript and React.ja. Passionate about creating responsive,user-friendly interfaces and continuously learning modern front-end frameworks and design principles.Eager to contribute to dynamic development teamsand grow through hands-on experience in real-world projects.Possess a good understanding of Git, basic UI/UX concepts, and  responsive web design. '
const About = () => {
    return (
        <section id="about" className="about">
            <PageHeaderContent
                headerText="About Me"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="about__content">
                <div className="about__content__personalWrapper"><Animate
                    play
                    duration={1.5}
                    delay={1}
                    start={{
                        transform: "translateX(-900px)",
                    }}
                    end={{
                        transform: "translatex(0px)",
                    }}
                >
                    <h3>Front End Developer</h3>
                    <p>{jobSummary}</p>
                </Animate>

                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: "translateX(500px)",
                        }}
                        end={{
                            transform: "translatex(0px)",
                        }}
                    >
                        <h3 className="personalInformationHeaderText">Personal Information</h3>
                        <ul>
                            {
                                personalDetails.map((item, i) => (
                                    <li key={i}>
                                        <span className="title">{item.label}</span>
                                        <span className="value">{item.value}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </Animate>
                </div>

                <div className="about__content__servicesWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: "translateX(600px)",
                        }}
                        end={{
                            transform: "translatex(0px)",
                        }}
                    >
                    <div className="about__content__servicesWrapper__innerContent">
                        <div>
                            <FaDev size={60} color="var(--yellow-theme-main-color)" />
                        </div>
                        <div>
                            <DiAndroid size={60} color="var(--yellow-theme-main-color)" />
                        </div>
                        <div>
                            <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
                        </div>
                        <div>
                            <DiApple size={60} color="var(--yellow-theme-main-color)" />
                        </div>
                        </div>
                        </Animate>
                </div>
            </div>
        </section >
    );
};
export default About;