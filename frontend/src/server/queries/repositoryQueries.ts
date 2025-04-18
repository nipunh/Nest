import { gql } from '@apollo/client'

export const GET_REPOSITORY_DATA = gql`
  query GetRepository($repositoryKey: String!) {
    repository(repositoryKey: $repositoryKey) {
      commitsCount
      contributorsCount
      createdAt
      description
      forksCount
      key
      issues {
        author {
          avatarUrl
          login
          name
        }
        repositoryName
        createdAt
        title
      }
      languages
      license
      name
      openIssuesCount
      releases {
        author {
          avatarUrl
          name
          login
        }
        isPreRelease
        name
        publishedAt
        repositoryName
        tagName
      }
      size
      starsCount
      topContributors {
        avatarUrl
        contributionsCount
        login
        name
      }
      topics
      updatedAt
      url
    }
  }
`
