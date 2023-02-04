function ListItem({item, i}) {
  return (
    <li key={`language_item_${i}`}>
      {item.name}
      <span className="lang-desc">
        {'  '}
(
        {item.level}
)
      </span>
    </li>
  );
}

export function LanguageDetails(props: LanguageDetailsProps) {
  const { title, list } = props;
  return (
    <div className="languages-container container-block">
      <h2 className="container-block-title" key="lang_header">{title || 'Languages'}</h2>
      <ul className="list-unstyled interests-list" key="lang_list">
        {list.map((item, i) => {
          return ListItem({item, i});
        })}
      </ul>
    </div>
  );
}

type LanguageDetailsProps = {
  list: string[],
  title: string
};
