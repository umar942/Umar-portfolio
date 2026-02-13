import { useQuery } from "@tanstack/react-query";

interface GithubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  topics: string[];
  stargazers_count: number;
  language: string;
}

export function useGithubRepos(username: string) {
  return useQuery({
    queryKey: ["github", username],
    queryFn: async () => {
      const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
      if (!res.ok) throw new Error("Failed to fetch repositories");
      return await res.json() as GithubRepo[];
    },
  });
}
