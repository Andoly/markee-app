import { ChangeEvent, useState, useRef } from 'react'
import { Aside } from 'components/Aside/Aside'
import { Content } from 'components/Content/Content'
import { v4 as uuidv4 } from 'uuid'
import styled from 'styled-components/macro'

type File = {
  id: string;
  name: string;
  content: string;
  active: boolean;
  status: 'editing' | 'saving' | 'saved';
};

export function App () {
  const [files, setFiles] = useState<File[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  const handleAddFile = () => {
    setFiles((files) =>
      files
        .map((file) => ({
          ...file,
          active: false,
        }))
        .concat({
          id: uuidv4(),
          name: 'Sem título',
          content: '',
          active: true,
          status: 'saved',
        }),
    )
  }

  const handleUpdateNameFile = (id: string) => (event: ChangeEvent<HTMLInputElement>) => {
    setFiles(files => files.map(file => {
      if (file.id === id) {
        return {
          ...file,
          name: event.target.value,
          status: 'editing',
        }
      }
      return file
    }))
  }

  return (
    <Main>
      <Aside files={files} onAddFile={handleAddFile} />
      <Content
        file={files.find((file) => file.active === true)}
        onChangeFileName={handleUpdateNameFile}
        inputRef={inputRef}
      />
    </Main>
  )
}

const Main = styled.main`
  display: flex;
  height: 100vh;
`
