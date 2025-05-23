import { RepositoryCardProps } from './project'

export type user = {
  avatar_url: string
  bio: string
  company: string
  created_at: number
  email: string
  followers_count: number
  following_count: number
  key: string
  location: string
  login: string
  name: string
  objectID: string
  public_repositories_count: number
}

export type RepositoryDetails = {
  key: string
  ownerKey: string
}

export type Issue = {
  createdAt: number
  number: number
  repository: RepositoryDetails
  title: string
  url: string
}

export type Release = {
  isPreRelease: boolean
  name: string
  publishedAt: number
  repository: RepositoryDetails
  tagName: string
  url: string
}

export type User = {
  avatar_url: string
  bio?: string | null
  company?: string | null
  created_at: number
  email?: string | null
  followers_count: number
  following_count: number
  issues?: Issue[]
  issues_count?: number
  key: string
  location?: string | null
  login: string
  name?: string | null
  public_repositories_count: number
  releases?: Release[]
  releases_count?: number
  url: string
}

export interface UserDetailsProps {
  avatarUrl: string
  bio: string | null
  company: string | null
  createdAt: string
  email: string | null
  followersCount: number
  followingCount: number
  issues?: Issue[]
  issuesCount: number
  location: string | null
  login: string
  name: string | null
  publicRepositoriesCount: number
  releases?: Release[]
  releasesCount: number
  topRepositories: RepositoryCardProps[]
  url: string
}

export interface PullRequestsType {
  createdAt: string
  repositoryName?: string
  title: string
  url: string
}

export interface ItemCardPullRequests {
  createdAt: string
  title: string
  author: {
    login: string
    avatarUrl: string
    key: string
    name: string
  }
  url: string
}
