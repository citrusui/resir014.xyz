import * as React from 'react'
import * as classnames from 'classnames'

const styles = require('./styles.module.scss');

interface ProjectNode {
  node: {
    title: string
    year: string
    languages: string[]
    details: string
    url: string
  }
}

interface ProjectsListProps {
  projects: ProjectNode[]
}

const ProjectItem: React.SFC<ProjectNode> = ({ node }) => (
  <div className={styles.projectItem}>
    <span className={styles.projectYear}>{node.year}</span>
    <a href={node.url} className={styles.projectName}>{node.title}</a>
    <p className={styles.projectDetails} dangerouslySetInnerHTML={{
      __html: node.details
    }} />
  </div>
)

const ProjectView: React.SFC<ProjectsListProps> = ({ projects }) => (
  <div className={classnames(styles.root, 'container')}>
    <h2 className={styles.sectionTitle}>Projects</h2>
    {projects.map(({ node }) => <ProjectItem key={node.title} node={node} />)}
  </div>
)

export default ProjectView
