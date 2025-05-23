import { gql } from '@apollo/client'

export const GET_MAIN_PAGE_DATA = gql`
  query GetMainPageData($distinct: Boolean) {
    recentProjects(limit: 3) {
      createdAt
      key
      leaders
      name
      openIssuesCount
      repositoriesCount
      type
    }
    recentPosts(limit: 6) {
      authorName
      authorImageUrl
      publishedAt
      title
      url
    }
    recentChapters(limit: 3) {
      createdAt
      key
      leaders
      name
      suggestedLocation
    }
    topContributors(limit: 18) {
      avatarUrl
      login
      name
      projectKey
      projectName
    }
    recentIssues(limit: 5, distinct: $distinct) {
      author {
        avatarUrl
        login
        name
      }
      createdAt
      repositoryName
      title
      url
    }
    recentPullRequests(limit: 5, distinct: $distinct) {
      author {
        avatarUrl
        login
        name
      }
      createdAt
      title
      repositoryName
      url
    }
    recentReleases(limit: 9, distinct: $distinct) {
      author {
        avatarUrl
        login
        name
      }
      name
      publishedAt
      repositoryName
      tagName
      url
    }
    sponsors {
      imageUrl
      name
      sponsorType
      url
    }
    statsOverview {
      activeChaptersStats
      activeProjectsStats
      contributorsStats
      countriesStats
    }
    upcomingEvents(limit: 6) {
      category
      endDate
      key
      name
      startDate
      summary
      suggestedLocation
      url
    }
  }
`
