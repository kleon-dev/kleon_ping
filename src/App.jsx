import { useQuery } from 'react-query';

function fetchGitHubData() {
  return fetch('https://api.github.com/some-endpoint').then(res => res.json());
}

function GitHubComponent() {
  const { data, refetch } = useQuery('githubData', fetchGitHubData, {
    refetchInterval: 60000, // Refetch every 60 seconds
  });

  return <div>{data ? data.someField : 'Loading...'}</div>;
}
