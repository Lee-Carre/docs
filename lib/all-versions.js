// const enterpriseServerReleases = require('./enterprise-server-releases')

// version = "plan"@"release"
// example: enterprise-server@2.21
// where "enterprise-server" is the plan and "2.21" is the release
const versionDelimiter = '@'
const latestNonNumberedRelease = 'latest'

const plans = [
  {
    plan: 'main',
    planTitle: 'Latest',
    releases: [latestNonNumberedRelease],
    latestRelease: latestNonNumberedRelease,
    nonEnterpriseDefault: true, // permanent way to refer to this plan if the name changes
    openApiBaseName: '', // used for REST
    miscBaseName: '' // used for GraphQL and webhooks
  }
]

const allVersions = {}

// combine the plans and releases to get allVersions object
// e.g. free-pro-team@latest, enterprise-server@2.21, enterprise-server@2.20, etc.
plans.forEach(planObj => {
  planObj.releases.forEach(release => {
    const version = `${planObj.plan}${versionDelimiter}${release}`

    const versionObj = {
      version,
      versionTitle: planObj.hasNumberedReleases ? `${planObj.planTitle} ${release}` : planObj.planTitle,
      latestVersion: `${planObj.plan}${versionDelimiter}${planObj.latestRelease}`,
      currentRelease: release,
      openApiVersionName: planObj.hasNumberedReleases ? `${planObj.openApiBaseName}${release}` : planObj.openApiBaseName,
      miscVersionName: planObj.hasNumberedReleases ? `${planObj.miscBaseName}${release}` : planObj.miscBaseName
    }

    allVersions[version] = Object.assign(versionObj, planObj)
  })
})

module.exports = allVersions
