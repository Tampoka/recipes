import { GraphQLClient } from 'graphql-request';

export const query = `
query findRepos($login:String!) {
user(login:$login) {
login
name
location
avatar_url: avatarUrl
repositories(first:100) {
totalCount
nodes {
name
    }
}
}
}
`;
export const client = new GraphQLClient('https://api.github.com/graphql', {
  headers: {
    // Authorization: `Bearer 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`,
  },
});
// client
//     .request(query, {login: "moontahoe"})
//     .then(results => JSON.stringify(results, null, 2))
//     .then(console.log)
//     .catch(console.error);
