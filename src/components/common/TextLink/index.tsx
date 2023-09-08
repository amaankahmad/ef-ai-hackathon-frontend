const TextLink = ({ text, link }) => {
  return (
    <a href={link} className="text-blue-500 underline">
      {text}
    </a>
  );
};

export default TextLink;
