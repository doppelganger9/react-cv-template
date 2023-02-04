function ListItem(props) {
  const { item, i } = props;
  return (
    <div className="item" key={`education_item_${i}`}>
      <h4 className="degree">{item.degree}</h4>
      <h5 className="meta">{item.school}</h5>
      <div className="time">{item.date}</div>
    </div>
  );
}

export function EducationDetails(props: EducationDetailsProps) {
  const { list, title } = props;
  return (
    <div className="education-container container-block">
      <h2 className="container-block-title">{title || 'Education'}</h2>
      {list.map((item, i) => {
        return ListItem({item, i});
      })}
    </div>
  );
}

type EducationDetailsProps = {
  list: any[],
  title: string
};
