import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`
GalleryContainer.displayName = 'GalleryContainer'

const ImageStyled = styled.img`
  width: 250px;
  height: 200px;
`
ImageStyled.displayName = 'ImageStyled'

const ProjectStyled = styled.div`
  width: 250px;
`
ProjectStyled.displayName = 'ProjectStyled'

const projectPropTypes = {
  src: PropTypes.string,
  subtitle: PropTypes.string,
  tags: PropTypes.array,
  title: PropTypes.string
}

const Project = ({
  src,
  subtitle,
  tags,
  title
}) => {
  return (
    <ProjectStyled>
      <ImageStyled src={src} />
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p>Tags: {tags.map(tag => tag)}</p>
    </ProjectStyled>
  )
}

Project.propTypes = projectPropTypes

const projectsMock = Array(9)
  .fill('')
  .map(() => ({
    src: 'https://i.blogs.es/b6d70c/rick-y-morty/1366_2000.jpeg',
    subtitle: 'Subtitle sample',
    tags: ['eslint', 'angular', 'vue', 'reactjs', 'jest'],
    title: 'Title sample'
  }))

export const Gallery = () => {
  // const [projects, setProjects] = useState(projectsMock)

  return (
    <GalleryContainer>
      {projectsMock.map((project, index) => <Project key={index} {...project} />)}
    </GalleryContainer>
  )
}
