function ProfilePicture({ imagePath }) {
  if (imagePath) {
    return (<img className="profile" src={imagePath} alt="" style={{ maxWidth: 185 }} />);
  }
  return null;
}

export function ProfileContainer(props: ProfileContainerProps) {
  const { title, name, imagePath } = props;
  return (
    <div className="profile-container">
      {ProfilePicture({imagePath})}
      <h1 className="name" style={{ fontSize: 25 }}>{ name }</h1>
      { title.split(', ').map((titleWords, i) => (<h3 className="tagline" key={i}>{titleWords}</h3>)) }
    </div>
  );
}

type ProfileContainerProps = {
  name: string,
  title: string,
  imagePath?: string
};
