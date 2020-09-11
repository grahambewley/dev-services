import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import classes from './ProjectCard.module.css';

const ProjectCard = ({ proj }) => {
  console.log(proj.name);
  return (
    <div className={classes.project}>
      <h2 className={classes.project__name}>{proj.name}</h2>
      {proj.sections.map(section => {
        return (
          <div className={classes.project__section}>
            <h3 className={classes.project__sectionLabel}>
              <FontAwesomeIcon
                icon={section.icon}
                className={classes.project__sectionLabelIcon}
              />
              {section.name}
            </h3>
            <ul className={classes.project__itemList}>
              {section.items.map(item => {
                return (
                  <li className={classes.project__item}>
                    <FontAwesomeIcon
                      className={classes.project__itemIcon}
                      icon={item.icon ?? faDesktop}
                    />
                    {item.value}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCard;
