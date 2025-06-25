import React from "react";
import ComputerIcon from '@mui/icons-material/Computer';

import Section from "../../components/Section/Section";
import { Icons } from "../../config/icons";
import { CustomSectionsProps } from "../CustomSections/CustomSections";
import CircleButton from "../../components/CircleButton/CircleButton";
import Projects from "./Projects";
import './ProjectSection.scss';

const ProjectsSection: React.FC<CustomSectionsProps> = ({ sectionRefs }) => (
    <Section
        ref={sectionRefs['Projects']}
        sectionHeader="Projects"
        headerIcon={<ComputerIcon />}
    >
        {
            Projects.map((project, index) => (
            <div key={'project-' + index}>
                <h3 className="project-heading">
                    {project.icon} {project.name}
                </h3>

                <h4 className="project-duration">
                    {Icons['schedule']}<em>{project.duration}</em>
                </h4>

                <p className="project-description">{project.description}</p>

                <div className="project-links-container">
                    {project.links.map((link, linkIndex) => (
                        <CircleButton
                            key={'project-link-' + index + linkIndex}
                            link={link.link}
                            target="_blank"
                            tooltip={link.tooltip}
                            size={1.3}
                        >
                            {link.icon}
                        </CircleButton>
                    ))}
                </div>
            </div>
            ))
        }
      </Section>

);

export default ProjectsSection;