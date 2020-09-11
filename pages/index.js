import Head from 'next/head';
import classes from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDesktop,
  faServer,
  faTh,
  faThumbtack
} from '@fortawesome/free-solid-svg-icons';
import { faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';

import ProjectCard from '../components/ProjectCard/ProjectCard';

const projects = [
  {
    pinned: true,
    name: 'Project 1',
    sections: [
      {
        name: 'Front End',
        icon: faDesktop,
        items: [
          {
            type: 'Language',
            value: 'React.js',
            icon: faReact
          },
          {
            type: 'Host',
            value: 'Netlify'
          }
        ]
      },
      {
        name: 'Back End',
        icon: faServer,
        items: [
          {
            type: 'Language',
            value: 'Node.js',
            icon: faNodeJs
          },
          {
            type: 'Database',
            value: 'MongoDB'
          }
        ]
      }
    ]
  },
  {
    name: 'Project 2',
    sections: [
      {
        name: 'Front End',
        icon: faDesktop,
        items: [
          {
            type: 'Language',
            value: 'React.js',
            icon: faReact
          },
          {
            type: 'Host',
            value: 'Netlify'
          }
        ]
      },
      {
        name: 'Back End',
        icon: faServer,
        items: [
          {
            type: 'Language',
            value: 'Node.js'
          },
          {
            type: 'Database',
            value: 'MongoDB'
          }
        ]
      }
    ]
  },
  {
    name: 'Project 3',
    sections: [
      {
        name: 'Front End',
        icon: faDesktop,
        items: [
          {
            type: 'Language',
            value: 'React.js',
            icon: faReact
          },
          {
            type: 'Host',
            value: 'Netlify'
          }
        ]
      },
      {
        name: 'Back End',
        icon: faServer,
        items: [
          {
            type: 'Language',
            value: 'Node.js'
          },
          {
            type: 'Database',
            value: 'MongoDB'
          }
        ]
      }
    ]
  }
];

export default function Home() {
  return (
    <div className={classes.container}>
      <Head>
        <title>Web Dev Services</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={classes.pinnedSection}>
        <h2 className={classes.projectGrid__label}>
          <FontAwesomeIcon
            className={classes.projectGrid__labelIcon}
            icon={faThumbtack}
          />
          Pinned
        </h2>
        <div className={classes.projectGrid}>
          {projects.map(proj => {
            return proj.pinned ? <ProjectCard proj={proj} /> : null;
          })}
        </div>
      </div>

      <div className={[classes.projectGrid]}>
        {projects.map(proj => {
          return !proj.pinned ? <ProjectCard proj={proj} /> : null;
        })}
      </div>
    </div>
  );
}
