import * as prismic from '@prismicio/client'
import * as prismicNext from '@prismicio/next'

import sm from './sm.json'

/**
 * The project's Prismic repository name.
 */
export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint)

// Update the routes array to match your project's route structure
/** @type {prismic.ClientConfig['routes']} **/
const routes = [
  {
    type: 'news',
    path: '/news/1',
  },
  {
    type: 'news',
    path: '/news/post/:uid',
  },
  {
    type: 'legal_policy',
    path: '/legal',
  },
  {
    type: 'hub',
    path: '/hub/1',
  },
  {
    type: 'hub',
    path: '/hub/post/:uid',
  },
  {
    type: 'job_position',
    path: '/career',
  },
]

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config {prismicNext.CreateClientConfig} - Configuration for the Prismic client.
 */
export const createClient = ({
  previewData,
  req,
  ...config
}: prismicNext.CreateClientConfig = {}) => {
  const client = prismic.createClient(sm.apiEndpoint, {
    routes,
    ...config,
  })

  prismicNext.enableAutoPreviews({ client, previewData, req })

  return client
}
