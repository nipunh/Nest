'use client'
import { useQuery } from '@apollo/client'
import {
  faCode,
  faCodeFork,
  faExclamationCircle,
  faStar,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import { GET_ORGANIZATION_DATA } from 'server/queries/organizationQueries'
import { formatDate } from 'utils/dateFormatter'
import DetailsCard from 'components/CardDetailsPage'
import LoadingSpinner from 'components/LoadingSpinner'
import { handleAppError, ErrorDisplay } from 'app/global-error'
const OrganizationDetailsPage = () => {
  const { organizationKey } = useParams()
  const [organization, setOrganization] = useState(null)
  const [issues, setIssues] = useState(null)
  const [pullRequests, setPullRequests] = useState(null)
  const [releases, setReleases] = useState(null)
  const [repositories, setRepositories] = useState(null)
  const [topContributors, setTopContributors] = useState(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const { data: graphQLData, error: graphQLRequestError } = useQuery(GET_ORGANIZATION_DATA, {
    variables: { login: organizationKey },
  })

  useEffect(() => {
    if (graphQLData) {
      setOrganization(graphQLData?.organization)
      setIssues(graphQLData?.recentIssues)
      setPullRequests(graphQLData?.recentPullRequests)
      setReleases(graphQLData?.recentReleases)
      setRepositories(graphQLData?.repositories)
      setTopContributors(graphQLData?.topContributors)
      setIsLoading(false)
    }
    if (graphQLRequestError) {
      handleAppError(graphQLRequestError)
      setIsLoading(false)
    }
  }, [graphQLData, graphQLRequestError, organizationKey])

  if (isLoading) {
    return <LoadingSpinner />
  }

  if (!isLoading && !graphQLData) {
    return (
      <ErrorDisplay
        message="Sorry, the organization you're looking for doesn't exist"
        statusCode={404}
        title="Organization not found"
      />
    )
  }

  const organizationDetails = [
    {
      label: 'GitHub Profile',
      value: (
        <Link href={organization.url} className="text-blue-400 hover:underline">
          @{organization.login}
        </Link>
      ),
    },
    {
      label: 'Joined',
      value: formatDate(organization.createdAt),
    },
    {
      label: 'Followers',
      value: organization.followersCount,
    },
    {
      label: 'Location',
      value: organization.location || 'Not provided',
    },
  ]

  const organizationStats = [
    {
      icon: faStar,
      value: organization.stats.totalStars,
      unit: 'Star',
    },
    {
      icon: faCodeFork,
      value: organization.stats.totalForks,
      unit: 'Fork',
    },
    {
      icon: faUsers,
      value: organization.stats.totalContributors,
      unit: 'Contributor',
    },
    {
      icon: faExclamationCircle,
      value: organization.stats.totalIssues,
      unit: 'Issue',
    },
    {
      icon: faCode,
      value: organization.stats.totalRepositories,
      unit: 'Repository',
      pluralizedName: 'Repositories',
    },
  ]

  return (
    <DetailsCard
      details={organizationDetails}
      recentIssues={issues}
      recentReleases={releases}
      pullRequests={pullRequests}
      repositories={repositories}
      stats={organizationStats}
      summary={organization.description}
      title={organization.name}
      topContributors={topContributors}
      type="organization"
    />
  )
}

export default OrganizationDetailsPage
