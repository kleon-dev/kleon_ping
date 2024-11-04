import { useQuery } from 'react-query';

function fetchGitHubData() {
  return fetch('https://vivid-talented-preface.glitch.me/wake-server').then(res => res.json());
}

function GitHubComponent() {
  const { data, refetch } = useQuery('githubData', fetchGitHubData, {
    refetchInterval: 60000, // Refetch every 60 seconds
  });

  return <div>{data ? data.someField : 'Loading...'}</div>;
}
