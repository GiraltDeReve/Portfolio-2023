import React, { useState, useEffect } from 'react';

const Github = ({ repo }) => {
  const [commitCount, setCommitCount] = useState(0);

  useEffect(() => {
    fetch(`https://api.github.com/repos/GiraltDeReve/${repo}/commits`)
      .then(response => response.json())
      .then(data => {
        setCommitCount(data.length);
      })
      .catch(error => {
        console.log(`Une erreur s'est produite lors de la récupération des commits du dépôt ${repo}:`, error);
      });
  }, [repo]);

  return (
    <div>
      {commitCount > 0 && <p className='commit'>Nombre de commits pour {repo} : {commitCount}</p>}
    </div>
  );
};

export default Github;