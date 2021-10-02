import { ChangeEvent, useState, useRef, MouseEvent, useEffect } from 'react'
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

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>

    function updateStatus () {
      const file = files.find(file => file.active)

      if (!file || file.status !== 'editing') {
        return
      }

      timer = setTimeout(() => {
        setFiles(files => files.map(file => {
          if (file.active) {
            return {
              ...file,
              status: 'saving',
            }
          }
          return file
        }))

        setTimeout(() => {
          setFiles(files => files.map(file => {
            if (file.active) {
              return {
                ...file,
                status: 'saved',
              }
            }
            return file
          }))
        }, 300)
      }, 300)
    }

    updateStatus()
    return () => clearTimeout(timer)
  }, [files])

  const handleAddFile = () => {
    inputRef.current?.focus()

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

  const handleUpdateContentFile = (id: string) => (event: ChangeEvent<HTMLTextAreaElement>) => {
    setFiles(files => files.map(file => {
      if (file.id === id) {
        return {
          ...file,
          content: event.target.value,
          status: 'editing',
        }
      }
      return file
    }))
  }

  const handleSelectFile = (id: string) => (event: MouseEvent) => {
    event.preventDefault()

    setFiles(files => files.map(file => ({
      ...file,
      active: file.id === id,
    })))
  }

  const handleRemoveFile = (id: string) => {
    setFiles(files => files.filter(file => file.id !== id))
  }

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
