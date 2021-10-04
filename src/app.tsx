import { Aside } from 'components/Aside/Aside'
import { Content } from 'components/Content/Content'
import styled from 'styled-components/macro'
import { useFiles } from 'resources/files/useFiles'

export function App () {
  const {
    files,
    inputRef,
    handleAddFile,
    handleSelectFile,
    handleUpdateNameFile,
    handleUpdateContentFile,
    handleRemoveFile,
  } = useFiles()

  return (
    <Main>
      <Aside
        files={files}
        onAddFile={handleAddFile}
        onSelectFile={handleSelectFile}
        onRemoveFile={handleRemoveFile}
      />
      <Content
        file={files.find((file) => file.active === true)}
        inputRef={inputRef}
        onChangeFileName={handleUpdateNameFile}
        onChangeContentFile={handleUpdateContentFile}
      />
    </Main>
  )
}

const Main = styled.main`
  display: flex;
  height: 100vh;
`
