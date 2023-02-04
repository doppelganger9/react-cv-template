import { Section } from './shared/section';

function ListItem(props) {
  const { item, i } = props;
  return (
    <div className="item" key={`exp_item_${i}`}>
      <div className="meta">
        <div className="upper-row">
          <h3 className="job-title">{item.title}</h3>
          <div className="time">{item.date}</div>
        </div>
        {CompanySection({company: item.company, companyLink: item.companyLink, companyShortDetail: item.companyShortDetail})}
      </div>
      <div className="details">
        <p dangerouslySetInnerHTML={{ __html: item.description }} />
      </div>
    </div>
  );
}

function CompanySection(props) {
  const { company, companyLink, companyShortDetail } = props;
  if (company && companyLink) {
    return (
      <div className="company">
        {' '}
        <a href={companyLink} target="_blank" rel="noopener noreferrer">{company}</a>
        {' '}
        {companyShortDetail || ''}
      </div>
    );
  }
  return null;
}

export function Experiences(props: ExperiencesProps) {
  const { icon, sectionTitle, list } = props;
  return (
    <Section
      className="experieces-section"
      icon={icon || 'briefcase'}
      title={sectionTitle || 'Experiences'}
      id="experiences"
    >
      {list.map((item, i) => {
        return ListItem({item, i});
      })}
    </Section>
  );
}

type ExperiencesProps = {
  list: any[],
  sectionTitle: string,
  icon?: string
};
