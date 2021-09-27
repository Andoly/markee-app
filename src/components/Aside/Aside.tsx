import { useState } from 'react'
import * as S from './Aside.style'
import logoMarkee from './logoMarkee.png'
import * as Icon from 'ui/icons'
import { v4 as uuidv4 } from 'uuid'

type File = {
  id: string;
  name: string;
  content: string;
  active: boolean;
  status: 'editing' | 'saving' | 'saved';
};

const Aside = () => {
  const [files, setFiles] = useState<File[]>([])

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
  return (
    <S.AsideContainer>
      <S.LinkLogo>
        <S.Logo src={logoMarkee} alt='markee.' />
      </S.LinkLogo>
      <S.Archive>Arquivos</S.Archive>
      <S.ButtonPlus onClick={handleAddFile}>
        <Icon.Plus /> Adicionar arquivo
      </S.ButtonPlus>

      <S.ArchivesList>
        {files.map((file) => (
          <S.FileListItem key={file.id}>
            <S.ArchiveItem href={`/file/${file.id}`} active={file.active}>
              {file.name}
            </S.ArchiveItem>
            {file.active && <S.StatusIconStyled status={file.status} />}

            {!file.active && (
              <S.RemoveButton title={`Remover o arquivo ${file.name}`}>
                <S.RemoveIcon />
              </S.RemoveButton>
            )}
          </S.FileListItem>
        ))}
      </S.ArchivesList>
    </S.AsideContainer>
  )
}

export default Aside
