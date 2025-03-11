import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import resources from "../ressurser";

const Resources = ({ category }) => {
  const { category: routeCategory } = useParams();
  const [resource, setResource] = useState(null);

  useEffect(() => {
    const categoryMapping = {
      "html": "HTML",
      "css": "CSS",
      "javascript": "JavaScript",
      "react": "React",
      "sanity-and-headless-cms": "Sanity and headless CMS",
    };

    const normalizedCategory = categoryMapping[routeCategory] || category;
    const foundResource = resources.find(res => res.category === normalizedCategory);
    
    setResource(foundResource);
  }, [routeCategory, category]);

  if (!resource) return <p>Fant ikke ressurs</p>;

  return (
    <main className="content">
      <h1>{resource.category}</h1>
      <p>{resource.text}</p>
      <ul>
        {resource.sources.map(source => (
          <li key={source.url}>
            <a href={source.url} target="_blank" rel="noopener noreferrer">{source.title}</a>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Resources;
