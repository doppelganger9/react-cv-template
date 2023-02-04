function ListItem({ item }) {
  return (
    <li key={item}>
      {item}
    </li>
  );
}

export function Interests(props: LanguageDetailsProps) {
  const { title, list } = props;
  return (
    <div className="languages-container container-block">
      <h2 className="container-block-title">{title || 'Interests'}</h2>
      <ul className="list-unstyled interests-list">
        {list.map((item) => {
          return ListItem({item});
        })}
      </ul>
    </div>
  );
}

type LanguageDetailsProps = {
  list: string[],
  title: string
};
