import { Section } from './shared/section';

function ListItem(props) {
  const { item, i } = props;
  return (
    <div className="item" key={`project_item_${i}`}>
      {ProjectTitle({item})}
       -
      <span
        style={{ marginLeft: 5 }}
        className="project-tagline"
        dangerouslySetInnerHTML={{ __html: item.description }}
      />
    </div>
  );
}

function ProjectTitle(props) {
  const { project } = props;
  let inner = project.title;
  if (project.url) {
    inner = <a href={project.url} target="_blank" rel="noopener noreferrer">{project.title}</a>;
  }
  return (<span className="project-title" style={{ marginRight: 5 }}>{inner}</span>);
}

function Intro(props) {
  const { description } = props;
  if (!description) { return null; }
  return (
    <div className="intro">
      <p dangerouslySetInnerHTML={{ __html: description }} />
    </div>);
}

function Category(props) {
  const { category } = props;
  return (
    <div className="category-item">
      <h5>{category.name}</h5>
      <hr />
      {
        category.list.map((item, i) => ListItem({item, i}))
      }
    </div>
  );
}

export function Projects(props: ProjectsProps) {
  const {
    icon,
    sectionTitle,
    categories,
    description
  } = props;

  return (
    <Section
      className="projects-section"
      icon={icon || 'archive'}
      id="projects"
      title={sectionTitle || 'Projects'}
    >
      { Intro({description}) }
      <div className="projects">
        {
          categories.map((c) => {
            return Category({c});
          })
        }
      </div>
    </Section>
  );
}

type ProjectsProps = {
  categories: any[],
  description: string,
  sectionTitle: string,
  icon?: string
};
