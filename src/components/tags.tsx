import { Section } from './shared/section';

function ListItem(props) {
  const { item, i } = props;
  return (
    <li className="item" key={`tag_item_${i}`}>
      {item}
    </li>
  );
}

export function Tags(props: TagsProps) {
  const { icon, sectionTitle, list } = props;

  return (
    <Section
      className="tags-section"
      icon={icon || 'rocket'}
      id="tags"
      title={sectionTitle || 'Skills & Proficiency'}
    >
      <div className="skills">
        <ul className="skillset">
          {list.map((item, i) => {
            return ListItem({item, i});
          })}
        </ul>
      </div>
    </Section>
  );
}

type TagsProps = {
  list: string[],
  sectionTitle: string,
  icon?: string
};
